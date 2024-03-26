const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}

function displayPali(){
    window.location.href = '/displayPali';
}
function displayMeghalaya(){
    window.location.href = '/displayMeghalaya';
}

function displayOdisha(){
    window.location.href = '/displayOdisha';
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:1200,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)

console.log("main.js")
function sendOtp(){
    console.log("send otp");
    var mobileNumber = document.getElementById("mobileNumber").value;
    fetch('/sendOtp', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({mobileNumber: mobileNumber})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('otpSent').innerText = data[0];
        document.getElementById('otpForm').style.display = "none";
        document.getElementById('otpDisplay').style.display = "block";
        document.getElementById('otpVerification').style.display = "block";
    }).catch(error => {
        console.error("Error in sending the otp", error);
    })
}


function verifyOtp(){
    var mobileNumber = document.getElementById("mobileNumber").value;
    var otp = document.getElementById("otp").value;

    fetch('/verifyOtp', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({mobileNumber : mobileNumber, otp : otp})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success == true){
            window.location.href = '/index';
        }
        else {
            document.getElementById("errorMessage").innerText = "The OTP is incorrect try again";
            document.getElementById("errorDisplay").style.display = "block";
        }
    }).catch(error => {
        console.error("Error in verifying the otp ", error);
    })
}