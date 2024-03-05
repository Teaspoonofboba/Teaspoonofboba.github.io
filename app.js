const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hidenElements = document.querySelectorAll('.ingredient');
hidenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        }
    });
});

const hidenElements2 = document.querySelectorAll('.menuitem');
hidenElements2.forEach((el) => observer.observe(el));




const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        }
    });
});

const hidenElements3 = document.querySelectorAll('.icon-mobile');
hidenElements3.forEach((el) => observer.observe(el));
