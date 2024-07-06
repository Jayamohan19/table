var popup = document.querySelector(".btn")
var overlay = document.querySelector(".overlay")
var bookdetail = document.querySelector(".bookdetails")
popup.addEventListener("click", () => {
    overlay.style.display = "block";
    bookdetail.style.display = "block";

    resetForm();



}
)

var cancel = document.getElementById("canbtn")

cancel.addEventListener("click", () => {
    overlay.style.display = "none";
    bookdetail.style.display = "none";
}
)

var additm = document.getElementById("addbtn")
additm.addEventListener("click", () => {


    overlay.style.display = "none";
    bookdetail.style.display = "none";


    var title = document.getElementById("booktitle").value
    var des = document.getElementById("description").value
    var author = document.getElementById("author").value



    var div = document.createElement("div")
    div.setAttribute("class", "book-container " +title)
    div.innerHTML = `<h1 class="h1${title}">${title}</h1>
            <h3 class="h3${title}">${author}</h3>
            <p class="p${title}">${des}</p>
            <button onclick="deleteelement(event)" >Delete</button>
             <button onclick="adddata(event)">Edit</button>`



    var maindiv = document.getElementById("main")
    maindiv.append(div)




}
)

function deleteelement(event) {
    event.target.parentElement.remove()
}

function adddata(event) {
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

    function saveChanges(bookContainer) {
        var title = document.getElementById("booktitle").value;
        var author = document.getElementById("author").value;
        var description = document.getElementById("description").value;

        if (title && author && description) {
            var updatedContent = `<h1>${title}</h1>
                                  <h3>${author}</h3>
                                  <p>${description}</p>
                                  <button onclick="deleteelement(event)">Delete</button>
                                  <button onclick="adddata(event)">Edit</button>`;
            deleteelement(event);
            addbtn.textContent = "Add"; 
            bookContainer.innerHTML = replace(updatedContent);
            resetForm(); // Reset form fields after editing
            // Reset button text
            overlay.style.display = "none";
            bookdetail.style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    }

}

function resetForm() {
    document.getElementById("booktitle").value = "";
    document.getElementById("author").value = "";
    document.getElementById("description").value = "";
}