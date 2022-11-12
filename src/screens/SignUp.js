import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign Up...");
    console.log("username", username);
    console.log("email", email);
    console.log("password", password);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#333"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

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
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpBtn}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
        <Text style={styles.signUpText}>Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height:"50%",
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

  signUpBtn: {
    width: "80%",
    borderRadius: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#cd5c5c",
  },
});