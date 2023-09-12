document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const bookList = document.getElementById("bookList");

  fetchButton.addEventListener("click", () => {
    fetch("https://books-api-rz6d.onrender.com/books") // Replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Call the displayBooks function to render the list of books.
        displayBooks(data, bookList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  function displayBooks(books, targetElement) {
    // Clear the existing content in the target element.
    targetElement.innerHTML = "";

    // Create a list of books.
    const ul = document.createElement("ul");
    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `${book.title} - ${book.country} - ${book.pages} pages`;
      ul.appendChild(li);
    });

    // Append the list to the target element.
    targetElement.appendChild(ul);
  }
});
