var div = document.createElement("div");
div.innerHTML=prompt("User value");
document.body.append(div);

addEventListener("mouseover", (event) => {div.style.color = "blue"});


addEventListener("mouseout", (event) => {div.style.color = "black"});


