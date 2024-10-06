/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/* menu show */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/* menu hidden */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav link we remove show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header')
    //add a class if bottom offset is greater than 50 of the viewport
    this.scrollY>=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')  
    
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
        contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()

    //serviceid-templateid-#form-publickey
    emailjs.sendForm('service_d0wkf7w','template_7cyc6ms','#contact-form','BmKIcQWpwUI2qoPpb')
        .then(() =>{
            //show sent msg
            contactMessage.textContent='Message sent successfully ✅'

            //remove msg after 5 seconds
            setTimeout(()=>{
                contactMessage.textContent=''
            },5000)

            //clear input fields
            contactForm.reset()
        },()=>{
            contactMessage.textContent='Message not sent(Service error) ❌'
        })

}   

contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollDown=window.scrollY

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId=current.getAttribute('id'),
              sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown>sectionTop && scrollDown<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===========*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:1500,
    delay:200,
})
sr.reveal(`.home__data,.experience,.skills,.contact__container`)
sr.reveal(`.home__img`,{delay:200})
sr.reveal(`.home__scroll`,{delay:300})
sr.reveal(`.work__card`,{interval:10})
sr.reveal(`.about__content`,{origin:'right'})
sr.reveal(`.about__img`,{origin:'left'})