import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from 'react';
import apiUrl from "../../../apiConfig.js"

const LoginPageRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #333;
  font-family: "Arial", sans-serif;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const EmailFormGroup = styled(Form.Group)`
  width: 300px;
  margin-bottom: 20px;
`;

const Label = styled(Form.Label)`
  font-size: 30px;
  margin-bottom: 5px;
`;

const EmailInput = styled(Form.Control)`
  width: 100%;
`;

const PasswordFormGroup = styled(Form.Group)`
  width: 300px;
  margin-bottom: 20px;
`;

const SignInButton = styled(Button)`
  width: 200px;
  margin-top: 20px;
`;

const SocialLoginContainer = styled.div`
  margin-top: 20px;
`;

const SocialLoginButton = styled(Button)`
  margin-right: 10px;
`;

const DontHaveAnContainer = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #555;
`;

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //UI
  const [error, setError] = useState(null);

  const handleFacebookLogin = () => {
    // Implement Facebook login logic
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
  };

  const handleSignin = () => {
      setError(null);
      
      const data = {
      email, password
    }
    axios.post(apiUrl + "/users/signin", data).then(response => {
      setError(null);
      console.log(response);
    }).catch(error => {
      setError("Could not login.", error);
    });
  }

  const onEmailChange = (event) => {
      setError(null);
      setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
      setError(null);
      setPassword(event.target.value);
  }

  return (
    <LoginPageRoot>
      <BackgroundImage
        alt=""
        src="/vector-justice-lawyer-logo-and-symbols-template-icons-app.jpg"
      />
      <ContentContainer>
        <EmailFormGroup>
          <Label>Email</Label>
          <EmailInput type="email" placeholder="Enter your email" value={email} onChange={onEmailChange} />
        </EmailFormGroup>

        <PasswordFormGroup>
          <Label>Password</Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
        </PasswordFormGroup>

        <Form.Check label="Remember Me" />

        <SignInButton variant="dark" onClick={handleSignin}>Sign In</SignInButton>
        {error && <p>{error}</p>}
        <SocialLoginContainer>
          <SocialLoginButton variant="primary" onClick={handleFacebookLogin}>
            Sign in with Facebook
          </SocialLoginButton>
          <SocialLoginButton variant="danger" onClick={handleGoogleLogin}>
            Sign in with Google
          </SocialLoginButton>
        </SocialLoginContainer>

        <DontHaveAnContainer>
          Don’t have an account? <span>Sign Up</span>
        </DontHaveAnContainer>
      </ContentContainer>
    </LoginPageRoot>
  );
};