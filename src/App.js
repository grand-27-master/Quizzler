import React from 'react';
import './App.css';

// used to configure your app to interact with AWS services.
import {Amplify} from 'aws-amplify';

// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

// ensures that the authenticator looks nice out of the box.
import '@aws-amplify/ui-react/styles.css';

// contains the AWS service configurations (like Cognito, AppSync, etc.) specific to your project.
import awsExports from './aws-exports';

import Quiz from './components/Quiz';

// Configures the Amplify library with the settings from aws-exports.js, which includes all the AWS service configurations for this project.
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className='App-header'>
              {/* Quiz Component */}
              <Quiz />
              {/* Sign Out Button */}
              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);