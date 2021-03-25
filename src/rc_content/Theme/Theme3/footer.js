const T3_Footer = ({ props }) => {
    return (
        <footer className="site-footer border-top">
            {
                props.component ?
                    <props.component /> : ''
            }
        </footer>
    )
}

export default T3_Footer;