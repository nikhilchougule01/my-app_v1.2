import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentTheme } from "../reducer/theme/theme.action";

class ThemeIndex extends Component {
    render() {
        return (
            <div>
                <select value={this.props.currentTheme} onChange={e => this.props.setCurrentTheme(e.target.value)}>
                    <option value="">-Select-</option>
                    <option value="Theme1">Theme1</option>
                    <option value="Theme2">Theme2</option>
                    <option value="Theme3">Theme3</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentTheme: state.theme.currentTheme
});

const mapDispatchToProps = dispatch => ({
    setCurrentTheme: theme => dispatch(setCurrentTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeIndex);