const btnMenu = document.getElementById('menu');

function toggleMenu(){
    const navigation = document.getElementById('nav');
    navigation.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);