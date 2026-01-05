/*NavBar function*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}

/*add shadow nav*/
window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header")

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/*Scroll*/
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:2000,
    reset:true
})

/*Home*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured_name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/*About info*/
const srleft = ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset:true
})

srleft.reveal('.about-info',{delay:100})

const srright = ScrollReveal({
    origin:'right',
    distance:'80px',
    duration:2000,
    reset:true
})

srleft.reveal('.skills-box',{delay:100})
srleft.reveal('.col-right',{delay:100})

const srdown = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:2000,
    reset:true
})
srdown.reveal('.col-left',{delay:100})

/*เช็คช่องกรอกฟอร์ม*/
function Contact(){
    let name = document.getElementsById("name").value;
    let email = document.getElementsById("email").value;
    let Massage = document.getElementsById("massage").value;

    if(name == '' || email == '' || Massage == ''){
        alert('กรุณากรอกให้ครบ');
        return false;
    }
    return true;
}
