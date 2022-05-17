import React, {Component} from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';

const axiosReq = axios.create()
const AuthContext = React.createContext()

axiosReq.inteceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    //
    config.header.Authorization = token
    return config
})

export class AuthContextProvider extends Component {

    constructor(){
        super()
        this.state = {
            admins: [],
            admin: JSON.parse(localStorage.getItem('admin')) || {},
            token: localStorage.getItem('token') || "",
            isLoggedIn: (localStorage.getItem('token') === null) ? false : true 
        }
    }

    initAdmin = () => {
        return axiosReq.post('http://localhost:3001/api/dashboard')
        .then(response => {
         
            this.setState({'admin': response.data})
            return response;
        })
    }

    //login
    login = (credentials) =>{
        return axiosReq.post('http://localhost:3001/api/login', credentials)
                .then(response => {
                    const {token} = response.data

                    localStorage.setItem("token", token)
                    
                    this.setState({
                        token,
                        isLoggedIn: true
                    })
                    
                    if(this.props.isLoggedIn)
                        return <Navigate push to='/dashboard'/>
                    return console.log(Response)
                })
    }

    //logout
    logout = () => {
        localStorage.removeItem('token')

        this.setState({
            isLoggedIn: false
        })

        return console.log('Logout')
    }
    render() {
        return(
            <AuthContext.Provider value={{
                login: this.login,
                logout: this.logout,
                ...this.state
            }}>
                
            </AuthContext.Provider>
        )
    }
}

export const withAuth = (wrappedComponent) => {
    return class extends Component{
        render(){
            return(
                <AuthContext.Consumer>
                    {(context) =>{
                        <wrappedComponent {...this.props} {...context}/>
                    }}
                </AuthContext.Consumer>
            )
        }
    }
}