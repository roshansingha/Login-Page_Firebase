import React from 'react';
import fire from './config/fire';
import { Button } from 'reactstrap';

class Home extends React.Component {
    
    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div className= "login-form" style={{textAlign:'center'}}>
                <h1 className="center">You are Logged In</h1>
                <Button className="btn-lg btn-dark btn-block" onClick ={this.logout}>Log Out</Button>
            </div>
        )
    }
}

export default Home;