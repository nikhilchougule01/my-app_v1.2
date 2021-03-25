function T3_JS() {

    const jsArr = [
        './Theme/Theme1/assets/js/jquery-3.3.1.min.js',
        './Theme/Theme1/assets/js/jquery-ui.js',
        './Theme/Theme1/assets/js/slick.js',
        './Theme/Theme1/assets/js/custom.js',
        './Theme/Theme1/assets/js/bootstrap.min.js',
        './Theme/Theme1/assets/js/owl.carousel.min.js',
        './Theme/Theme1/assets/js/main.js'
    ];

    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        tag.type = "text/javascript";
        document.body.appendChild(tag);
    }

    return (
            jsArr.map((item, idx) => { loadScript(item); })
        )
}

export default T3_JS;