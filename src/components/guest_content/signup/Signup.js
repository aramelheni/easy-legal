import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import apiUrl from "../../../apiConfig.js"
import { useNavigate } from "react-router-dom";

const SignupPageRoot = styled.div`
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

const AccountTypeFormGroup = styled(Form.Group)`
  width: 300px;
  margin-bottom: 20px;
`;

const AccountTypeLabel = styled(Form.Label)`
  font-size: 30px;
  margin-bottom: 5px;
`;

const AccountTypeSelect = styled(Form.Control)`
  width: 100%;
`;

const PhoneFormGroup = styled(Form.Group)`
  width: 300px;
  margin-bottom: 20px;
`;

const AddressFormGroup = styled(Form.Group)`
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

export default function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("lawyer");

  //Hooks
  const navigate = useNavigate();

  //UI
  const [error, setError] = useState(null);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleFirstNameChange = (event) => {
    setfirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSignup = () => {
    const data = {
      email, password, phoneNumber, firstName, lastName, userType
    }
    axios.post(apiUrl + "/users/signup", data).then(response => {
      setError(null);
      navigate("/signin");
    }).catch(error => {
      setError("Could not signup. "+ error);
    });
  };

  return (
    <SignupPageRoot>
      <BackgroundImage
        alt=""
        src="/vector-justice-lawyer-logo-and-symbols-template-icons-app.jpg"
      />
      <ContentContainer>
        <EmailFormGroup>
          <Label>Email</Label>
          <EmailInput type="email" placeholder="email@gmail.com" value={email} onChange={handleEmailChange} />
        </EmailFormGroup>

        <PasswordFormGroup>
          <Label>Password</Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </PasswordFormGroup>

        <AccountTypeFormGroup>
          <AccountTypeLabel>Account Type</AccountTypeLabel>
          <AccountTypeSelect
            as="select"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="lawyer">Lawyer</option>
            <option value="client">Client</option>
          </AccountTypeSelect>
        </AccountTypeFormGroup>

        <PhoneFormGroup>
          <Label>Phone Number</Label>
          <Form.Control type="tel" placeholder=".. ... ..." value={phoneNumber} onChange={handlePhoneNumberChange} />
        </PhoneFormGroup>

        <AddressFormGroup>
          <Label>First Name</Label>
          <Form.Control type="text" placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
          <Label>Last Name</Label>
          <Form.Control type="text" placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
        </AddressFormGroup>

        <Form.Check label="Remember Me" />

        <SignInButton variant="dark" onClick={handleSignup}>
          Sign Up
        </SignInButton>
        {error && <p style={{color: "red"}}>{error}</p>}

        <SocialLoginContainer>
          <SocialLoginButton variant="primary">
            Sign in with Facebook
          </SocialLoginButton>
          <SocialLoginButton variant="danger">
            Sign in with Google
          </SocialLoginButton>
        </SocialLoginContainer>


      </ContentContainer>
    </SignupPageRoot>
  );
};