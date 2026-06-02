/*
Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/

const input = require("readline-sync");

//creating base class LibraryItem
class LibraryItem {
    constructor (title, id){
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    
    //method to checkout a book
    checkout(){

        if (this.isAvailable){
            return `${this.title} is available for checkout.`;
        }else{
            return `${this.title} is currently not available for checkout.`;
        }

    }

    //method to return a book
    returnItem(){
       /*
        if (!this.isAvailable){
            return `${this.title} is not returned.`;
        }else{
            return `${this.title} is returned.`;
        }
    }*/
   return `${this.title} successfully returned.`;
    }
    /*
    //method to chcek if an item user enters is available
    checkTitle(){
    //sample array to store few books, dvd and magazine
        let bookList = ["Harry Potter", "Time", "JavaScript"];
        const userInput = input.question("Enter the title?");
        if(!bookList.includes(userInput)){
            console.log(`${userInput} not available`);
        }
        else{
            console.log(`${userInput} is available`);
        }
            
    } */
}

// defining new child class 
class Book extends LibraryItem {
    constructor(title, id, author, genre){
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
    //method to display unique properties of child class
    displayBook(){
        console.log(`${this.author}, ${this.genre}`);
    }
}

// defining new child class 
class DVD extends LibraryItem{
    constructor(title, id, director, duration){
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
     //method to display unique properties of child class
    displayDVD(){
        console.log(`${this.director}, ${this.duration}`);
    }
}

// defining new child class 
class Magazine extends LibraryItem{
    constructor(title, id, issueNumber, publisher){
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
 //method to display unique properties of child class
    displayMagazine(){
        console.log(`${this.issueNumber}, ${this.publisher}`);
    }
}
 //creating/initializing an object of the class Book
const book1 = new Book("Harry Potter", 1234, "J.K.Rowling", "Fiction");
console.log(book1);
console.log(book1.checkout());
console.log(book1.returnItem());
book1.displayBook();
//book1.checkTitle();

//creating/initializing an object of the class DVD
const dvd1 = new DVD("JavaScript", 122, "Director", 6);
console.log(dvd1);
console.log(dvd1.checkout());
console.log(dvd1.returnItem());
dvd1.displayDVD();

//creating/initializing an object of the class Magazine
const magazine1 = new Magazine("Time", 555, 156,"Time USA");
console.log(magazine1);
console.log(magazine1.checkout());
console.log(magazine1.returnItem());
magazine1.displayMagazine(); 