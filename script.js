var section = document.querySelector('section'),
    btn = document.querySelector('button'),
    x = document.querySelector('.x'),
    parent = document.querySelector('.modal-parent');

btn.addEventListener('click', appear);

function appear() {
    parent.style.display = "block";
    section.style.filter = "blur(10px)";
}

x.addEventListener('click', disappearx);

function disappearx() {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
}

parent.addEventListener('click', disappear);

function disappear(e) {
    if(e.target.className == "modal-parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
    }
}