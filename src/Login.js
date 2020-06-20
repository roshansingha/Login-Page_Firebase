import React from 'react';
import fire from './config/fire';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends React.Component {

    signUp(){
        const email=document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log('Successfully Signed Up');
        })
        .catch((err)=>{
            console.log('Error:'+err.toString());
        })
    }

    login(){
        const email=document.querySelector('#email').value;
        const password=document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log('Successfully Logged In');
        })
        .catch((err)=>{
            console.log('Error:'+err.toString());
        })
    }
    render(){
        return(
     <Form className="login-form">
           <h1 className="text-center">
             <span className="font-weight-bold">
                 LoginPage</span>.com
           </h1>
           <h2 className="text-center">Welcome</h2>
             <FormGroup>
              <Label>Email</Label>
                <Input id="email" type="email" placeholder="Email"/>
             </FormGroup>
             <FormGroup>
              <Label>Password</Label>
                <Input id="password" type="password" placeholder="Password"/>
             </FormGroup>
             <Button className="btn-lg btn-dark btn-block" onClick={this.login}>Log in</Button>
             <Button className="btn-lg btn-dark btn-block" onClick={this.signUp}>Sign up</Button>
              <div className="text-center pt-3">
                or continue with your social Account
              </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
      </Form>
        )
    }
}

export default Login;