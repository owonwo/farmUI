
window.addEventListener('load', () =>{

    const anchors = document.querySelectorAll('li a');
    const pages = []

    Array.from(anchors).map(function(el, index) {
        const page_selector = el.getAttribute('href');
        const pageElement = document.querySelector(page_selector);

        pages.push(pageElement);
        pageElement.style.display = "none";

        el.addEventListener('click', function(event) {
            event.preventDefault();

            const parentElement = event.target.parentElement;

            if (pageElement) { //checks if the element exist
                parentElement.classList.add("active");
                removeOtherActive(anchors, el);
                changePage(pages, pageElement);
            }
        })
    });

    anchors[0].click(); //making javascript click the first link programatically
});

function changePage(pages, page) {
    for (const selector of pages) {
        if (selector === page) {
            selector.style.display = "block"
        } else {
            selector.style.display = "none"
        }
    }
}

function removeOtherActive(anchors, anchor) {
    for (const el of anchors) {
        if (el.parentElement !== anchor.parentElement) {
            el.parentElement.classList.remove('active');
        }
    }
}

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('button.btn-submit');

if (btn){
    btn.addEventListener('click', ()=>{
        location.href = 'dashboard.html';
        if(email.value === 'DEMO' && password.value === '12345'){}
    })
}

 
