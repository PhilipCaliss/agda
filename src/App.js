import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import injectSheet from "react-jss";

const styles = ({ theme }) => {
    return {
        header: {
            fontWeight: "bold"
        }
    };
};

function App(props) {
    const { classes } = props;
    return (
        <div className="App">
            <header className={classes.header}>
                <p>FOLKSAM</p>
            </header>
        </div>
    );
}

export default injectSheet(styles)(App);
