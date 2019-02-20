import React from "react";
import injectSheet from 'react-jss';
import car from '../img/car.svg';
import hem from '../img/hem.svg';
import dog from '../img/dog.svg';
import boat from '../img/boat.svg';
import villa from '../img/villa.svg';
import nalle from '../img/nalle.png';
import spar from '../img/spar.svg';
import fritidshus from '../img/fritidshus.svg';
import pension from '../img/pension.png';




const styles = {
    card: {
        width: '100%',
        borderRadius: '10px',
        webkitBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        mozBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        padding: '0px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& p': {
            padding: 0,
            margin: 0,
            fontWeight: '600',
        }
    },
    img: {
        width: '50px',
        height: '50px',
    },
    last: {
        // alignSelf: 'flex-end'
    }
}

function InsuranceHeader(props) {
    const { classes, data } = props;
    var img;
    switch(data.typ){
        case 'car':
            img = car;
            break;
        case 'hem':
            img = hem;
            break;
        case 'dog':
            img = dog;
            break;
        case 'boat':
            img = boat;
            break;
        case 'villa':
            img = villa;
            break;
        case 'barn':
            img = nalle;
            break;
        case 'spar':
            img = spar;
            break;
        case 'pension':
            img = pension;
            break;
        case 'fritidshus':
            img = fritidshus;
            break;
    }

    return (
        
        <div className={classes.card}>
            <img src={img} className={classes.img}/>
            <p>{data.desc}</p>
            <p className={classes.last}>{data.pris} kr/mån</p>
        </div>
    );
}

export default injectSheet(styles)(InsuranceHeader);
