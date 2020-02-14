import React, {Component} from 'react';
import IconV from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Title,Icon, Form, Item,   Label } from 'native-base';
import { CheckBox, Input } from 'react-native-elements';
export default class LogoutScreen extends Component {  
  static navigationOptions = {  
       title:'Signout',
       drawerIcon:(tintColor) => (
           <Icon name="md-exit" size={20} />
       )
  };  
  render() {  
      return (  
        <Container>
        <Header style={{backgroundColor:'#F72F81'}}>
          <Left>
            <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>LogOut</Text>  
          </Body>
          <Right>
          {/* <Icon style={{color:'#FFF'}} name="home" onPress={() => this.props.navigation.openDrawer()}  />            */}
          </Right>
        </Header>
        <Body style={styles.drawerContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
              <Text>LogOut Screen</Text>  
              <Button  
                  title="Go to Dashboard Screen"  
                  onPress={() => this.props.navigation.navigate('Dashboard')}  
              />  
          </View>  
          </Body>
        </Container>
      );  
  }  
}  


const styles = StyleSheet.create({

  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  drawerContainerwelcometext:{
  	margin: 10,
    fontSize: 18,
    color:'#222'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#fff',
      borderRadius:5,
      borderBottomWidth: 1,
      width:320,
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
    fontSize:10
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
  	fontSize: 10
  },
  OrText: {
  	fontSize: 16
  },
  welcometext:{
  	marginBottom: 10,
  	fontSize: 20,
  }
  
});
 