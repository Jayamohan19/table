document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector(".btn");
    var overlay = document.querySelector(".overlay");
    var bookdetail = document.querySelector(".bookdetails");
    var addbtn = document.getElementById("addbtn");
    var cancel = document.getElementById("canbtn");

    popup.addEventListener("click", () => {
        overlay.style.display = "block";
        bookdetail.style.display = "block";
        addbtn.textContent = "Add"; // Reset button text
        resetForm(); // Reset form fields
    });

    cancel.addEventListener("click", () => {
        overlay.style.display = "none";
        bookdetail.style.display = "none";
        resetForm(); // Reset form fields
    });

    addbtn.addEventListener("click", () => {
        if (addbtn.textContent === "Add") {
            addBook();
        } else if (addbtn.textContent === "Save Changes") {
            saveChanges();
        }
    });

    function addBook() {
        overlay.style.display = "none";
        bookdetail.style.display = "none";

        var title = document.getElementById("booktitle").value;
        var author = document.getElementById("author").value;
        var description = document.getElementById("description").value;

        if (title && author && description) {
            var div = document.createElement("div");
            div.setAttribute("class", "book-container " + title);
            div.innerHTML = `<h1>${title}</h1>
                             <h3>${author}</h3>
                             <p>${description}</p>
                             <button id="delete1">Delete</button>
                             <button onclick="editBook(event)">Edit</button>`;

            var maindiv = document.getElementById("main");
            maindiv.appendChild(div);

            resetForm(); // Reset form fields after adding
        } else {
            alert("Please fill in all fields.");
        }
    }

   var deletebook=document.getElementById("delete1");

   deletebook.addEventListener("click",(event)=>{
    event.target.parentElement.remove();
   })

    function editBook(event) {
        var bookContainer = event.target.parentElement;
        var title = bookContainer.querySelector("h1").textContent;
        var author = bookContainer.querySelector("h3").textContent;
        var description = bookContainer.querySelector("p").textContent;

        document.getElementById("booktitle").value = title;
        document.getElementById("author").value = author;
        document.getElementById("description").value = description;

        addbtn.textContent = "Save Changes"; // Change button text
        overlay.style.display = "block";
        bookdetail.style.display = "block";

        addbtn.onclick = function() {
            saveChanges(bookContainer);
        };
    }

    function saveChanges(bookContainer) {
        var title = document.getElementById("booktitle").value;
        var author = document.getElementById("author").value;
        var description = document.getElementById("description").value;

        if (title && author && description) {
            var updatedContent = `<h1>${title}</h1>
                                  <h3>${author}</h3>
                                  <p>${description}</p>
                                  <button onclick="deleteBook(event)">Delete</button>
                                  <button onclick="editBook(event)">Edit</button>`;

            bookContainer.innerHTML = updatedContent;
            resetForm(); // Reset form fields after editing
            addbtn.textContent = "Add"; // Reset button text
            overlay.style.display = "none";
            bookdetail.style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    }

    function resetForm() {
        document.getElementById("booktitle").value = "";
        document.getElementById("author").value = "";
        document.getElementById("description").value = "";
    }
});
