class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been checked out.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }

    displayBookInfo() {
        console.log(`Book: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Available: ${this.isAvailable}`);
        console.log('-------------------');
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }

    displayDVDInfo() {
        console.log(`DVD: ${this.title}`);
        console.log(`Director: ${this.director}`);
        console.log(`Duration: ${this.duration} minutes`);
        console.log(`Available: ${this.isAvailable}`);
        console.log('-------------------');
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    displayMagazineInfo() {
        console.log(`Magazine: ${this.title}`);
        console.log(`Issue Number: ${this.issueNumber}`);
        console.log(`Publisher: ${this.publisher}`);
        console.log(`Available: ${this.isAvailable}`);
        console.log('-------------------');
    }
}

// Create instances
const book1 = new Book(
    "The Hobbit",
    101,
    "J.R.R. Tolkien",
    "Fantasy"
);

const dvd1 = new DVD(
    "Inception",
    202,
    "Christopher Nolan",
    148
);

const magazine1 = new Magazine(
    "National Geographic",
    303,
    45,
    "National Geographic Society"
);

// Display information
book1.displayBookInfo();
dvd1.displayDVDInfo();
magazine1.displayMagazineInfo();

// Test inherited methods
book1.checkOut();
console.log(`Available after checkout: ${book1.isAvailable}`);

book1.returnItem();
console.log(`Available after return: ${book1.isAvailable}`);
