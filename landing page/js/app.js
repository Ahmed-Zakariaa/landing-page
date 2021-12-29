// global variable
const myList = document.getElementById('navbar__list'); 
const mySection = document.querySelectorAll('section');
const myFragmentList = document.createDocumentFragment();
// loop for sections to build the nav item 
mySection.forEach((element)=> { 
    const listText  = element.getAttribute('data-nav');
    const myNav = document.createElement('li');
    const myLink = document.createElement('a');
    const linkHref = element.getAttribute('id')
    myLink.textContent = listText;
    myLink.setAttribute('href', '#'+ linkHref)
    // add event listener to the link to scroll down to the section
    myLink.addEventListener('click' , () => {      
            element.scrollIntoView({ behavior: 'smooth' });
        })
    myNav.appendChild(myLink);
    myLink.classList.add('menu__link')
    myFragmentList.appendChild(myNav);
});
// add the list after creating it as document fragment to prevent a lot of reflow
myList.appendChild(myFragmentList);
/*add event listener to choose the section on the viewport and make it 
active and match it with his link at the same time */
window.addEventListener('scroll', ()=>{
    mySection.forEach(section=>{
        const viewSec = section.getBoundingClientRect();
        const actClass = section.getAttribute('data-nav');
        if(viewSec.top > 0 && viewSec.top < 500) {
            section.classList.add('your-active-class');
            const links = document.querySelectorAll('a');
            links.forEach(listLink => {
                listLink.addEventListener('click', (evt)=>{
                    evt.preventDefault();
                })
                if (listLink.innerText === actClass) {
                    listLink.classList.add('active')
                } else {
                    listLink.classList.remove('active')
                }
            });
        }
        else {
            section.classList.remove('your-active-class')
        }
    });
});
