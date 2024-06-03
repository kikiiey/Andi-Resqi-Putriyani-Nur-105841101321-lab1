import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Forgotpassword = ({ backgroundColor = '#f7f7f7', text = 'Forgot Password'}) => {
  return (
    <View style={[ styles.container, {backgroundColor}]}>
      <TouchableOpacity style={ styles.backIconContainer}>
        <Text style={ styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={ styles.title}>{Text}</Text>
        <Text style={ styles.instruction}>Please enter your email address. You will receive a link to create a new password via email.</Text>
        <View style={ styles.inputContainer}>
          <Text style={ styles.label}>Email</Text>
          <TextInput style={ styles.TextInput}
           placeholder='Email'
           keyboardType='email-address'/>
          <Text style={ styles.errorMessage}>Not a valid email address</Text>
          </View>
          <TouchableOpacity style={ styles.sendButton}>
            <Text style={ styles.sendButtonText}>SEND</Text>
          </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backIconContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: 'red',
    marginBottom: 5,
  },
  TextInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderBlockColor: 'red',
    borderRadius: 4,
    fontSize: 15,
  },
  errorMessage: {
    color: 'red',
    fontSize: 13,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 17,
  },
});

export default Forgotpassword;