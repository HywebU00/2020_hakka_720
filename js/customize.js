// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

 });


//mpSidebar1
function openNav1() {
    $("#mpSidebar2, #mpSidebar3, #mpSidebar4, #mpSidebar5").hide();
    $("#mpSidebar1").show();
    document.getElementById("mpSidebar1").style.display = "block";
    // document.getElementById("mpSidebar1").style.width = "340px";
    // document.getElementById("mpwrapmain").style.marginRight = "340px";
}

function closeNav1() {
  document.getElementById("mpSidebar1").style.display = "none";
  // document.getElementById("mpSidebar1").style.width = "0";
  // document.getElementById("mpwrapmain").style.marginRight= "0";
}
//mpSidebar2
function openNav2() {
    $("#mpSidebar1, #mpSidebar3, #mpSidebar4, #mpSidebar5").hide();
    $("#mpSidebar2").show();
    document.getElementById("mpSidebar2").style.display = "block";
    // document.getElementById("mpSidebar2").style.width = "340px";
    // document.getElementById("mpwrapmain").style.marginRight = "340px";
}

function closeNav2() {
    document.getElementById("mpSidebar2").style.display = "none";
  // document.getElementById("mpSidebar2").style.width = "0";
  // document.getElementById("mpwrapmain").style.marginRight= "0";
}
//mpSidebar3
function openNav3() {
    $("#mpSidebar1, #mpSidebar2, #mpSidebar4, #mpSidebar5").hide();
    $("#mpSidebar3").show();
    document.getElementById("mpSidebar3").style.display = "block";
    // document.getElementById("mpSidebar3").style.width = "340px";
    // document.getElementById("mpwrapmain").style.marginRight = "340px";
}

function closeNav3() {
    document.getElementById("mpSidebar3").style.display = "none";
    // document.getElementById("mpSidebar3").style.width = "0";
    // document.getElementById("mpwrapmain").style.marginRight= "0";
}
//mpSidebar4
function openNav4() {
    $("#mpSidebar1, #mpSidebar2, #mpSidebar3, #mpSidebar5").hide();
    $("#mpSidebar4").show();
    document.getElementById("mpSidebar4").style.display = "block";
    // document.getElementById("mpSidebar4").style.width = "340px";
    // document.getElementById("mpwrapmain").style.marginRight = "340px";
}

function closeNav4() {
    document.getElementById("mpSidebar4").style.display = "none";
    // document.getElementById("mpSidebar4").style.width = "0";
    // document.getElementById("mpwrapmain").style.marginRight= "0";
}
//mpSidebar5
function openNav5() {
    $("#mpSidebar1, #mpSidebar2, #mpSidebar3, #mpSidebar4").hide();
    $("#mpSidebar5").show();
    document.getElementById("mpSidebar5").style.display = "block";
    // document.getElementById("mpSidebar5").style.width = "340px";
    // document.getElementById("mpwrapmain").style.marginRight = "340px";
}

function closeNav5() {
    document.getElementById("mpSidebar5").style.display = "none";
    // document.getElementById("mpSidebar5").style.width = "0";
    // document.getElementById("mpwrapmain").style.marginRight= "0";
}