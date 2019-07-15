document.addEventListener('DOMContentLoaded', main);

function main()
{
    mobileMenu();
}

function mobileMenu()
{
    const menuOpenButton = document.querySelector('.menu__mobile-controls-open');
    const menuCloseButton = document.querySelector('.menu__mobile-controls-close');
    const menuList = document.querySelector('.menu__list');


    menuOpenButton.addEventListener('click', (e) => 
    {
        e.preventDefault();

        menuList.classList.add('menu__list--visible');
        menuCloseButton.classList.add('menu__mobile-controls-close--visible');

        function setMenuHeight()
        {
            let menuHeight = 0;
            menuHeight = menuList.querySelector('li').clientHeight * menuList.querySelectorAll('li').length;
            if(counter % 2 === 0)
            {
                menuList.style.height = `${menuHeight}px`;
            } else
            {
                menuList.removeAttribute('style');
            }
            counter++;
        }
    });

    menuCloseButton.addEventListener('click', (e) => 
    {
        e.preventDefault();

        menuList.classList.remove('menu__list--visible');
        menuCloseButton.classList.remove('menu__mobile-controls-close--visible');
    });
}