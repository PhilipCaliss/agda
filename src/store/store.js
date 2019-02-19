import React, {Component} from 'react';

export const Context = React.createContext();
export class Store extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0
        };
    
        this.updatePage = (page) => {
            this.setState({
                page: this.state.page + 1
            });
        }
    }

    render() {
        const methods = {
            updatePage: this.updatePage
        }
        return (
            <Context.Provider value={{
                    state: this.state,
                    methods
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}