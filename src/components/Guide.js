import React, { Component } from "react";
// import "./App.css";
import injectSheet from "react-jss";
import "antd/dist/antd.css";
import { Store, Context } from "../store";
import ProgressBar from "./ProgressBar";
import Person from "./Person";
import StepsBar from "./StepsBar";
import { Steps, Button, message } from "antd";
import Spinner from './Spinner';

const Step = Steps.Step;

const steps = [
  {
    title: "First",
    content: ""
  },
  {
    title: "Second",
    content: ""
  },
  {
    title: "Last",
    content: ""
  }
];

const styles = ({ theme }) => {
  return {
    guide: {
      maxWidth: "600px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    header: {
      margin: "20px",
      textAlign: "center",
      fontWeight: "bold"
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

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isLoading: true,

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000)
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const { classes } = this.props;

    var page;
    switch (current) {
      case 0:
        page = <Person />;
        break;
      default:
        break;
    }

    const render = this.state.isLoading ? <Spinner /> : 
    <div className={classes.guide}>
      <div>
        {page}
        {/* <StepsBar/> */}
      </div>
      <Steps progressDot current={current} size="small">
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
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
    </div>


    return (
      { render }
    )
  }
}

export default injectSheet(styles)(Guide);
