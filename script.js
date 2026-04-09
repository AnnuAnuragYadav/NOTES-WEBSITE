function searchFunction(){

let query = document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".card");

let message=document.getElementById("noresult");

let found=false;

cards.forEach(card=>{
    let text=card.innerText.toLowerCase();
    let words = text.split(" ");
    let abbreviation = words.map(word => word[0]).join("");

    if(text.includes(query) || abbreviation.includes(query)){
        card.style.display = "block";
        if (!found){
            card.scrollIntoView({behavior:"smooth",block:"center"});
            found=true;
        }
    }else{
        card.style.display="none";
        
    }
});
if(!found){
    message.style.display = "block";

    // scroll to message
    message.scrollIntoView({behavior:"smooth", block:"center"});
} else {
    message.style.display = "none";
}

}



document.addEventListener("DOMContentLoaded", function() {
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
});
});

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

