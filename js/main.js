window.addEventListener("scroll", changeNavLink);

function changeNavLink() {
    var navLink = document.querySelectorAll("header nav ul li a");
    
    for (let i = 0; i < navLink.length; i++) {
        if (window.scrollY >= 500) {
            navLink[i].style.color = "#000000";
            if(window.scrollY < 1600) {
                navLink[i].style.color = "#000000";
            }
            else{
                navLink[i].style.color = "#ffffff";
            }
        }
        
        else{
            navLink[i].style.color = "#ffffff";
        }
    }

    changeNavLine();

    changeMobileNav();
}

// changeNavLine()

function changeNavLine(){
    var navLine = document.querySelector("header .line");
   
    if(window.scrollY >= 400){
        navLine.style.backgroundColor = "#000000";
        navLine.style.color = "#000000";
       
        if(window.scrollY > 400){
            navLine.style.backgroundColor = "#fff";
            navLine.style.color = "#fff";
        }

        else{
            navLine.style.backgroundColor = "#000";
            navLine.style.color = "#000";
        }
    }
    else{
        navLine.style.backgroundColor = "#ffffff";
        navLine.style.color = "#ffffff";
    }
}

//changeMobileNav()

function changeMobileNav(){
    var mobileNav = document.querySelector("#header #toggle .span i");
    if(window.scrollY >= 1300){
        mobileNav.style.color = "#000000";
        if(window.scrollY < 1720){
            mobileNav.style.color = "#000000";
        }
        else{
            mobileNav.style.color = "#ffffff";
        }
    }

    else{
        mobileNav.style.color = "#ffffff";
    }
}

 //SCROLLING.

 $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        200,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

   // navigation starts here

$("#toggle").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
});

// navigation ends here

//slick codes

$(document).ready(function(){
   $('.carousel').slick({
   slidesToShow: 3,
   dots:false,
   centerMode: false,
   });

   $('.mobile-carousel').slick({
   slidesToShow: 1,
   dots:false,
   centerMode: false,
   });
});