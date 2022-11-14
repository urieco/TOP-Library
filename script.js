const html = {
    addBookBtn: document.querySelector(".add-book-btn"),
    bookshelf: document.querySelector(".bookshelf"),
    close: document.getElementsByClassName("close")[0],
    form: document.getElementById("form"),
    submit: document.querySelector("#submit"),
    reset: document.querySelector("#reset")
}

// Library and some sample references
let myLibrary = [
    {
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        pages: 607,
        status: "Read"
    },
    { 
        title: "Spring Snow: The Sea Of Fertility, 1", 
        author: "Yukio Mishima", 
        pages: 400, 
        status: "Haven't read"
    },
    {
        title: "Sans Famille", 
        author: "Hector Malot", 
        pages: 537, 
        status: "Read"
    }
];

class Book {
    constructor(title, author, pages, status) {
        //the constructor...
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

// ** Display all current books available in the library ** //

function displayBook() {
    removeAllDisplay();
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        html.bookshelf.appendChild(bookCard);
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data-index", `${i}`);

        const title = document.createElement("h1");
        const authorPages = document.createElement("h2");
        const status = document.createElement("h3");

        bookCard.appendChild(title);
        bookCard.appendChild(authorPages);
        bookCard.appendChild(status);

        title.textContent = myLibrary[i].title;
        authorPages.innerHTML = `by ${myLibrary[i].author} ` 
                                + "<br />" 
                                + `-- ${myLibrary[i].pages} pages --`;
        status.textContent = ` Status: ${myLibrary[i].status}`;
        if (myLibrary[i].status == "Read") status.style.color = "green"; 
        else status.style.color = "red"; 

        // Remove Button
        const removeBtn = document.createElement("button"); 
        bookCard.appendChild(removeBtn); 
        removeBtn.textContent = "X"; 
        removeBtn.classList.add("remove"); 
            removeBtn.addEventListener("click", () => {
            let removedIndex = +removeBtn.parentNode.getAttribute("data-index"); 
            myLibrary.splice(removedIndex, 1);
            removeBtn.parentNode.remove();
        });

        // Read Button
        const toggleRead = document.createElement("button");
        bookCard.appendChild(toggleRead); 
        toggleRead.innerHTML = "&#10004;";
        if (myLibrary[i].status == "Read") toggleRead.classList.add("toggle-to-unread"); 
        else toggleRead.classList.add("toggle-to-read"); 
        
        toggleRead.addEventListener("click", () => {
            toggleRead.classList.toggle("toggle-to-read");
            toggleRead.classList.toggle("toggle-to-unread");
            if (myLibrary[i].status == "Read") myLibrary[i].status = "Haven't read";
            else if (myLibrary[i].status == "Haven't read") myLibrary[i].status = "Read";
            displayBook(); 
        })
    }
}

function removeAllDisplay() {
    const allBook = document.querySelectorAll(".bookshelf > .book-card");
    allBook.forEach(book => book.remove());
}

// ** Add new book ** //

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = () => {
        if (document.querySelector('input[type="checkbox"]').checked == true) {
            return "Read";
        } else {
            return "Haven't read";
        }
    }

    if (!title || !author || !pages) {
        document.querySelector(".warning").style.visibility = "visible";
        e.preventDefault();
    } else {
        const newBook = new Book(title, author, pages, status())
        myLibrary.push(newBook);
        document.querySelector(".warning").style.visibility = "hidden";
    }
}

html.submit.addEventListener("click", (e) => {
    addBookToLibrary();
    displayBook();
    html.reset.click();
    e.preventDefault();
});

// ** Modal Popup **//

html.addBookBtn.addEventListener("click", () => html.form.style.display = "block");
html.close.addEventListener("click", () => {
    html.form.style.display = "none";
});
window.onclick = (e) => {
    if (e.target == html.form) {
        html.form.style.display = "none";
    }
}

// Execute right after reloading the page
displayBook(); 


