import React from "react";
import injectSheet from "react-jss";
import { Context } from "../store";
import { Button } from "antd";
import Insurances from "./Insurances";

const text = {
    civilstand: "Gift",
    age: "35",
    barn: "2",
    info:
        "Den här informationen används för att skapa ett unikt försäkringsskydd baserat på dina behov. Om det är någon information som inte stämmer så kan du alltid redigera och lägga till genom att svara på fler frågor.",
    info2:
        "Baserat på de uppgifter vi automatiskt har hämtat in har vi skapat ett initialt försäkringsskydd baserat på dina behov.",
    swipe: "Swipa höger för att anpassa"
};

const styles = {
    card: {
        borderRadius: "20px",
        webkitBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        mozBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        padding: "20px",
        display: "flex",
        flexDirection: "column"
    }
};

function Person(props) {
    const { classes } = props;
    const render = (
        <Context.Consumer>
            {context => (
                <Button onClick={context.methods.updatePage}>NÄSTA</Button>
            )}
        </Context.Consumer>
    );
    return (
        <div className={classes.card}>
            <div style={{ display: "flex"}}>
                <div style={{width: '50%'}}>
                    <h1>Hej Agda!</h1>
                    <div>
                        <b>Ålder:</b> {text.age}
                    </div>
                    <div>
                        <b>Antal barn:</b> {text.barn}
                    </div>
                    <div>
                        <b>Civilstånd:</b> {text.civilstand}
                    </div>
                </div>
                <div style={{width: '50%', fontSize: 10, alignSelf: 'flex-end'}}>{text.info2}<br/><br/><strong>{text.swipe}</strong></div>
            </div>
            <Insurances insurances={props.insurances} />
            {/* {render} */}
        </div>
    );
}

export default injectSheet(styles)(Person);
