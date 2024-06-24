import React from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.promptContainer}
        onPress={() => navigation.navigate('SignUpPage')}
      >
      <Image
          source={require('./assets/imageback.png')} 
          style={styles.imageback}
        />
        </TouchableOpacity>
      <Text style={styles.text}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <View style={styles.promptContainer}>
      <TouchableOpacity 
        style={styles.promptContainer}
        onPress={() => navigation.navigate('ForgotPasswordPage')}
      >
        <Text style={styles.loginPrompt}>Forgot your password?</Text>
        <Image
          source={require('./assets/image.png')} 
          style={styles.promptIcon}
        />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Login')}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.textsosmed}>Or sign up with social account</Text>
      <View style={styles.iconContainer}>
      <Image
          source={require('./assets/iconngoogle.png')} 
          style={styles.iconImage}
        />
        <Image
          source={require('./assets/iconfacebook.png')} 
          style={styles.iconImage}
        />
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
    backgroundColor: '#F9F9F9',
  },
  imageback:{
    width:25,
    height:25,
    marginRight:320,
    marginBottom:15,
  },
  text: {
    fontSize: 35,
    marginRight: 90,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 80,
  },
  input: {
    height: 40, 
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 20,
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
    fontFamily: './assets/fonts/Metropolis-SemiBold'
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
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: './assets/fonts/Metropolis-SemiBold'
  },
  textsosmed: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 160,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
    width: '80%',
  },
  iconImage: {
    padding: 20,
    justifyContent: 'center',
    width: 20,
    height: 20,
  }
});

export default Login;
