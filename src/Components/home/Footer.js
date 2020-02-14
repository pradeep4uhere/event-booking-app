import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import YouTube from 'react-native-youtube'; 
export default class Footer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          position: 1,
          interval: null,
          dataSource: [
            {
              title: 'Pub Hopping',
              caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/1139X627/8bb3a774d2c43bccd0ca8825c944baca.jpeg',
            }, {
              title: 'Sham e Banaras',
              caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/cc5ef8902e9a7dd3d30b2af9cd2325ac.jpeg',
            }, {
              title: 'Sham e Dilli',
              caption: 'How did it get so late so soon?”',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/c4a614bd1c0ce77c2e0981d75e0a2293.jpeg',
            },
          ],
        };
      }
render() {
    const styles = StyleSheet.create({
        messageBox:{
          justifyContent:"center",
          alignItems:'center',
          backgroundColor:'#FFF',
          borderTopColor:'#ccc',
          borderTopWidth:0.5,
          
        },  
        messageBoxBodyText:{
          fontSize:11,
        },
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
      });
return (
        <View style={styles.messageBox}>
            <Text style={styles.messageBoxBodyText}>© Copyright 2019 All rights reserved</Text>
        </View>
);
}
}
