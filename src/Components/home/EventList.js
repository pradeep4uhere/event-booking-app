import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';


export default class EventList extends Component {
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
            borderTopColor:'#000',
            marginBottom:15

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
        color:'#000',
        textAlign: 'center', // <-- the magic
        fontSize:18,
       },
       customStylesHere: {
        fontWeight: "bold",
        width:'75%',
        marginLeft:50
        
         },
        WebViewContainer: {
            marginTop: (Platform.OS == 'ios') ? 20 : 0,
        }
      });
return (
<Container>
<Header style={{backgroundColor:'#ff6d59'}}>
<Left>
<Title>Event List</Title>
</Left>
<Right>
<Button transparent onPress={() => this.props.navigation.openDrawer()}>
</Button>
<Icon name='arrow-back' />
</Right>
</Header>
<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Mahak_rudraXp_H.jpg'}} style={{width: '100%', height:250}} onPress={() => this.props.navigation.navigate('Home')}>
        <View style={styles.welcom} >
        <Text style={styles.welcometext}>Rudra Experiences is a socially committed, innovation driven, experience provider and enabler. You are invited</Text>
        </View>
        </ImageBackground>
        <Container style={{alignItems: 'center'}}>
        <Text style={styles.textTitle}>Popular Experiences</Text>
        <View>
        <Text style={{width:'100%'}}>___________________
        <Image style={styles.textTitle} source={{uri: "http://192.168.0.181:5000/rudra/images/sep-title.png"}}  style={{
            width: 50, 
            height: 10,
            marginTop:20,
            }}/>
        ___________________
        </Text>
        </View>
        <View style={{marginTop:10,color:'#FFF'}}>
        <Slideshow style={{color:'#fff'}}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
        </View>
        <View style={{marginTop:10}}>
          <Button block success onPress={() => this.props.navigation.navigate('EventList')}>
            <Text>View All</Text>
          </Button>
          </View>
        
        <View style={{marginTop:15}}>
        <Text style={styles.textTitle}>Videos & Reviews</Text>
        <Text style={{width:'100%'}}>___________________
        <Image style={styles.textTitle} source={{uri: "http://192.168.0.181:5000/rudra/images/sep-title.png"}}  style={{
            width: 50, 
            height: 10,
            marginTop:25,
            }}/>
        ___________________
        </Text>
        
        </View>
        <View style={{ height: 300 }}>
        <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
        <YouTube
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
            />
            
        </View>
            <View style={{marginTop:10}}>
          <Button block success>
            <Text>View All</Text>
          </Button>
          </View>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop:15,
                flexDirection:'row',
                justifyContent:'center',
                flex:1
            }}
            >
        <Text style={{color:'#000',fontSize:10}}>
        
        </Text>
        </View>
        </Container>
        <View style={{marginTop:15}}>
                <View style={styles.content}>
                 <View style={styles.messageBox}>
                 <Text>----------------------------------------------------------------------------------------</Text>
                <View>
                    <Text style={styles.messageBoxBodyText}>© Copyright 2019 Rudra Experiences All rights reserved, Powered by Aimbeyond Infotech Pvt. Ltd.</Text>
                </View>
                </View>
                </View>
            </View>
      </ScrollView>
      
    </SafeAreaView>
    
</Container>
);
}
}
