import React from "react";

export default function Price(props) {
    return (
        <div style={{textAlign:'center', marginBottom: '5px'}}>
            Försäkringar 2158 kr/mån<br/>
            <span style={{textDecoration: 'underline'}}><b>Rabatt 25%</b> => 1618 kr/månad <br/></span>
            Sparande 2500kr<br/>
            <b>Totalkostnad: 4658 kr/mån</b>
        </div>
    );
}
