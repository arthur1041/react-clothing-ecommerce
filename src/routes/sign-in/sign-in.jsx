import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const { user } = response;

        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    })().catch(console.error);
  }, []);

  const logGoogleUser = async () => {
    // eslint-disable-next-line no-unused-vars
    const { user } = await signInWithGoogleRedirect();
    // const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
