import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordPage() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.promptContainer}
        onPress={() => navigation.navigate('LoginPage')}
      >
      <Image
          source={require('./assets/imageback.png')} 
          style={styles.imageback}
        />
        </TouchableOpacity>
      <Text style={styles.headerText}>Forgot Password</Text>
      <Text style={styles.infoText}>Please enter your email address. You will receive a link to create a new password via email.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Image
          source={require('./assets/imagex.png')} 
          style={styles.inputIcon}
        />
      </View>
      <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  imageback:{
    width:25,
    height:25,
    marginRight:100
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginBottom: 60,
    fontFamily: './assets/fonts/Metropolis-Bold',
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    fontFamily: './assets/fonts/Metropolis-Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 2,
    backgroundColor: 'white',
    marginBottom: 10,
    width: 350,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontFamily: './assets/fonts/Metropolis-SemiBold',
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 40,
  },
  sendButton: {
    backgroundColor: '#f44336',
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: './assets/fonts/Metropolis-SemiBold',
  },
});
