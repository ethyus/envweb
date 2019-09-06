const rightsideitems = document.querySelectorAll('.portfolio-item-wrapper')

rightsideitems.forEach(rightsideitem => {
    rightsideitem.addEventListener('mouseover', () => {
        rightsideitem.childNodes[1].classList.add('img-darken');
    })

    rightsideitem.addEventListener('mouseout', () => {
        rightsideitem.childNodes[1].classList.remove('img-darken');
    })


})