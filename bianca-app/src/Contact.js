import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class Contact extends Component {

    render(){
        return(
            <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
            <h1>Connect with me!</h1>
            <div>
            <a style={{color: "inherit", textDecoration: "none"}} href="mailto:biancalucy91@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a> 
                
                {" "}
            <a target="_blank" style={{color: "inherit"}} href="https://www.linkedin.com/in/biancaonyekwere/">
                <FontAwesomeIcon icon={faUserFriends} size="3x" />
            </a>
            </div>
            
            
          </div>
            
        );
    }

}