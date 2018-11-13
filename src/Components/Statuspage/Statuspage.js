import React, { Component } from 'react';



import './Statuspage.css'



class Statuspage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            status: "",
        }
    }

    componentDidMount() {

        let headers = {
            accept: 'application/json; charset=utf-8'
        };
        headers['content-type'] = 'application/json; charset=utf-8';
        fetch('https://status.visma.com/index.json', headers).then(response => {
            return response.json()
        }).then(json => {
            var tmp = json.components.filter(comp => (comp.id === 'r0kl3clcllgd'));
            this.setState( {
                status: tmp[0].status
            })
        });
    }

    render() {
        return (<div>Tripletex er : {this.state.status}</div>);
    }
}
export default Statuspage;
