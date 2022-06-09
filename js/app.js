

let navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


const buildNavbar = ()=> {
	sections.forEach((element)=>{
	    let listItem = document.createElement("li");
	    listItem.classList.add("navbar__list__item");
    	let sectionName = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<button class="btn" type="button"><a href="#${currentSectionId}" class="nav__hyperlink">${sectionName}</a></button>`;
        navbarList.appendChild(listItem);
    });
}
window.addEventListener('load', buildNavbar())



function isInViewport(elem) {
	var distance = elem.getBoundingClientRect();

	return (
		distance.top >= -300 &&
		distance.left >= 0 &&
		distance.bottom <= (1.3 * window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};


function deactivateSections() {
    sections.forEach((element)=>{
        element.classList.remove("your-active-class", "active");
    });
}

function deactivateNavLinks() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element)=>{
        element.parentElement.classList.remove("active-nav");
    });
}
function activateCurrentSection(currentSection) {
    currentSection.classList.add("your-active-class", "active");

    deactivateNavLinks();
    activateNavLinks(currentSection.getAttribute('id'));
}

function activateNavLinks(currentSectionId) {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
        navbarAnchors.forEach((element)=>{
            if(element.getAttribute('href') == `#${currentSectionId}`) {
                element.parentElement.classList.add("active-nav");
            }
        });
}
window.addEventListener('scroll', function (event) {
	event.preventDefault();
	
    sections.forEach((element) => {

        if (isInViewport(element)) {
            deactivateSections();
            activateCurrentSection(element);

        } else if(window.scrollY==0) {
            deactivateSections();
            deactivateNavLinks();

        }
    }, false);
});