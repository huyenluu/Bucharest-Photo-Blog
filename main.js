const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-elements');
    const navElement = document.querySelectorAll('.nav-elements li');

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navElement.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navElementsFade 0.5s ease forwards ${index / 7 + 0}s`
            }
        });

        //burger animation
        burger.classList.toggle('toggle');

    
    });
}
navSlide();