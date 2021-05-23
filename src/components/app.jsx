import React, { useState, useEffect } from 'react';
import { getDevice }  from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';

import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'XCovid19', // App name
      theme: 'auto', // Automatic theme detection


      id: 'io.framework7.xcovid19', // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,


      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <App { ...f7params } >

        {/* Left panel with cover effect*/}
        <Panel left themeDark opened={false} reveal>
          <View>
            <Page>
              <Navbar title="Navigation"/>
              <List>
                <ListItem title="Halaman Utama" link="#"></ListItem>
                <ListItem title="Tata Cara" link="#"></ListItem>
                <ListItem title="Mulai Kuisioner" link="#"></ListItem>
              </List>
            </Page>
          </View>
        </Panel>


        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;