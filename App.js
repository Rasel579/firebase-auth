import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpFrom';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAx6ofolJMeXLUiYH44cOHil76Kt7eC-I4",
      authDomain: "one-time-password-ad510.firebaseapp.com",
      databaseURL: "https://one-time-password-ad510.firebaseio.com",
      projectId: "one-time-password-ad510",
      storageBucket: "one-time-password-ad510.appspot.com",
      messagingSenderId: "111745114235"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <SignUpForm />
        <SignInForm />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
