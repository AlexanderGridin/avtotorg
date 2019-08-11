document.addEventListener('DOMContentLoaded', main);

function main()
{
    mobileMenu();
    showModal();
    srollTop();
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

function showModal()
{
    const modal = document.querySelector('.modal');
    const showModalButtons = document.querySelectorAll('.show-modal');
    const closeModalElements = document.querySelectorAll(".modal-close");

    for(let i = 0; i < showModalButtons.length; i++)
    {
        showModalButtons[i].addEventListener('click', setModalVisible);
    }

    for(let i = 0; i < closeModalElements.length; i++)
    {
        closeModalElements[i].addEventListener('click', hideModal);
    }

    function setModalVisible(e)
    {
        e.preventDefault();
        modal.classList.add('visible');
    }

    function hideModal(e)
    {
        e.preventDefault();
        modal.classList.remove('visible');
    }
}

function srollTop()
{
    let goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() 
    {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) 
        {
          goTopBtn.classList.add('back-to-top--visible');
        }

        if (scrolled < coords) 
        {
          goTopBtn.classList.remove('back-to-top--visible');
        }
    }
    
    function backToTop() 
    {
        if (window.pageYOffset > 0) 
        {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 0);
        }
    }
    
      
    
      
}