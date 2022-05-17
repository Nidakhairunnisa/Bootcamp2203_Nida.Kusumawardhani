import React, { Component } from 'react';
import {withAuth} from '../context/AuthContext';
import StatusButton from './StatusButton';

class Dashboard extends Component {
    componentDidMouth(){
        this.props.initAdmin()
    }
    render(){
        return(
            <div>
                <h2> Welcome {this.props.admin.email}</h2>
                <hr/>
                <StatusButton/>
            </div>
        )
    }
}

export default withAuth(Dashboard)