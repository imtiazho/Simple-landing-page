// Picture change
const imgSlider = (path) => {
    document.querySelector('.startbucks').src = path;
}

// Color change
const circleColorChange = (color) =>{
    const cirlce = document.querySelector('.circle');
    cirlce.style.background = color;
}

// Nav Bar
const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}