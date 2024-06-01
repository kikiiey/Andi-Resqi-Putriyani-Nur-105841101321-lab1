import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
const ButtonCustom = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f6f2f2",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginBottom: 65,
          marginTop: 110,
          color: "#d20c70",
        }}
      >
        HIJAB SHOP
      </Text>

      <Image
        source={require("./assets/hijabb.png")}
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: 400,
          height: 150,
          top: 180,
          resizeMode: "contain",
        }}
      />

      <View
        style={{
          justifyContent: "center",
          marginTop: 130,
          marginBottom: 50,
        }}
      >
        <FormInput placeholder="Username" keyboardType="email-address" />
        <FormInput placeholder="Kata Sandi" secureTextEntry />
        <Text
          style={{
            color: "black",
            alignSelf: "center",
            color: "#d20c70",
            top: 10,
          }}
        >
          Lupa Password?
        </Text>
      </View>

      <View
        style={{
          flexdirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Buttoncomponent backgroundColor="#d20c70" text="SIGN UP" />
      </View>

      <Text
        style={{
          color: "black",
          marginTop: 150,
          fontSize: 16,
        }}
      >
        Sign up with another account
      </Text>

      <Image
        source={require("./assets/iconngoogle.png")}
        style={{
          width: 60,
          height: 50,
          top: 10,
          right: 40,
        }}
      />
      <Image
        source={require("./assets/iconfacebook.png")}
        style={{
          width: 60,
          height: 50,
          left: 40,
          bottom: 40,
        }}
      />
    </View>
  );
};
const Buttoncomponent = ({ backgroundColor, text }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: 330,
        height: 45,
        borderRadius: 10,
        bottom: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          lineHeight: 50,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
const FormInput = ({ placeholder, secureTextEntry, keyboardType }) => {
  return (
    <View
      style={{
        marginTop: 10,
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          width: 320,
          height: 50,
          borderColor: "#d20c70",
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          color: "white",
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
