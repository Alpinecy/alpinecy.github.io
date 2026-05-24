function setword() {
	var w = ["stupid", "shkolnik", "human", "man", "generating some shit"]
	var rw = w[Math.floor(Math.random() * w.length)];
	var s = document.querySelector("#im")
	s.textContent = rw
}
document.addEventListener("DOMContentLoaded", (event) => {
setword();
});
function go(site, page) {
	window.location.href = "https://" + site + "/" + page;
} 