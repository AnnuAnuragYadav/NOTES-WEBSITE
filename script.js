function searchFunction(){

let query = document.getElementById("searchInput").value.toLowerCase();

if(query.includes("c") || query.includes("programming")){
    window.location.href = "c-programming.html";
}
else if(query.includes("iiot")){
    window.location.href = "iiot.html";
}
else if(query.includes("notes")){
    window.location.href = "notes.html";
}
else if(query.includes("pyq")){
    window.location.href = "pyqs.html";
}
else if(query.includes("resource")){
    window.location.href = "resources.html";
}
else{
    alert("No results found ❌");
}

}





let subjects = [
"C Programming",
"IIOT",
"Data Structures",
"Operating System",
"Computer Networks",
"Python",
"Java"
];

function showSuggestions(){

let input = document.getElementById("searchInput").value.toLowerCase();
let suggestionBox = document.getElementById("suggestions");

suggestionBox.innerHTML = "";

if(input === "") return;

let filtered = subjects.filter(item =>
item.toLowerCase().includes(input)
);

filtered.forEach(item => {
let li = document.createElement("li");
li.innerText = item;

li.onclick = function(){
document.getElementById("searchInput").value = item;
suggestionBox.innerHTML = "";
};

suggestionBox.appendChild(li);
});

}

