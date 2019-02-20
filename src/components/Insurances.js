import React, { Component } from "react";
import InsuranceHeader from "./InsuranceHeader";
import injectSheet from "react-jss";
import { Collapse, Button } from "antd";
import Price from "./Price";

const Panel = Collapse.Panel;

const customPanelStyle = {
    background: "#fff",
    borderRadius: 4,
    margin: 0,
    border: 0,
    overflow: "hidden",
    padding: "12px"
};

const styles = {
    list: {
        width: "100%",
    },
    panel: {
        width: "100%",
        borderRadius: "10px",
        webkitBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        mozBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& p": {
            padding: 0,
            margin: 0,
            fontWeight: "600"
        }
    }
};

class Insurances extends Component {
    render() {
        const { classes, insurances } = this.props;
        const list = insurances.map((ins, index) => {
            // return <Insurance key={index} data={ins} />;

            return (
                <Panel
                    header={<InsuranceHeader data={ins} />}
                    style={customPanelStyle}
                    key={"i" + index}
                    showArrow={false}
                >
                    {ins.info}
                    <ul style={{marginBottom: '0px', paddingBottom: '0px'}}>
                        {ins.tillagg ? ins.tillagg.map((till, tindex) => {
                            return (
                                <li key={"t" + tindex}>
                                    {till.desc} - {till.pris} kr/mån
                                </li>
                            );
                        }) : ""}
                    </ul>
                </Panel>
            );
        });
        return (
            <div className={classes.list}>
                <Collapse bordered={false} accordion>
                    {list}
                </Collapse>
                <Price/>
                <Button type="primary" style={{width: '40%', margin: 'auto', textAlign: 'center', display: 'block', backgroundColor: '#1DB954', borderColor: '#1DB954', fontWeight: 'bold'}}>TECKNA HÄR</Button>
            </div>
        );
    }
}

export default injectSheet(styles)(Insurances);
