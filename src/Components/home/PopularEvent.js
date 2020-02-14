import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
export default class PopularEvent extends Component {
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
        textTitle:{
          fontSize:17,
          color:'#FFF',
          fontFamily:'Raleway-Bold'
        },
      
        destinationItem:{
          backgroundColor:'#ccc', 
          flexDirection:'column',
          justifyContent:'space-between',
          marginRight:1
        },
        destinationItemImage:{
          height:180, width:204
        },
        ItemButton:{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#ff6655',
          height:50
          
          
        },
        ItemButtonText:{
          fontSize:14,
          color:'#FFF',
          flexWrap: 'wrap',
        }
      });
return (
    <View>
   
    <ScrollView horizontal style={{marginBottom:1, marginTop:0}}>
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2016/04/mumbai_DSC_0545_rudra.jpg'}}/>
          </View>
        <View>
        <View style={styles.ItemButton} >
          <Text style={styles.ItemButtonText}>Mahak – Jaipur (Morning)</Text>
          </View>
        </View>
        
    </View> 
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://www.holidify.com/images/cmsuploads/compressed/Taj_mahal_in_independence_day_20171024202456.jpg'}}/>
          </View>
        <View>
        <View style={styles.ItemButton} >
          <Text style={styles.ItemButtonText}>Sham e Taj</Text>
          </View>
        </View>
    </View> 
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://cdn1.goibibo.com/t_tg_fs/new-delhi-india-gate-147623366844-orijgp.jpg'}}/>
          </View>
        
          <View>
        <View style={styles.ItemButton} >
          <Text style={styles.ItemButtonText}>Djinns and Mystics</Text>
          </View>
        </View>
        
    </View> 
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2015/11/Sham-e-Banaras-Rudra_01.jpg'}}/>
          </View>
          <View>
          <View style={styles.ItemButton} >
            <Text style={styles.ItemButtonText}>Sham e Banaras</Text>
            </View>
          </View>
    </View> 


    
    
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://i2.wp.com/www.manjulikapramod.com/wp-content/uploads/2017/03/GHUNGROO-%E2%80%93-DANCE-MUSICAL-DINNER-THEATRE.jpg?fit=800%2C534'}}/>
          </View>

          <View style={styles.ItemButton} >
            <Text style={styles.ItemButtonText}>Ghungroo Country’s Dinner</Text>
          </View>
    </View>
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://storage.googleapis.com/ehimages/2018/6/4/img_399874620e07babb416b4f594d18cf89_1528117764888_processed_original.jpg'}}/>
          </View>
          <View style={styles.ItemButton} >
            <Text style={styles.ItemButtonText}>Sham e Mumbai</Text>
          </View>
    </View>  
    </ScrollView>
    </View>
);
}
}
