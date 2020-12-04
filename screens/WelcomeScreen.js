import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert , ScrollView,Modal} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      email : '',
      password: '',
      name:'',
      phone:'',
      confirmpassword:'',
      isModalVisible:'false'
      
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
      showModal =()=>{
        return(
         <Modal
         animationType="fade"
         transparent={true}
         visible={this.state.isModalVisible}
      >
       <View  style={styles.modalcontainer}>
       <ScrollView style={{width:'100%'}}> <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>

        <TextInput
          style={styles.formTextInput}
          placeholder="NAME"
          maxLength = {8}
         
          onChangeText={(text)=>{
            this.setState({
              name: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="sample@email.com"
          keyboardType = {'email-address'}
          
          onChangeText={(text)=>{
            this.setState({
             email: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({
             password: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder="confirmpassword"
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({
             confirmpassword: text
            })
          }}
        />
           <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.email, this.state.password,this.state.confirmpassword)}}
            >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView ></ScrollView> 

       </View>


      </Modal>


        );

      }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          
          <Text style={styles.title}>Book Santa</Text>
        </View>
        {this.showModal()
        }
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.setState({isModalVisible:true})}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
   
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
