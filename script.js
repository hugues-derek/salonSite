const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");
const liens = document.querySelectorAll("#sideNav nav ul li a");
const logo = document.querySelector(".logo");
const para = document.querySelector(".banner-text p");
const title = document.querySelector(".banner-text h1");
const buttons = document.querySelectorAll(".banner-btn a");

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
for (let elt of liens) {
	elt.onclick = () => {
		if ((sideNav.style.right = "0")) {
			sideNav.style.right = "-250px";
			sideNav.style.transition = "1s";
			menu.src = "./Barber_Shop_img/menu.png";
		}
	};
}

//Pour Controler le scroll de la page
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedDuration: true,
});

//Pour les animations

const TL1 = new gsap.timeline({ paused: false });

TL1.from(title, 3, { scale: 0, x: -100 }, "+=1")
	.from(
		logo,
		1,
		{
			opacity: 0,
			y: -100,
		},
		"-=1"
	)
	.from(para, 1, { opacity: 0, x: -100 }, "-=0.5")
	.from(
		menuBtn,
		1,
		{
			opacity: 0,
			y: -100,
		},
		"-=1"
	)
	.from(buttons[0], 2, { opacity: 0, x: -200 }, "+= 1")
	.from(buttons[1], 2, { opacity: 0, x: 200 }, "+= 1");
