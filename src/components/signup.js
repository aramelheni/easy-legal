import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

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

const SignupPage = () => {
  const [accountType, setAccountType] = useState("lawyer");

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSignup = () => {
    // Implement your signup logic here
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
          <EmailInput type="email" placeholder="email@gmail.com" />
        </EmailFormGroup>

        <PasswordFormGroup>
          <Label>Password</Label>
          <Form.Control type="password" placeholder="Password" />
        </PasswordFormGroup>

        <AccountTypeFormGroup>
          <AccountTypeLabel>Account Type</AccountTypeLabel>
          <AccountTypeSelect
            as="select"
            value={accountType}
            onChange={handleAccountTypeChange}
          >
            <option value="lawyer">Lawyer</option>
            <option value="client">Client</option>
          </AccountTypeSelect>
        </AccountTypeFormGroup>

        <PhoneFormGroup>
          <Label>Phone Number</Label>
          <EmailInput type="tel" placeholder="123-456-7890" />
        </PhoneFormGroup>

        <AddressFormGroup>
          <Label>Address</Label>
          <EmailInput type="text" placeholder="123 Main St, City, Country" />
        </AddressFormGroup>

        <Form.Check label="Remember Me" />

        <SignInButton variant="dark" onClick={handleSignup}>
          Sign Up
        </SignInButton>

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

export default SignupPage;