const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('itemimgshow');
        }
        else
        {
            entry.target.classList.remove('itemimgshow');
        }
    });
});

const hidenElements = document.querySelectorAll('.itemimg');
hidenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('animation');
        }
        else
        {
            entry.target.classList.remove('animation');
        }
    });
});

const hidenElements2 = document.querySelectorAll('.animate');
hidenElements2.forEach((el) => observer2.observe(el))


let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}