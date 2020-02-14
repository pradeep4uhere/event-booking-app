import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

export default class PopularDestination extends Component {
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
      
              text:{
                fontSize:18,
                color:'#FFF',
                fontFamily: 'Cochin',
                alignItems: "center",
                justifyContent: "center", 
      
              },
              textTitle:{
                fontSize:17,
                color:'#FFF',
                fontFamily:'Raleway-Bold'
              },
              bottomText:{
                margin:10,
                fontSize:14,
                color:'#FFF',
              },
              destinationItem:{
                backgroundColor:'#ccc', 
                flexDirection:'column',
                justifyContent:'space-between',
                marginRight:1
              },
              destinationItemImage:{
                height:185, width:205
              },
              destinationItemButton:{
                backgroundColor:'#0086b3',
                height:50, 
                justifyContent:'center', 
                alignContent:'center'
              }
            });
      return (
          <View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom:1, borderBottomWidth:0.5,marginTop:1, backgroundColor:'#0086b3'}}>
            <View style={{margin:10}}>
              <Text style={styles.textTitle}>Popular Destination</Text>
            </View>
            <View style={{margin:10}}>
              <Text style={styles.textTitle} onPress={() => this.props.navigation.navigate('PopularDestination')}>View All</Text>
          </View>    
          </View>
          <ScrollView horizontal style={{marginBottom:1, marginTop:0}}>
          <View style={styles.destinationItem}>
              <View style={styles.destinationItemImage}>
                <Image
                style={styles.destinationItemImage}
                source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Ghungroo_Delhi_Rudra_01.jpg'}}/>
                </View>
              <View style={styles.destinationItemButton}>
                <Text style={styles.bottomText}>Keylong</Text>
              </View>
          </View> 
          <View style={styles.destinationItem}>
              <View style={styles.destinationItemImage}>
                <Image
                style={styles.destinationItemImage}
                source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2016/03/DSC_0480.jpg'}}/>
                </View>
                <View style={styles.destinationItemButton}>
              <Text style={styles.bottomText}>Pahalgam</Text>
              </View>
          </View> 
          <View style={styles.destinationItem}>
              <View style={styles.destinationItemImage}>
                <Image
                style={styles.destinationItemImage}
                source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2016/04/Tsomoriri_RUDRA_DSC_0903.jpg'}}/>
                </View>
                <View style={styles.destinationItemButton}>
              <Text style={styles.bottomText}>Tso Moriri</Text>
              </View>
          </View> 
          <View style={styles.destinationItem}>
              <View style={styles.destinationItemImage}>
                <Image
                style={styles.destinationItemImage}
                source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2015/09/RudraXp_Mandu05.jpg'}}/>
                </View>
                <View style={styles.destinationItemButton}>
              <Text style={styles.bottomText}>Mandu</Text>
              </View>
          </View>  
          </ScrollView>
          </View>
      );
      }
      }
      