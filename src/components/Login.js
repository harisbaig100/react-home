import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Login(props) {
    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="btnFacebook"
            icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}>
        </i>}
        textButton = "&nbsp;&nbsp;Sign In with Facebook" 
        />
    );
}

export default Login;