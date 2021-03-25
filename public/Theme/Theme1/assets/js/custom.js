$(document).ready(function () {
    $(".regular").slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
$(document).ready(function () {
    $(".icon-search2").click(function () {
        $(".site-block-top-search").toggleClass("active").focus;
    });
});