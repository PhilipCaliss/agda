import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import injectSheet from "react-jss";
import "antd/dist/antd.css";
import { Input } from "antd";
import LandingPage from "./components/LandingPage";
import { Store, Context } from "./store";
import Guide from "./components/Guide";

const styles = ({ theme }) => {
    return {
        app: {
            maxWidth: "600px",
            margin: "auto",
            height: "100%",
            padding: '0px 30px'
        },
        header: {
            margin: "20px",
            textAlign: "center",
            fontWeight: "bold"
        }
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasStarted: false,
            personNr: null
        };

        this.handleLogin = e => {
            e.preventDefault();
            this.setState({
                hasStarted: true
            });
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <header className={classes.header}>
                    <h1>Försäkringskollen</h1>
                </header>
                {this.state.hasStarted ? (
                    <Guide />
                ) : (
                    <LandingPage handleLogin={this.handleLogin} />
                )}
            </div>
        );
    }
}

export default injectSheet(styles)(App);
