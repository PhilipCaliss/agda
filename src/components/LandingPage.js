import React from "react";
import injectSheet from "react-jss";
import { Form, Icon, Input, Button } from "antd";

const styles = ({ theme }) => {
    return {
        flex: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
                margin: "10px"
            }
		},
		form: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
			margin: 0,
			left: "50%",

		}
    };
};

class LandingPage extends React.Component {
	constructor(props) {
		super(props)
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Form className={classes.form} onSubmit={this.props.handleLogin}>
					<Form.Item>
						<Input
							placeholder="Personnummer"
							prefix={
								<Icon
									type="user"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" shape="round" size="large" style={{fontWeight: 'bold'}}>
							KÖR IGÅNG
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default injectSheet(styles)(LandingPage);
