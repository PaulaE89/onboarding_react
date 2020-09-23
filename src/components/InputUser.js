import React, {Component} from 'react'

export default class InputUser extends Component{


    constructor(props){

        super(props)
        this.state={
            name: ''
        }

    }

    saveName=(e)=> this.setState({name: e.target.value })

    handleSubmit=(e)=>{

        e.preventDefault();
        this.props.userName(this.state.name);
        this.setState({name:''})

    }



    render(){
       
        return (

            

            <form className="form_user" onSubmit={this.handleSubmit} > 
                <input type="text" name="name" placeholder="your name" className="input_user" onChange={this.saveName} />

                <input type="submit" value="Save"  className="enter_user"/>
            </form>
        )

    }

}
