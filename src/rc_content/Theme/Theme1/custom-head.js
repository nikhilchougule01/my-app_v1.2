//import { dirname} from 'path';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const T1_CSS = () => {
    return (
        <Helmet>
            <title>Theme1</title>
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/style.css" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/header-footer-css.css" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/fonts/icomoon/style.css" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/jquery-ui.css" />
            <link href="./Theme/Theme1/assets/css/slick.css" rel="stylesheet" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="./Theme/Theme1/assets/css/owl.theme.default.min.css" />
        </Helmet>
    )
}
export default T1_CSS;