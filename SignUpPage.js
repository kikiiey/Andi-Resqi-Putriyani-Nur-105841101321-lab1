import React from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity 
        style={styles.promptContainer}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={styles.loginPrompt}>Already have an account?</Text>
        <Image
          source={require('./assets/image.png')} 
          style={styles.promptIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Sign Up')}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.socialText}>Or sign up with social account</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Sign Up with Google')}>
          <Image
            source={require('./assets/iconngoogle.png')} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Sign Up with Facebook')}>
          <Image
            source={require('./assets/iconfacebook.png')} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 80,
    fontFamily:'./assets/fonts/Metropolis-Bold',

  },
  input: {
    height: 40, 
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%', 
    borderRadius: 2,
  },
  promptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  loginPrompt: {
    fontSize: 15,
    fontFamily: './assets/fonts/Metropolis-SemiBold',
  },
  promptIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#f44336',
    borderRadius: 50,
    paddingVertical: 20,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: './assets/fonts/Metropolis-SemiBold',

  },
  socialText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 160,
    fontFamily: './assets/fonts/Metropolis-SemiBold',

  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
    width: '80%',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});

export default SignUp;
