# TOP-Library
The Odin Project's Library Application

**General Outline**
HTML, CSS: 
- Add "NEW BOOK" button that brings up a form. 
    + Book inputting area: Title, author, number of pages, status (read or unread).
    + The input in the form will be submitted as an object. 
    + New objects are added to an array called myLibrary.

- Add a button on each book's display to remove the book from the library. 

- Add a button on each book's display to change its 'read' status. 

JS: 
Basic structure: 
    let myLibrary = [];

    function Book(title, author, pages, status) { 
        // the constructor...
    }

    function addBookToLibrary() { 
        //do stuff here. 
    }

Step 1: Create the constructor.
Step 2: Test it out with a sample of selected books. 
Step 3: Write a function that loops through the array and displays each book on the page. 
Step 4: Write a function to add new books to the array, linked with the submit button. 
Step 5: Automatically update the list on the website. 
Step 6: Add a pop-up modal form for adding new books.
Step 7: Add the function to submit to new book. 
        Link the form to the constructor.
            + Status with a Read checkbox
            + Automatically capitalizing the title and author name if the user hasn't done so. 
        The submit button will create a new object: const newBook = new Book();
Step 8: Add a button to remove certain book objects. 

Advanced functions: 
- Add a search function with certain filter categories selector. 


**Book samples**
book1 = { 
    title: "The Wind-Up Bird Chronicle", 
    author: "Haruki Murakami", 
    page:  607, 
    status: "Read"
}

book2 = { 
    title: "Spring Snow: The Sea Of Fertility, 1", 
    author: "Yukio Mishima", 
    page: 400, 
    status: "Unread"
}

