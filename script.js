const myLibrary = [];

function Book(id, title, author, pages, read) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		if (read === false)
			console.log(`${this.name} by ${this.author}, ${this.pages} pages, not read yet`);
	}
}

function addBookToLibrary(n) {
	
	for(let i = 0; i < n; i++){
		let title = prompt("Title");
		let author = prompt("Author");
		let pages = prompt("Pages:");
		let read = prompt("Read ? (True or false)");
		const newBook = new Book(title, author, pages, read);
		myLibrary.push(newBook);
	}

}
function Print(){
	for(let i = 0; i < n; i++){
		myLibrary[i].info();
	}
}
let n = prompt("Nhap so luong");
addBookToLibrary(n);
Print();