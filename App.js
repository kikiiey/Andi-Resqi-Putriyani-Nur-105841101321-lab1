import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
const ButtonCustom = () => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#f6f2f2',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
      }}>
         <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 65,
        marginTop: 110,
        color: '#d20c70',
      }}>HIJAB SHOP</Text>
      <Image source={require('./assets/hijabb.png')} style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 130,
        top: 180,
        resizeMode: 'contain',
      }} />
      <View style={{
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
      }}>
        
        <FormInput placeholder="Username" keyboardType="email-address" />
        <FormInput placeholder="Kata Sandi" secureTextEntry />
        <Text style={{
          color: 'black',
          alignSelf: 'center',
          color: '#d20c70',
          top: 10,
        }}>Lupa Password?</Text>
      </View>
      <View style={{
        flexdirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
      }}>

        <Buttoncomponent backgroundColor='#d20c70'text='SIGN UP'/>
      </View >
      <Text style={{
        color: 'black',
        marginTop:150 ,
      }}>Sign up with another account
      </Text>
      <Image source={require('./assets/iconngoogle.png')} style={{
        width: 50,
        height: 40,
        top: 10,
        right:30,
        
      }} />
            <Image source={require('./assets/iconfacebook.png')} style={{
        width: 50,
        height: 40,
        left:30,
        bottom:30,
      }} />
      </View>
    )
  }
  const Buttoncomponent = ({backgroundColor,text}) => {
    return (
      <View style={{
        backgroundColor:backgroundColor,
        width:200,
        height:45,
        borderRadius:40,
        marginLeft:10
      }}>
      <Text style={{
        color:'white',
        textAlign:'center',
        lineHeight:50,
        fontSize:20,
        fontWeight:'bold'
      }}>
        {text}
      </Text>
      </View>
    )
  }
  const FormInput = ({ placeholder, secureTextEntry, keyboardType }) => {
    return (
      <View style={{
        marginTop: 10,
        alignItems: 'center',
      }}>
        <TextInput
        style={{
          width: 320,
          height: 50,
          borderColor: '#d20c70',
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          color: 'white',
        }}
        placeholder={placeholder}
        placeholderTextColor="#a4a1a3"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />  
      </View>
    );
  };
  export default ButtonCustom;