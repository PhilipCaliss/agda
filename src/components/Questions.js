import React, { Component } from "react";
import { Form, Radio, Slider, Switch, Select, Input } from "antd";
import injectSheet from "react-jss";

const Option = Select.Option;

const fordon = [
    <Option key="Bil">Bil</Option>,
    <Option key="Motorcykel">Motorcykel</Option>,
    <Option key="Husbil">Husbil</Option>,
    <Option key="Husvagn">Husvagn</Option>,
    <Option key="Båt">Båt</Option>,
    <Option key="Skoter">Skoter</Option>
];
const hobbies = [
    <Option key="Golf">Golf</Option>,
    <Option key="Båt">Båt</Option>,
    <Option key="Skidor/Snowboard">Skidor/Snowboard</Option>,
    <Option key="Resor">Resor</Option>,
    <Option key="Träning">Träning</Option>,
    <Option key="Gaming">Gaming</Option>
];
const occupation = [
    <Option key="Golf">Anställd</Option>,
    <Option key="Båt">Arbetssökande</Option>,
    <Option key="Skidor/Snowboard">Egen Företagare</Option>,
    <Option key="Resor">Student</Option>,
    <Option key="Träning">Pensionär</Option>,
    <Option key="Intew">Arbetar inte</Option>,
    <Option key="Gaming">Vill ej svara</Option>
];

// •	Anställd (Fack?)     Indikerar hur mycket man kan spara(?)
// •	Arbetssökande
// •	Egen företagare     Företagsförsäkring
// •	Student       		Studentförsäkring – Tipsa om utlandsstudieförsäkring
// •	Pensionär 
// •	Arbetar inte
// •	Vill ej svara

const styles = {
    formItem: {
        borderRadius: "10px",
        webkitBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        mozBoxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,0.54)",
        padding: "10px",
        marginBottom: "15px"
    }
};

var addedCar = false;

class Questions extends Component {
    constructor(props) {
        super(props);


        this.onChange = (value, event) => {
            console.log(value);
            console.log(event);
            event.preventDefault();
        }
    
        this.onChangeIncome = (value) => {
            this.props.methods.onChangeIncome()
        }
        
        this.onChangeLiving = ( value) => {
            this.props.methods.onChangeLiving()
        }
        this.onChangeFritid = (value) => {
            this.props.methods.onChangeFritid()
        }
        this.onChangeSkog = (value) => {
            this.props.methods.onChangeSkog();
        }
        this.onChangeCar = (value) => {
            if(!addedCar){
                this.props.methods.onChangeCar();
                addedCar = true;
            }
        }
        this.onChangeDog = (value) => {
            this.props.methods.onChangeDog();
        }
        this.onChangePension = (value) => {
            this.props.methods.onChangePension();
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Form layout="vertical">
                    <Form.Item label="Hur bor du?" className={classes.formItem}>
                        <Radio.Group
                            defaultValue="horizontal"
                            onChange={this.onChangeLiving}
                        >
                            <Radio.Button value="hyresratt">
                                Hyresrätt
                            </Radio.Button>
                            <Radio.Button value="bostadsratt">
                                Bostadsrätt
                            </Radio.Button>
                            <Radio.Button value="villa">Villa</Radio.Button>
                            <Radio.Button value="andrahand">
                                Andrahand
                            </Radio.Button>
                            <Radio.Button value="inneboende">
                                Inneboende
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="Äger du fritidshus, skog eller en tomt?"
                        className={classes.formItem}
                    >
                        <Switch onChange={this.onChangeFritid} /> Fritidshus
                        <br />
                        <Switch onChange={this.onChangeSkog} /> Skog/tomt
                    </Form.Item>

                    <Form.Item
                        label="Barn i hushållet?"
                        className={classes.formItem}
                    >
                        <Input disabled={true} value="2"/>
                        <Switch onChange={this.onChange} /> Är gravid / Har
                        gravid partner
                    </Form.Item>

                    <Form.Item label="Husdjur?" className={classes.formItem}>
                        <Switch onChange={this.onChangeDog} /> Ja
                    </Form.Item>

                    <Form.Item label="Sysselsättning" className={classes.formItem}>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Klicka för att lägga till"
                            onChange={this.onChange}
                        >
                            {occupation}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Fordon" className={classes.formItem}>
                        <Select
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="Klicka för att lägga till"
                            onChange={this.onChangeCar}
                        >
                            {fordon}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Hobbies" className={classes.formItem}>
                        <Select
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="Klicka för att lägga till"
                            onChange={this.onChange}
                        >
                            {hobbies}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Har du saker värda mer än 25000kr?"
                        className={classes.formItem}
                    >
                        <Switch onChange={this.onChange} /> Ja
                    </Form.Item>

                    <Form.Item label="Vill du spara?" className={classes.formItem}>
                        <Switch onChange={this.onChange} /> Ja
                        <br/>Inkomst
                        <Slider
                            marks={{
                                0: "0",
                                20: "20",
                                40: "40",
                                60: "60",
                                80: "80",
                                100: "100"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Vill du pensionsspara?"
                        className={classes.formItem}
                    >
                        <Switch onChange={this.onChangePension} /> Ja
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default injectSheet(styles)(Questions);
{
    /* <Slider
marks={{
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "100"
}}
/> */
}
