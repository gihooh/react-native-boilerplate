import { put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { authSignupSucceed, authLoginSucceed } from '../actions/auth';

export function* authSignupSaga(action) {
  try {
    const API_KEY = 'AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA';
    const link = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
    const response = yield fetch(link, {
      method: 'POST',
      body: JSON.stringify({
        email: action.authData.email,
        password: action.authData.password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    yield put(authSignupSucceed(response));
  } catch (error) {
    // TODO
  }
}

export function* authLoginSaga(action) {
  try {
    const API_KEY = 'AIzaSyCh5zuKIKE8HLYLtxUixfonrqDGvWyOzXA';
    const link = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
    const response = yield fetch(link, {
      method: 'POST',
      body: JSON.stringify({
        email: action.authData.email,
        password: action.authData.password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    yield put(authLoginSucceed(response));
    yield Navigation.startSingleScreenApp({
      screen: {
        screen: 'awesome-places.HomeScreen',
        title: 'Home',
      },
    });
  } catch (error) {
    // TODO
  }
}
