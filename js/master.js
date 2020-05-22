
// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
  
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});



 // start scroll up

    $(window).on("scroll", function () {
        var scr = $(window).scrollTop();

        if( scr >450) {
            $('.fa-chevron-up').fadeIn();
        }
        else {
            $('.fa-chevron-up').fadeOut();
        }

    });
    
    //Make Smooth Scroll 

    $('.fa-chevron-up').click (function () {
        $('html, body').animate({

            scrollTop: 0 
        } ,900);
    });

    $('.links a').click (function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value') ).offset().top - 2,
        }, 900 );

        console.log($(this).data('value'));
    }); 
    
    //end scroll up

    // Loading Page
     setTimeout(function () {
       
        $(window).ready(function () {
            
            $(".loading .spinner").fadeOut(1000,
                function () {
                    $(".loading").fadeOut(1000,
                        function () {
                            $(".loading").remove();
                        } );
                });

        });
    }, 2000);
 // end Loading Page

 // Tab Swiching
        $('.tab-section ul li').click(function () {
            // Add Class Selected to active tab
            $(this).addClass('selected').siblings().removeClass('selected');

            $('.tab-section .tab-content >div').hide();

            $($(this).data('class')).fadeIn();

        });
        //end tab section