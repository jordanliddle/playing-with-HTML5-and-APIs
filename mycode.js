var elem;
function initiate() {
	elem = document.getElementById('main');
	alert(elem.setAttribute("id", 'jordan'));
}
addEventListener('load', initiate);