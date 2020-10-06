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
                {/* <button type="submit" value="Save" className="enter_user"  disabled={this.state.name.length<1}> save</button>  */}
                <Link  to={{
                    pathname: '/letsImagine', name: this.state.name.charAt(0).toUpperCase()
                        + this.state.name.slice(1)
                }} className="enter_user"    >Save</Link>
            </form>
        )
    }
}
