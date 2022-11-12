import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login...");
    console.log("email", email);
    console.log("password", password);
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#333"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#333"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* login / sign up  */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "55%",
    marginBottom: 40,
    resizeMode: "cover"
  },

  inputView: {
    backgroundColor: "#c0c0c0",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    placeholderTextColor: '#fff'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#cd5c5c",
  },
});