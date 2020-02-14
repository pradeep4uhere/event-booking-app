import React, {Component} from 'react';

import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import HomeSlider from '../home/TopSlider';
import PopularEvent from '../home/PopularEvent';
import PopularViedos from '../home/PopularViedos';
import PopularDestination from '../home/PopularDestination';
import PopularTravel from '../home/PopularTravel';
import Footer from '../home/Footer';
export default class HomepageScreen extends Component {
    static navigationOptions = {  
        title:'Home',
        drawerIcon:(tintColor) => (
            <Icon name="home"/>
        )
    }; 
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
    const images = [
        'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/1139X627/8bb3a774d2c43bccd0ca8825c944baca.jpeg',
        'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/cc5ef8902e9a7dd3d30b2af9cd2325ac.jpeg',
        'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/c4a614bd1c0ce77c2e0981d75e0a2293.jpeg',
        'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/b8d4d4ae263ab827749bfcc168b47951.png',
      ];
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
        messageBoxBodyText:{
            fontSize:10,
            textAlign:'center',
            borderTopColor:'#000'

        },
        welcom: {
          flex: 1, 
          justifyContent: "center", 
          textAlign: 'center', // <-- the magic
          alignItems: "center",
          color: '#FFF',
          fontWeight: 'bold',
          
        },
       textTitle: {
        color:'#FFF',
        textAlign: 'center', // <-- the magic
        fontSize:18,
       },
       customStylesHere: {
        fontWeight: "bold",
        width:'75%',
        marginLeft:50
        
         }
        
      });
return (
<Container>
<Header style={{backgroundColor:'#F72F81'}}>
<View style={{width:40,justifyContent:'center'}}>
  <Image source={require('../../assets/img/logo.png')} style={{height:35, width:35}}/>
    
</View>
<View style={{width:50,justifyContent:'center'}}>
<Title>Rudra</Title>
</View>
<Right>
<Button transparent >
<Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
</Button>
</Right>
</Header>
<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Container style={{height: '50%'}}>
        <View  style={{width: '100%'}}>
          <HomeSlider />
        </View>
        <View  style={{marginTop:15,marginBottom:25,}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom:1, borderBottomWidth:0.5,marginTop:10, backgroundColor:'#ff6655'}}>
          <View style={{margin:10}}>
            <Text style={styles.textTitle}>Popular Events</Text>
          </View>
          <View style={{margin:10}}>
            <Text style={styles.textTitle} onPress={() => this.props.navigation.navigate('Day Experiences')}>View All</Text>
        </View>    
        </View>
          <PopularEvent/>
        </View>
        <View  style={{marginBottom:25,}}>
          <PopularDestination/>
        </View>
        <View style={{marginBottom:20}}>
          <PopularTravel/>
        </View>
        <View  style={{marginBottom:25}}>
          <PopularViedos/>
        </View>
        <Footer/>
        </Container>
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTop:'solid 1',
        borderTopColor:'#222',
        backgroundColor:'#FFF'

      }}>
    <View style={{justifyContent:'center', alignItems:'center', flex:1}} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Login')}><Icon name="cart"/></Text></View>
    <View style={{justifyContent:'center', alignItems:'center', flex:1}} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Homepage')}><Icon name="home"/></Text></View>
    <View style={{justifyContent:'center', alignItems:'center', flex:1}} ><Text style={styles.text}  onPress={() => this.props.navigation.navigate('Register')}><Icon name="person"/></Text></View>
  </View>
    </SafeAreaView>
  
</Container>
);
}
}
