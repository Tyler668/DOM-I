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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Setting Nav Bar Content === 
let allA = document.querySelectorAll('nav a');
allA[0].textContent = 'Services';
allA[1].textContent = 'Product';
allA[2].textContent = 'Vision';
allA[3].textContent = 'Features';
allA[4].textContent = 'About';
allA[5].textContent = 'Contact';

// Primary H1 ===
let h1Text = document.querySelector('.cta-text h1');
h1Text.setAttribute('style', 'white-space: pre;');
h1Text.textContent = "DOM \n";
h1Text.textContent += "IS \n";
h1Text.textContent += "AWESOME";

// Button ===
let buttonUnderH1 = document.querySelector('.cta-text button');
buttonUnderH1.textContent = "Get Started";

// Circular Code Image ===
let codeImage = document.querySelector('.cta img');
codeImage.setAttribute('src', "img/header-img.png");

//Main H4's ===
let textContentH4s = document.querySelectorAll('.text-content h4');
textContentH4s[0].textContent = "Features";
textContentH4s[1].textContent = "About";
textContentH4s[2].textContent = "Services";
textContentH4s[3].textContent = "Product";
textContentH4s[4].textContent = "Vision";

//Contact H4 ===
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

// Main Content P Tags ===
let textContentPs = document.querySelectorAll('.text-content p');
textContentPs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContentPs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContentPs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContentPs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContentPs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// Middle IMG ===
let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', "img/mid-page-accent.jpg");

//Contact Section P Tags ===
let contactPs = document.querySelectorAll('.contact p');
contactPs[0].setAttribute('style', 'white-space: pre;');
contactPs[0].textContent = "123 Way 456 Street \n";
contactPs[0].textContent += "Somewhere, USA";

contactPs[1].textContent = "1 (888) 888-8888";

contactPs[2].textContent = "sales@greatidea.io";


//Footer P Tag ===
let footerP = document.querySelector('footer p');
footerP.textContent = "Copyright Great Idea! 2018";