const targetElement = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', function () {
	for (let i = 0; i < targetElement.length; i++) {
		const getElementDistance =
			targetElement[i].getBoundingClientRect().top +
			targetElement[i].clientHeight * 0.6; //６割くらい見えたらshow 0.6
		//二つ目が見えたらshowというクラスを足す
		if (window.innerHeight > getElementDistance) {
			targetElement[i].classList.add('show');
		}
		if (window.innerHeight < getElementDistance) {
			targetElement[i].classList.remove('show');
			document.getElementById('modal').classList.remove('active');
			document.getElementById('mask').classList.remove('active');
		}
	}
});

document.getElementById('modalOpen').addEventListener('click', function () {
	document.getElementById('modal').classList.add('active');
	document.getElementById('mask').classList.add('active');
});

document.getElementById('modalClose').addEventListener('click', function () {
	document.getElementById('modal').classList.remove('active');
	document.getElementById('mask').classList.remove('active');
});

document.getElementById('mask').addEventListener('click', function () {
	document.getElementById('modal').classList.remove('active');
	document.getElementById('mask').classList.remove('active');
});
