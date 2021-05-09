const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");
sideNav.style.right = "-250px";

menuBtn.onclick = function () {
	if (sideNav.style.right == "-250px") {
		sideNav.style.right = "0";
		menu.src = "./Barber_Shop_img/close.png";
	} else {
		sideNav.style.right = "-250px";
		menu.src = "./Barber_Shop_img/menu.png";
	}
};
