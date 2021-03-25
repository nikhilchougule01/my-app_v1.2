function Logo(props) {
    const { folder, logoName } = props;
    return (
        <div className="site-logo">
            <a href="index.html" className="js-logo-clone">
                <img src={`./Theme/${folder}/images/${logoName}`} />
            </a>
        </div>
        )
}

export default Logo;