const newSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7 + 1.5}s`
            }
        })

        burger.classList.toggle('toggle')

    })

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active')
            burger.classList.toggle('toggle')
        })
    })
}




newSlide()