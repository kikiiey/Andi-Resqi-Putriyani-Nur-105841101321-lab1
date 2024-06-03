import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import GoogleLogo from './assets/google.png';
import FacebookLogo from './assets/facebook.png';

const Login = ({backgroundColor = '#f7f7f7', text = 'Log In'}) => {
  return (
    <View style={[styles.container, { backgroundColor}]}>
      <Text style={ styles.title }>{Text}</Text>
      <View style={ styles.inputContainer}>
        <TextInput style={ styles.TextInput}
        placeholder="Email"
        keyboardType="email-address"/>
        <TextInput style={ styles.TextInput}
        placeholder="Password" secureTextEntry/>
      </View>
      <View style={ styles.footer}>
        <Text style={ styles.footerText}>Don't have an account? </Text>
        <Text style={ styles.footerLink}>Sign Up</Text>
      </View>
      <TouchableOpacity style={ styles.loginButton}>
        <Text style={ styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={ styles.orText}>or Log In with social account</Text>
      <View style={ styles.socialButtonsContainer}>
        <TouchableOpacity style={[ styles.socialButton, {marginRight: 10}]}>
          <Image source={GoogleLogo}style={ styles.socialIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.socialButton}>
          <Image source={FacebookLogo}style={ styles.socialIcon}/>
          </TouchableOpacity>
        </View>
      </View>    
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  TextInput: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#blue'
  },
  footerLink: {
    fontSize: 14,
    color: 'red'
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 17,
  },
  orText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 150,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 8,
    elevation: 5,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default Login;