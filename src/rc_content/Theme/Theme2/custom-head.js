//import { dirname} from 'path';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const T2_CSS = () => {
    return (
        <Helmet>
            <title>Theme2</title>
            <link rel="stylesheet" href="./Theme/Theme2/assets/css/style.css" />
            <link rel="stylesheet" href="./Theme/Theme2/fonts/icomoon/style.css" />
            <link rel="stylesheet" href="./Theme/Theme2/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./Theme/Theme2/assets/css/jquery-ui.css" />
            <link href="./Theme/Theme2/assets/css/slick.css" rel="stylesheet" />
            <link rel="stylesheet" href="./Theme/Theme2/assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="./Theme/Theme2/assets/css/owl.theme.default.min.css" />
        </Helmet>
    )
}
export default T2_CSS;