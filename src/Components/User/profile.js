import React, {Component} from 'react';
import {StyleSheet, View,Alert, Image} from 'react-native';
import { Container, Content, Header, Button, Text,  Body, Icon, Left,Right} from 'native-base';
import ProfileScreen from '../User/profileScreen';
import WelcomeScreen from '../User/welcomeScreen';
import SettingScreen from '../User/settingScreen';
import OrderScreen from '../User/OrderScreen';
import LogoutScreen from '../User/LogoutScreen';
import {    createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'; 
import { createSwitchNavigator,   createAppContainer  } from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack'; 
const CustomeDrawerContentComponent = (props) =>(
  <Container >
    <Header style={{height:150,backgroundColor:'#F72F81'}} >
      <Body style={styles.drawerContainer}>
        <Image source={require('../../assets/img/android-profile-icon-65.png')} style={{width:100,height:100}}/>
        <View><Text style={styles.drawerContainerwelcometext}>Welcome, Pradeep</Text></View>
      </Body>
    </Header>
    <Content>
    <DrawerItems {...props}/>
    </Content>
    </Container>
)


// class DashboardScreen extends Component {  
//   static navigationOptions = {  
//        title: 'Dashboard',  
//        drawerIcon:(tintColor) => (
//         <Icon name="home" style={{fontSize:24, color:tintColor}}/>
//      )
//   };  

//   render() {  
//       return (  
//             <ProfileScreen/>
//       );  
//   }  
// }  

// const DashboardStackNavigator = createStackNavigator(  
//   {  
//       DashboardNavigator: DashboardScreen
//   },
//   {  
//       defaultNavigationOptions: ({ navigation }) => {  
//       return {  
//           headerLeft: (  
//               <Icon  
//                   style={{ paddingLeft: 10 }}  
//                   onPress={() => navigation.openDrawer()}  
//                   name="md-menu"  
//                   size={10}  
//               />  
//           ),
//           headerRight: (  
//             <Icon  
//                 style={{ paddingRight: 10 }}  
//                 onPress={() => navigation.openDrawer()}  
//                 name="md-home"  
//                 size={10}  
//             />  
//         ),  
//       };  
//       }  
//   }  
// );  



const AppDrawerNavigator = createDrawerNavigator(
 {  
    Home    : {  screen: WelcomeScreen     },
    Profile : {  screen: ProfileScreen  }, 
    Setting : {  screen: SettingScreen  }, 
    Order   : {  screen: OrderScreen  }, 
    Logout  : {  screen: LogoutScreen  }, 
    // Signout : {  screen: DashboardStackNavigator  },  
  },
  {
    drawerType:'slide',
    drawerPosition:'left',
    drawerBackgroundColor:'orange',
    initialRouteName: 'Home',
    contentComponent: CustomeDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    contentOptions:{
      activeTintColor:'tomato'
    }
  },{
    contentComponent: props => <NonTeachingMenu {...props} />,
  },);  




const AppSwitchNavigator = createSwitchNavigator({  
  Dashboard: { screen: AppDrawerNavigator },  
  Welcome: { screen: WelcomeScreen},  

});  

  
const AppContainer = createAppContainer(AppSwitchNavigator);  

export default class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
render() {
  const styles = StyleSheet.create({
    login: {
        flex: 1, 
        height: 50, 
        backgroundColor:'#FFF' , 
        justifyContent: "center", 
        alignItems: "center",
    },
    register: {
      flex: 1, 
      height: 50, 
      backgroundColor:'#FFF' , 
      justifyContent: "center", 
      alignItems: "center",
  },
    
  });
return (
  <Container>
  <AppContainer/>  
  <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        flexWrap: 'wrap-reverse',
        borderTop:'solid 1',
        borderTopColor:'#222',
        backgroundColor:'#ccc'

      }}>
  <View style={styles.login} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Homepage')}><Icon name="home"/></Text></View>
  <View style={styles.login} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Login')}><Icon name="cart"/></Text></View>
  <View style={styles.register} ><Text style={styles.text} onPress={() => this.props.navigation.navigate('Register')}><Icon name="person"/></Text></View>
  </View>
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
    color:'#FFF'
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
 