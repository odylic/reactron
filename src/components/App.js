import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppContainer from './AppContainer.jsx';
import LoginPage from './login/LoginPage.js';
import { useState } from 'react';
import RenderedPage from './RenderedPage.jsx';
import LandingPage from './LandingPage.jsx';
import Cookies from 'js-cookie';

export default function App() {
  const [username, useUsername] = useState(Cookies.get('username'));
  const [projName, useProjName] = useState(undefined);
  const [filesArr, useFilesArr] = useState([]);
  const [loadStatus, useLoadStatus] = useState(false);

  if (username === undefined)
    return <LoginPage useUsername={useUsername} useFilesArr={useFilesArr} useProjName={useProjName}/>;
  if (username === 'demo')
    return <RenderedPage username={username} filesArr={filesArr} project={projName}/>;
  else
    return (
      <div>
        {loadStatus ? (
          <RenderedPage
            filesArr={filesArr}
            username={username}
            project={projName}
            useLoadStatus={useLoadStatus}
          />
        ) : (
          <LandingPage
            username={username}
            useProjName={useProjName}
            useFilesArr={useFilesArr}
            useLoadStatus={useLoadStatus}
          />
        )}
      </div>
    );
}
