const producnames = [
	"apple",
	"banana",
	"meat",
	"salt",
	"pepper",
	"noodle",
	"sugar",
];

let products = "";
for (let i = 0; i < 5; i++) {
	products += `<div>${producnames[i]}</div>`;
}

// Note: Because this code is goin to get imported by the host/container
// we need to make sure the index.html in "container" also has a div#dev-products in body
document.querySelector("#dev-products").innerHTML = products;
