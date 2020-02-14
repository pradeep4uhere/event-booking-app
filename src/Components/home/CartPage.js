import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Suucess", "You are logged In");
    this.props.navigation.navigate('Profile')
  }
render() {
return (
<Container>
<Header>
<Left>
<Button transparent onPress={() => this.props.navigation.navigate('Home')}>
	<Icon name='arrow-back' />
</Button>
</Left>
<Body>
    <Title>Cart Page</Title>
</Body>
<Right>
	<Button transparent onPress={() => this.props.navigation.navigate('Home')}>
		<Text>Cancle</Text>
	</Button>
</Right>
</Header>
 <View style={styles.container}>
		<View>
 			<Text style={styles.welcometext}>My Cart</Text>
		 </View> 
        <View style={styles.inputContainer}>
          <Item floatingLabel>
			    <Label>Email</Label>
    			<Input id="email" />
			</Item>
        </View>
        
        <View style={styles.inputContainer}>
             <Item floatingLabel>
				<Label>Password</Label>
			 <Input />
			 </Item>
        </View>
        <TouchableHighlight style={styles.buttonForgotContainer} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonForgotContainer}>
            <Text style={styles.OrText}>OR</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonSignUpContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>

      </View>
<View  >

</View>

</Container>
);
}
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#fff',
      borderRadius:5,
      borderBottomWidth: 1,
      width:300,
      height:55,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:30,
    width:300,
    borderRadius:5,
  },

   buttonSignUpContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    width:300,
    borderRadius:5,
  },

  
  buttonForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
  },
   buttonRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:300,
    borderRadius:5,
  },


  
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  forgotText: {
  	fontSize: 12
  },
  OrText: {
  	fontSize: 16
  },
  welcometext:{
  	marginBottom: 10,
  	fontSize: 20,
  }
  
});
 