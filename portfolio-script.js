function scrolling(lists){
	lists.forEach((index) => {
	index.addEventListener('click', (e) => {
		e.preventDefault();
		let targetId = index.getAttribute('href');
		let targetElement = document.querySelector(targetId);
		let coordinates = targetElement.getBoundingClientRect();
		let yPosition = coordinates.y;
		let intervalId = setInterval(() => {
			if(yPosition <= 0){
				clearInterval(targetId);
			}
			else{
				window.scrollBy(0,50);
				yPosition -= 50;
			}
		},30);
	})
});
}

function initialWidths(){
	for(let i of skillsLists){
		i.style.width = 0 + '%';
	}
}

function fillBar(i){
	let divWidth = parseInt(i.getAttribute('data-skill-level'));
	i.style.width = divWidth + '%';
	i.style.transition = 'width 0.5s ease-in-out';
}

function initialWidth(i){
	i.style.width = 0 + '%';
}

function scrollChecking(){
	let count = 0;
	for(let i of skillsLists){
		let coordinates = i.getBoundingClientRect();
		if(!animationArray[count] && coordinates.y <= window.innerHeight){
			animationArray[count] = true;
			fillBar(i);
		}

		if(coordinates.y > window.innerHeight){
			animationArray[count] = false;
			initialWidth(i);
		}
		count++;
	}
}

let linkLists = document.querySelectorAll('#main-nav li a');
let hamburgerLists = document.querySelectorAll('#hamburger-nav li a'); 
let skillsLists = document.querySelectorAll('.skills-progress > div');
let animationArray = [];

initialWidths();

for(let i = 0;i < skillsLists.length;i++){
	animationArray.push(false);
}

window.addEventListener('scroll', scrollChecking);
scrolling(linkLists);
scrolling(hamburgerLists);