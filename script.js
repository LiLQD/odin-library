const myLibrary = [];

function Book(id, title, author, pages, read) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		console.log(`${this.id} ${this.title} by ${this.author}, ${this.pages} pages, not read yet`);
	}
}

function addBookToLibrary() {
	let id = crypto.randomUUID();
	let title = prompt("Title");
	let author = prompt("Author");
	let pages = prompt("Pages:");
	let read = prompt("Read ? (True or false)");
	const newBook = new Book(id, title, author, pages, read);
	myLibrary.push(newBook);
	console.log(newBook.info());
}
function addCardToPage() {
	const card = document.createElement("div");
	cardContainer.appendChild(card)
}

const cardContainer = document.querySelector(".card-container");


const openButton = document.querySelector("#add-btn");
const closeButton = document.querySelector(".close-dialog");
const saveButton = document.querySelector(".save-book");
const deleteButton = document.querySelectorAll(".remove");
const addBookDialog = document.querySelector('#add-dialog');

deleteButton.forEach(button => {
	button.addEventListener('click', () => {
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode);
	})
});

saveButton.addEventListener('click', addCardToPage());
openButton.addEventListener('click', () => {
	addBookDialog.showModal();
})
closeButton.addEventListener("click", () => {
	addBookDialog.close()
})