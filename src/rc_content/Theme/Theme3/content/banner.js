const Banner = ({ props, currentTheme }) => {
    //console.log('banner props', props.component, currentTheme);
    return (
        <div className="banner-section">
            <div className="container">
                {
                    props.component ?
                        <props.component /> : ''
                }
            </div>
        </div>
    )
}

export default Banner;