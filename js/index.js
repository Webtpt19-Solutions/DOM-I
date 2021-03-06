const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav a')
navItems.forEach((link, i) => {
  link.textContent = siteContent['nav'][`nav-item-${i + 1}`]
})

let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent.cta.h1

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent.cta.button

let ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent.cta['img-src']

let topH4s = document.querySelectorAll('.top-content h4')
topH4s[0].textContent = siteContent['main-content']['features-h4']
topH4s[1].textContent = siteContent['main-content']['about-h4']

let topContent = document.querySelectorAll('.top-content p')
topContent[0].textContent = siteContent['main-content']['features-content']
topContent[1].textContent = siteContent['main-content']['about-content']

let midImg = document.getElementById('middle-img')
midImg.src = siteContent['main-content']['middle-img-src']

let botH4s = document.querySelectorAll('.bottom-content h4')
botH4s[0].textContent = siteContent['main-content']['services-h4']
botH4s[1].textContent = siteContent['main-content']['product-h4']
botH4s[2].textContent = siteContent['main-content']['vision-h4']

let botContent = document.querySelectorAll('.bottom-content p')
botContent[0].textContent = siteContent['main-content']['services-content']
botContent[1].textContent = siteContent['main-content']['product-content']
botContent[2].textContent = siteContent['main-content']['vision-content']

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']

let contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent['contact']['address']
contactContent[1].textContent = siteContent['contact']['phone']
contactContent[2].textContent = siteContent['contact']['email']

let copyright = document.querySelector('footer p')
copyright.textContent = siteContent['footer']['copyright']