import React, { Component } from "react";
import injectSheet from "react-jss";
import "antd/dist/antd.css";
import Person from "./Person";
import { Steps, Button, message } from "antd";
import Spinner from "./Spinner";
import Questions from "./Questions";
import Insurances from "./Insurances";

const Step = Steps.Step;

const forsakringar = {
    hem_mellan: {
        typ: "hem",
        allrisk: true,
        tillagg: [
            {
                pris: 37,
                desc: "Skidklar tilläg"
            },

            {
                pris: 26,
                desc: "Resklar tilläg"
            }
        ],
        desc: "Hemförsäkring mellan",
        pris: 172,
        info:
            "Baserat på att du bor i hyresrätt, gillar att resa och åka skidor"
    },
    barn: {
        typ: "barn",
        allrisk: true,
        tillagg: [],
        desc: "Barnförsäkring",
        pris: 147,
        info: "Baserat på att du har barn"
    },
    fritidshus: {
        typ: "fritidshus",
        tillagg: [],
        desc: "Fritidshus Bas",
        pris: 181,
        info: "Baserat på att du har ett fritidshus"
    },
    villa_stor: {
        typ: "villa",
        allrisk: true,
        tillagg: [
            {
                pris: 26,
                desc: "Resklar tilläg"
            },

            {
                pris: 26,
                desc: "Golf tilläg"
            },
            {
                pris: 0,
                desc: "Allrisk " // (ingår i mellan)"
            }
        ],
        pris: 982,
        desc: "Villa Stor + Hem Stor",
        info:
            "Baserat på att ni bor i stor villa, gillar att golfa och att resa"
    },
    villa: {
        typ: "villa_liten",
        allrisk: true,
        tillagg: [],
        pris: 500,
        desc: "Villa + Hem",
        info: "Baserat på att ni bor i oklart hus"
    },
    fritidshus_bas: {
        pris: 181,
        desc: "Fritidshus bas"
    },
    hund: {
        typ: "dog",
        pris: 157,
        tillagg: [],
        desc: "Hundförsäkring",
        info: "Baserat på att ni har hund"
    },
    car: {
        typ: "car",
        pris: 650,
        tillagg: [],
        desc: "Bilförsäkring stor",
        info: "Baserat på eran typ av bil"
    },
    spar: {
        typ: "spar",
        pris: 500,
        tillagg: [],
        desc: "Barnspar",
        info: "Baserat på inkomst och typ av sparande"
    },
    pensionsspar: {
        typ: "pension",
        pris: 1500,
        tillagg: [],
        desc: "Pensionsspar",
        info: "Baserat på inkomst, ålder och typ av sparande"
    }
};

const tillagg = {
    skidklar: {
        pris: 37,
        desc: "Skidklar tilläg"
    },
    resklar: {
        pris: 26,
        desc: "Resklar"
    }
};

const sparande = {
    barnspar: {
        pris: 500,
        desc: "Barnsparande"
    },
    pensionspar: {
        pris: 1500,
        desc: "Pensionssparande"
    }
};

// progress-bar

// react-jss
const styles = ({ theme }) => {
    return {
        guide: {
            minHeight: "85vh",
            maxWidth: "550px",
            height: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center"

            // "& > *": {
            //     margin: "20px 0"
            // }
        },
        header: {
            margin: "20px",
            textAlign: "center",
            fontWeight: "bold"
        },

        page: {
            width: "100%",
            flex: 1,
            paddingBottom: "90px"
        },

        progress: {
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "#fff",
            padding: "20px 0px"
        },

        footer: {
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        },

        stepsContent: {
            marginTop: "16px",
            border: "1px dashed #e9e9e9",
            borderRadius: "6px",
            backgroundColor: "#fafafa",
            minHeight: "200px",
            textAlign: "center",
            paddingTop: "80px"
        },
        stepsAction: {
            marginTop: "24px"
        }
    };
};

