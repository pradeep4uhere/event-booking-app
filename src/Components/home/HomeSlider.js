import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class HomeSlider extends Component {
render() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 1,
          },
          scrollView: {
            backgroundColor: '#FFF',
            marginHorizontal: 1,
          },
          text: {
            fontSize: 20,
          },

        welcometext:{
            width: '90%',
            flexDirection: 'row',
            justifyContent: "center", 
            alignItems: "center",
            fontSize:18,
            color:'#FFF',
            fontWeight: 'bold',
            marginTop:110

        },
        text:{
          fontSize:18,
          color:'#FFF',
          fontFamily: 'Cochin',
          alignItems: "center",
          justifyContent: "center", 

        },
      });
return (
    <ImageBackground source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Mahak_rudraXp_H.jpg'}} style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Home')}>
    <View style={styles.welcom} >
    <Text style={styles.welcometext}>Rudra Experiences is a socially committed, innovation driven, experience provider and enabler. You are invited</Text>
    </View>
    </ImageBackground>
);
}
}
