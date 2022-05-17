import React from 'react';
import {withAuth} from '../context/AuthContext';

function StatusButton(props){
    return(
        <nav>
            {
                props.islogggedIn ? <button onClick={props.logout}>Logout</button>
                : <button onclick='#'>Login</button>
            }
        </nav>
    )
}

export default withAuth(StatusButton)