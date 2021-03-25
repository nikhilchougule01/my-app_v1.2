import Page1 from "./pages/page1";
import ThemeIndex from './pages/theme';
import { useSelector } from "react-redux";

function App1() {

    const currentTheme = useSelector(state => state.currentTheme);

    function loadCss(currentTheme) {
        switch (currentTheme) {
            case 'Theme1':
                return <T1_CSS />
            case 'Theme2':
                return <T2_CSS />
            case 'Theme3':
                return <T3_CSS />
            default:
                return (<T3_CSS />)
        }
    }

    return (
        <div>
            {loadCss(currentTheme)}
            <Switch>
                <Route exact path='/' component={Page1} />
                <Route path='/theme1' component={ThemeIndex} />
            </Switch>
        </div>
        )
}

export default App1;