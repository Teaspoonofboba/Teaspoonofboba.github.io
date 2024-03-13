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



const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        }
    });
});

const hidenElements2 = document.querySelectorAll('.menu-text');
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

function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}

$(".showbutton").on("click", function(e) {
    $(".form").hide(); 
    $("#" + $(this).data("id")).toggle('fast'); // or .toggle()
});