    
    $(document).ready(function() {
        $(window).on("scroll",function(){
            if($(this).scrollTop()  > 90){
                $(".navbar").addClass("navbar-shrink");
            }
            else {
                $(".navbar").removeClass("navbar-shrink");
            }
        });

        /* ------------------video popup-------------- */
        const videoSrc = $("#player-1").attr("src");
        $(".video-play-btn, .video-popup").on("click", function(){
            // alert('Berhasil')
            if($(".video-popup").hasClass("open")){
                $(".video-popup").removeClass("open");
                $("#player-1").attr("src","");
            }
            else{
                $(".video-popup").addClass("open");
                if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
                }
            }
        });
         /* ------------------Owl Carousel-------------- */
        $('.features-caraousel').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });
    });