function myMenuFunction(){
    var menuBth = document.getElementById("mynavmenu");
        if (menuBth.className ==="nav-menu") {
            menuBth.className+= "responsive";
            
        }else{
            menuBth.className="nav-menu";
        }
    }


    /*-------------Dark mode----------------------*/
    const body = document.querySelector("body")
        toggleSwitch = document.getElementById("toggle-switch");
    toggleSwitch.addEventListener('click' , ()=> {
        body.classList.toggle("dark");
    });


    // Typing Effect

    var TypingEffect = new Typed(".typedText",{
        strings:["Designer","Code","Developer"],
        loop:true,
        typeSpeed:100,
        backSpeed:80,
        backDelay:2000,

    })

    // scroll bar 
    const sr = ScrollReveal({
        origin:"top",
        distance:"80px",
        duration:2000,
        reset:true,

    });
    sr.reveal(".featured-name", {delay:100});
    sr.reveal(".text-info",{delay:200});
    sr.reveal(".text-btn",{delay:200});
    sr.reveal(".social_icons",{delay:200});
    sr.reveal(".featured-image",{delay:320});

    sr.reveal(".project-box",{interval:200});
    sr.reveal(".top-header",{});

    const srLeft = ScrollReveal({
        origin:"left",
        distance:"80px",
        duration:2000,
        reset:true,

    })
    srLeft.reveal(".about-info",{delay:100});
    srLeft.reveal(".contact-info",{delay:100});
  

    // active links

    const sections = document.querySelectorAll(".section[id]");

    function scrollActive(){
        constscrollY = window.scrollY;

        sections.forEach((current) =>{
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetHeight,
            sectionid = current.getAttribute("id");
            if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                document.querySelector(".nav-menu a[href*="+ sectionId +"]")
                .classList.add("active-link");
            }else{
                document.querySelector(".nav-menu a[href*="+ sectionId +"]")
                .classList.add("active-link");
            }
        });
    }
    window.addEventListener("scroll",scrollActive)