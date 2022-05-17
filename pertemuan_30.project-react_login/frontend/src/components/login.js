import React, {Component} from 'react';
import {withAuth} from '../context/AuthContext';

class login extends Component {
    state = {
        email: "",
        password:""
    }
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // metode login
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input onChange={this.handleChange} 
                            value={this.state.email}
                            type='text' placeholder='email' name='email' />

                    <input onChange={this.handleChange} 
                            value={this.state.password}
                            type='password' placeholder='password' name='password' />

                    <input type='submit' value='login' />
                </form>
            </div>
        )
    }
}

export default withAuth(login)