const hamButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-menu');
const main = document.querySelector('menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');
});