// Picture change
const imgSlider = (path) => {
    document.querySelector('.startbucks').src = path;
}

// Color change
const circleColorChange = (color) =>{
    const cirlce = document.querySelector('.circle');
    cirlce.style.background = color;
}