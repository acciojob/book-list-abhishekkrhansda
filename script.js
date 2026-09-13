//your JS code here. If required.
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let btn = document.querySelector("#submit");
let t = document.querySelector(".table");

btn.addEventListener("click",() => {
	let row = document.createElement("tr");
	row.innerHTML = `
	<td>${title.value}</td>
	<td>${author.value}</td>
	<td>${isbn.value}</td>
	<td><button class="clear">clear</button></td>`

	t.appendChild(row);

	title.value = "";
	author.value ="";
	isbn.value = "";
	
})

t.addEventListener("click",(e) =>{
	if(e.target.classList.contains("clear")){
		e.target.parentElement.parentElement.remove();
	}
})