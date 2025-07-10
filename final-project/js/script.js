$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplayTimeout: 3000, 

      navText: [
        '<i class="fa-solid fa-circle-left fa-2x text-primary "></i>',
        '<i class="fa-solid fa-circle-right fa-2x text-primary"></i>'
      ],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

const scrollBtn = document.getElementById("scroll");


window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});


scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


function counterElements(startCount, element, endCount, totalDuration) {
    let current = startCount;
    const range = endCount - startCount;
    const steps = 60;
    const increment = range / steps;
    const stepTime = totalDuration / steps;

    const counter = setInterval(() => {
        current += increment;
        if (current >= endCount) {
            current = endCount;
            clearInterval(counter);
        }
        element.innerText = Math.floor(current);
    }, stepTime);
}

const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');
const counter4 = document.getElementById('counter4');

const duration = 2000;
let hasCounted = false;

window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop > 600 && !hasCounted) {
        hasCounted = true;
        counterElements(0, counter1, 8000, duration);
        counterElements(0, counter2, 810, duration);
        counterElements(0, counter3, 2000, duration);
        counterElements(0, counter4, 20, duration);
    }
});




const subscribeForm = document.getElementById('subscribeForm');
const subscribeEmailInput = document.getElementById('subscribeEmail');
const subscribeErrorDiv = document.getElementById('subscribeError');

if (subscribeForm && subscribeEmailInput && subscribeErrorDiv) {
    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = subscribeEmailInput.value.trim();

        if (email === '' || !email.includes('@') || !email.includes('.')) {
            subscribeErrorDiv.textContent = 'Please enter a valid email address.';
            subscribeErrorDiv.style.display = 'block';
            subscribeEmailInput.classList.add('is-invalid');
        } else {
            console.log('Attempting to subscribe with:', email);

            setTimeout(() => {
                subscribeErrorDiv.textContent = 'There was an error trying to send your message. Please try again later.';
                subscribeErrorDiv.style.display = 'block';
                subscribeEmailInput.classList.add('is-invalid');
                console.error('Subscription failed for:', email);
            }, 1500);
        }
    });

    subscribeEmailInput.addEventListener('input', function () {
        if (subscribeEmailInput.classList.contains('is-invalid')) {
            subscribeEmailInput.classList.remove('is-invalid');
        }
        if (subscribeErrorDiv.style.display === 'block') {
            subscribeErrorDiv.style.display = 'none';
        }
    });
}