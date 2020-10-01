import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './InputUser.css'

export default class InputUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    saveName = (e) => this.setState({ name: e.target.value })
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userName(this.state.name);
        this.setState({ name: '' })
    }
    render() {
        return (
            <form className="form_user" onSubmit={this.handleSubmit} >
                <input type="text" name="name" placeholder="your name" className="input_user" onChange={this.saveName} value={this.state.name} />
                {/* <input type="submit" value="Save" className="enter_user" /> */}
                <Link to={{ pathname: '/letsImagine', name: this.state.name }} className="enter_user" >Save</Link>
            </form>
        )
    }
}
