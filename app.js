//ingredient imgs
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('ing-slide');
        }
    });
});

const hidenElements = document.querySelectorAll('.ingredient');
hidenElements.forEach((el) => observer.observe(el));


//menu text
const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        }
    });
});

const hidenElements2 = document.querySelectorAll('.menu-text');
hidenElements2.forEach((el) => observer2.observe(el));



//mobileicons
const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        }
    });
});

const hidenElements3 = document.querySelectorAll('.icon-mobile');
hidenElements3.forEach((el) => observer3.observe(el));


//DESKTOP ICONS
const observer5 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('desktop-show');
        }
    });
});

const hidenElements5 = document.querySelectorAll('.icon-desktop');
hidenElements5.forEach((el) => observer5.observe(el));

const observer6 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('desktop-show');
        }
    });
});

const hidenElements6 = document.querySelectorAll('.icon-desktop-left');
hidenElements6.forEach((el) => observer6.observe(el));