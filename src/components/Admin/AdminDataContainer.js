import React, { Component } from 'react';
import axios from 'axios';

export const withData = url => BasedComponent => class extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get(url).then( response => {
            this.setState({
                data: response.data
            })
          }).catch( err => { console.log( err ) })
    }

    render() {
        const orders = this.state.data;
        if (this.state.data.length) {
            return(
                <div>
                    <BasedComponent users={ this.state.data } orders={ this.state.data } products={ this.state.data }/>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}