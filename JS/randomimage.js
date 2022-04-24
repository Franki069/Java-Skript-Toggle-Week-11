const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['img5.jpg', 'img4.webp', 'img3.webp', 'img1.webp'];

myButton.addEventListener('click', changeImage)

function changeImage(){
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = 'img/' + images[randomIndex];
}