// React component
class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            isLoading: true,
            customer: {
                age: 26,
                civilstand: "singel",
                formchoices: {
                    bostadsituation: {
                        villa: false,
                        radhus: false,
                        bostadsratt: false,
                        hyres: false,
                        andrahand: false
                    },
                    fritidshus: false, // fritidshusförsäkring
                    mark_skog: false, // Tilläg: skog
                    childrens: {
                        pregnant: false, // gravidförsäkring & barnspar
                        n: 0 // antal barnförsäkring & barnspar
                    },
                    pets: {
                        // djurförsäkring
                        dog: false,
                        cat: false,
                        horse: false,
                        other: false
                    },
                    employment: {
                        //Anställd (Fack?)     Indikerar hur mycket man kan spara(?)
                        unemployed: false,
                        eget_foretag: false, // Företagsförsäkring
                        student: false, //  Studentförsäkring – Tipsa om utlandsstudieförsäkring
                        pensionar: false,
                        arbetar_inte: false,
                        vill_inte_svara: false
                    },
                    vehicles: {
                        car: false, // bilförsäkring
                        bike: false,
                        husbil: false,
                        husvagn: false,
                        boat: false,
                        skoter: false
                    },
                    hobbies: {
                        golf: false, // Golfförsäkring
                        boat: false, // Båtförsäkring
                        ski: false, // Skidklar
                        resor: false, // Resklar
                        traning: false, // Motionsloppsförsäkring
                        gaming: false // ny
                    },
                    losore: false, // lösöre
                    saving: {
                        wants_to_save: false,
                        income: 0,
                        can_save: 0,
                        wants_to_pensionspara: false
                    }
                },
                insurances: [
                    forsakringar.villa,
                    // forsakringar.car,
                    forsakringar.barn,
                    forsakringar.barn,
                    forsakringar.spar,
                    forsakringar.spar,
                    // forsakringar.pensionsspar
                    // forsakringar.hund,
                    // forsakringar.hund,
                    // forsakringar.fritidshus
                ]
            }
        };

        this.onChangeIncome = () => {
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.spar,
                        ...this.state.customer.insurances,
                    ]
                }
            });
        };
        this.onChangeCar = () => {
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.car,
                        ...this.state.customer.insurances,
                    ]
                }
            });
        };
        this.onChangeDog = () => {
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.hund,
                        ...this.state.customer.insurances,
                    ]
                }
            });
        };
        this.onChangeLiving = () => {
            const array = this.state.customer.insurances.filter((ins) => {
                return ins.typ !== 'villa_liten';
            });
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.villa_stor,
                        ...array,
                    ]
                }
            });
        };
        this.onChangeFritid = () => {
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.fritidshus,
                        ...this.state.customer.insurances,
                    ]
                }
            });
        };
        this.onChangePension = () => {
            this.setState({
                customer: {
                    insurances: [
                        forsakringar.pensionsspar,
                        ...this.state.customer.insurances,
                    ]
                }
            });
        };

        this.methods = {
            onChangeIncome: this.onChangeIncome,
            onChangeLiving: this.onChangeLiving,
            onChangeFritid: this.onChangeFritid,
            onChangeCar: this.onChangeCar,
            onChangeDog: this.onChangeDog,
            onChangePension: this.onChangePension,
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 5000);
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    setCurrent(current) {
        this.setState({ current: current });
    }

    render() {
        console.log(this.state)
        const { current } = this.state;
        const { classes } = this.props;


        const steps = [
            {
                title: "Person",
                content: <Person insurances={this.state.customer.insurances} />
            },
            {
                title: "Mer frågor",
                content: <Questions methods={this.methods} />
            },
            {
                title: "Försäkringar",
                content: (
                    <Insurances insurances={this.state.customer.insurances} />
                )
            }
        ];

        const render = this.state.isLoading ? (
            <Spinner />
        ) : (
            <div className={classes.guide}>
                <div className={classes.page}>
                    {steps[current].content}
                    {/* <StepsBar/> */}
                </div>

                <div className={classes.progress}>
                    <Steps progressDot current={current} size="small">
                        {steps.map((item, index) => (
                            <Step
                                key={item.title}
                                title={item.title}
                                onClick={() => this.setCurrent(index)}
                            />
                        ))}
                    </Steps>
                </div>

                {/* <div className={classes.footer}>
                    <div className="stepsContent">{steps[current].content}</div>
                    <div className="stepsAction">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() =>
                                    message.success("Processing complete!")
                                }
                            >
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button
                                style={{ marginLeft: 8 }}
                                onClick={() => this.prev()}
                            >
                                Previous
                            </Button>
                        )}
                    </div>
                </div> */}
            </div>
        );

        return <div style={{ height: "100%" }}>{render}</div>;
    }
}

export default injectSheet(styles)(Guide);
