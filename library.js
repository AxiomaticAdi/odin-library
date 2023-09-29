const myLibrary = [];

function Book(title, author, read = false) {
	this.title = title;
	this.author = author;
	this.read = read;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	displayBooks();
}

function displayBooks() {
	const table = document.getElementById("library-box");
	// Clear table, but keep the header row
	table.innerHTML = "<tr><th>Title</th><th>Author</th><th>Read</th></tr>";
	myLibrary.forEach((book) => {
		const row = table.insertRow(-1);
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		const cell3 = row.insertCell(2);
		cell1.innerHTML = book.title;
		cell2.innerHTML = book.author;
		cell3.innerHTML = book.read ? "Yes" : "No";
	});
}

function submitForm() {
	// Capture data from form
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const read = document.getElementById("read").checked;

	// If title or author empty, reject
	if (title === "" || author === "") {
		document.getElementById("error-line").innerHTML = "Cannot submit an empty value for Title or Author!";
		return;
	}

	// Create and add book
	const newBook = new Book(title, author, read);
	addBookToLibrary(newBook);

	// Clear form
	const form = document.getElementById("book-form");
	form.reset();
}
