console.dir(document);
document.getElementById("myHeading").innerHTML = "My name?";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

document.querySelector(".red").addEventListener('click', () => {
    document.body.setAttribute('class', 'redBack')
});

document.querySelector(".green").addEventListener('click', () => {
    document.body.setAttribute('class', 'greenBack')
});

document.querySelector(".blue").addEventListener('click', () => {
    document.body.setAttribute('class', 'blueBack')
});

document.querySelector(".unpleasant").addEventListener('click', () => {
    document.body.setAttribute('class', 'unpleasantBack')
});

document.querySelector(".reset").addEventListener('click', () => {
    document.body.removeAttribute('class')
});