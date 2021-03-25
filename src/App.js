//import logo from './logo.svg';
//import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThemeIndex from './pages/theme';
import { getCurrentTheme } from './reducer/theme/theme.action';
import Page1 from './pages/page1';
import T3_CSS from './rc_content/Theme/Theme3/mycss';
import T2_CSS from './rc_content/Theme/Theme2/custom-head';
import T1_CSS from './rc_content/Theme/Theme1/custom-head';

class App extends Component {

    constructor() {
        super();

        this.state = {
            myCurrentTheme: ''
        }
    }

    componentDidMount() {
        this.props.getCurrentTheme()
    }

    loadCss(currentTheme) {
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

    render() {
        const { currentTheme } = this.props;
        return (
            <div>
                {this.loadCss(currentTheme)}
                <Switch>
                    <Route exact path='/' component={Page1} />
                    <Route path='/theme1' component={ThemeIndex} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentTheme: state.theme.currentTheme
});

const mapDispatchToProps = dispatch => ({
    getCurrentTheme: () => dispatch(getCurrentTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);