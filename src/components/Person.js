import React from "react";
import injectSheet from "react-jss";
import { Context } from "../store";
import { Button } from "antd";

const styles = {};

function Person() {
    const render = (
        <Context.Consumer>
            {context => (
                <Button onClick={context.methods.updatePage}>NÄSTA</Button>
            )}
        </Context.Consumer>
    );
    return (
        <div>
            <h2>Philip, 26 år</h2>
            <p>bor i tyresö</p>
            <p>behöver hemförsäkring</p>
            {/* {render} */}
        </div>
    );
}

export default injectSheet(styles)(Person);
