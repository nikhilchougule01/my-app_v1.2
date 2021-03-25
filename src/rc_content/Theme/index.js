import Theme1 from "./Theme1"
import { connect } from "react-redux"
import Theme2 from "./Theme2";
import Theme3 from "./Theme3";

const Index = (props) => {
    //console.log('Theme props', props);
    function selectTheme(theme) {
        switch (theme) {
            case 'Theme1':
                return <Theme1 {...props}/>
            case 'Theme2':
                return <Theme2 {...props} />
            case 'Theme3':
                return <Theme3 {...props} />
            default:
                return <Theme3 {...props} />
        }
    }
    console.log('current theme', props.theme);
    return (
        selectTheme(props.theme)
    )
}

const mapStateToProps = state => ({
    theme: state.theme.currentTheme
});

export default connect(mapStateToProps)(Index);