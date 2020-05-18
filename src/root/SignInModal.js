import React, { useState } from 'react';
import { signIn } from '../services/Firebase';
import SignInModalView from './SignInModalView';

function SignInModal({ show, handleSignInModalClose }) {
  const [signInInfo, setSignInInfo] = useState({});
  const [signingIn, setSigningIn] = useState(false);
  const [signInError, setSignInError] = useState('');

  const handleClose = () => {
    handleSignInModalClose();
    setSignInInfo({});
  };

  const handleSignInInfoChange = (e) =>
    setSignInInfo({ ...signInInfo, [e.target.name]: e.target.value });

  const handleSignIn = (e) => {
    e.preventDefault();
    setSigningIn(true);

    if (validateSignInInfo(signInInfo.email, signInInfo.password)) {
      signIn(signInInfo.email, signInInfo.password)
        .then(() => {
          setSigningIn(false);
          handleClose();
        })
        .catch((error) => {
          setSigningIn(false);

          switch (error.code) {
            case 'auth/user-not-found':
              setSignInError('User not found.');
              break;
            case 'auth/wrong-password':
              setSignInError('Incorrect password.');
              break;
            default:
              setSignInError(error.message);
              break;
          }
        });
    }
  };

  // true = pass, false = fail
  const validateSignInInfo = (email, password) => {
    if (!email) {
      setSigningIn(false);
      setSignInError('Invalid email.');
      return false;
    }
    if (!password) {
      setSigningIn(false);
      setSignInError('Invalid password.');
      return false;
    }

    return true;
  };

  return (
    <SignInModalView
      show={show}
      handleClose={handleClose}
      handleSignInInfoChange={handleSignInInfoChange}
      handleSignIn={handleSignIn}
      signingIn={signingIn}
      signInError={signInError}
    />
  );
}

export default SignInModal;
