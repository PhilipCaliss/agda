import React from "react";
import injectSheet from "react-jss";
import { Context } from "../store";
import { Button } from "antd";
import Insurances from './Insurances';


const text = {
    civilstand: 'Gift',
    Barn: '2',
    info: 'Den här informationen används för att skapa ett unikt försäkringsskydd baserat på dina behov. Om det är någon information som inte stämmer så kan du alltid redigera och lägga till genom att svara på fler frågor.',
    info2: 'Baserat på de uppgifter vi automatiskt har hämtat in har vi skapat ett unikt försäkringsskydd baserat på dina behov',
}


const styles = {
    card: {
        borderRadius: '20px',
        webkitBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        mozBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        padding: '20px',
        
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
            <h2>Hej Person!</h2>
            <p>{text.info}</p>
            <Insurances insurances={props.insurances}/>
            {/* {render} */}
        </div>
    );
}

export default injectSheet(styles)(Person);
