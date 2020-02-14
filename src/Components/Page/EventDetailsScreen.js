import React, {Component} from 'react';
import Slideshow from 'react-native-image-slider-show';
import ReadMore from 'react-native-read-more-text';
import RNPickerSelect from 'react-native-picker-select';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {Accordion,Icong} from 'galio-framework';

import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Label } from 'native-base';
import { CheckBox, Input } from 'react-native-elements';
const seatType = [
  { label: 'Normal', value: '1' },
  { label: 'Gold', value: '2' },
  { label: 'Diamond', value: '3' },
];
const WATER_IMAGE = require('../../assets/img/star.png')
// a component that calls the imperative ToastAndroid API
const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};
export default class EventDetailsScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          isShow: false,
          setShow: false,
          dataAccordian: [
              {
                title: 'Includes',
                content:
                  'Pick up from your hotel at 3:45 pm in Agra, Proceed to Itmaduduallah. Board a Tonga to ride to a location to witness a glorious sunset. Proceed by car for an exclusive evening and dinner with National Award winning Master Craftsman. Proceed to your hotel.',
              },
              {title: 'Not include', content: 'Get on to a Tonga and ride into an evening of a glorious sunset with the Taj and an exclusive introduction to the extra ordinary story of humble beginnings, dedication, an undying love for the art, achievements and life of the National Award winning Master craftsman of the legendary marble Inlay work (as in the Taj Mahal). Some of the Masterpieces created by him are so intricate that now they can never be created again thanks to his unmatched commitment and finesse.'},
              {title: 'More', content: 'Get on to a Tonga and ride into an evening of a glorious sunset with the Taj and an exclusive introduction to the extra ordinary story of humble beginnings, dedication, an undying love for the art, achievements and life of the National Award winning Master craftsman of the legendary marble Inlay work (as in the Taj Mahal). Some of the Masterpieces created by him are so intricate that now they can never be created again thanks to his unmatched commitment and finesse.'},
              {title: 'Misc ', content: 'Get on to a Tonga and ride into an evening of a glorious sunset with the Taj and an exclusive introduction to the extra ordinary story of humble beginnings, dedication, an undying love for the art, achievements and life of the National Award winning Master craftsman of the legendary marble Inlay work (as in the Taj Mahal). Some of the Masterpieces created by him are so intricate that now they can never be created again thanks to his unmatched commitment and finesse.'},
            ],
          position: 2,
          interval: null,
          arrowSize:1,
          dataSource: [
            {
               url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Ghungroo_Delhi_Rudra_01.jpg',
            }, 
            {
              url: 'https://www.rudraxp.com/wp-content/uploads/2019/05/Day-tour-india_home_Rudra_ladakh.jpg',
            }, 
            {
              url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Mahak_rudraXp_H.jpg',
            },
          ],
        };


        // this.setShow =  this.setShow.bind(this);
      }

    componentWillMount() {
    this.setState({
        interval: setInterval(() => {
        this.setState({
        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
             }, 2000)
    });
    }

    componentWillUnmount() {
    clearInterval(this.state.interval);
    }


  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: 'tomato', marginTop: 5, fontWeight:'bold'}} onPress={handlePress}>
            Read more...
      </Text>
    );
  }
 
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#000', marginTop: 5, fontWeight:'bold'}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  

  handleButtonPress = () => {
    this.setState(
      {
        visible: true,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };


  
 

 
  render() {  
     
      return (  
        <Container>
        <Header style={{backgroundColor:'#F72F81'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('Day Experiences')}>
            	<Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>Event Detail</Text>  
          </Body>
          <Right>
          
          <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />       
          </Right>
        </Header>
        <Body style={styles.drawerContainer}>
        <ScrollView style={styles.scrollView}>
        <View>
        <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
        </View>
        <View style={{justifyContent:'center', alignContent:'center', padding:15}}>
            <Text style={{fontSize:18}}>Ghungroo – Country’s only Dinner Theatre</Text>
            <Text>-Dance Musical & Dinner Theatre</Text>
        </View>
        <View style={{justifyContent:'center', alignContent:'center', paddingTop:10, paddingLeft:15}}>  
            <Text style={{color:'#222e', fontSize:14}}>2hr 20 min | Hindi</Text>
            <Text style={{color:'#222e', fontSize:14}}>Mandi House, New Drama Theatre | New Delhi</Text>
        </View>
        <View style={{justifyContent:'space-between', flexDirection:'row',  margin:15}}>  
        
                <View style={{width:190,alignSelf:'flex-start', marginTop:15}}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Select Seat Type',
                    value: null,
                    color: 'tomato',
                  }}
                  onValueChange={(value) => console.log(value)}
                  items={seatType}
                  style={pickerSelectStyles}
                />

            </View>
            <View style={{ alignSelf:'flex-end', paddingRight:15}}>
              <Text style={{color:'#222e', fontSize:20, fontWeight:'bold'}}><Image source={require('../../assets/img/rupee.png')} style={{width:20,height:18}}/>3500/-</Text>
            </View>
            
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{borderColor:'#ccc',  flex:1, alignItems:'center', justifyContent:'center', height:50, borderWidth:0.3 }}><Text>
            <Image source={require('../../assets/img/forward-arrow.png')} style={{width:20,height:18}}/> Share</Text></View>
          <View style={{borderColor:'#ccc',  flex:1, alignItems:'center', justifyContent:'center', height:50, borderWidth:0.3 }}>
          
          <Text><Image source={require('../../assets/img/mail.png')} style={{width:20,height:18}}/> Enquiry</Text>
            </View>
        </View>
        
        <View style={{justifyContent:'center', alignContent:'center', padding:15}}>  
          <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              <Text style={styles.cardText}>
              “If there is one place on the face of earth where all the dreams of living men have found a home from the very earliest days when man began the dream of existence, it is India.”
            – Romain Rolland, Nobel Laureate
            A unique, immersive, dance musical, that unfolds the story of Delhi as a seat of power that impacted the cultural-scape of India, a perfect end to your day.
            Delhi or ‘Dehleez’, the doorway to India and the seat of many empires, has a past as glorious, varied and colourful as the nation it represents. So we follow Yamuna, the meandering river that has forever patronised this city, on a journey that is filled with enchanting tales of power, conquest, revenge, devotion and love.
            Starting from the first documented ruler of Delhi, Prithwi Raj Chauhan, tracing the journey of Bhakti Movement through Sufism, followed by stylised form of Kathak for the Mughal Courts, Tarana, ending in Bollywood, it showcases the history and spirit of Delhi, through dance, all in an hour’s time.
            This is followed by authentic Indian Barbecue dinner at Angare, that presents Indian gastronomy in its purest form, as we try to create an environment that unifies all your five senses for that ultimate experience.
            Traditional recipes. Researched over centuries. Tested in the Royal Kitchens. 
            Slow cooked, delicately spiced, with subtle aromas and served the way it was meant to be: Straight from fire.
            Join us on an extra ordinary narration of this saga of romance with the bygone era, a first and the only Boutique – Dinner Theater in Delhi, located in the heart of the city.
              </Text>
          </ReadMore>
        </View>
        <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
            <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#FFF', padding:15}}><Text style={{color:'#000'}}>Rating & Review</Text></View>
            <View style={{ flex:1, alignItems:'center',  padding:15}}><Text style={{color:'#000', fontWeight:'400'}}>Rate Event</Text></View>
        </View>
        <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
            <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#FFF', padding:15, borderRightWidth:0.5, borderColor:'#CCC'}}><Text style={{color:'#000', fontSize:22, fontWeight:'bold'}}>4.8</Text></View>
            <View style={{ flex:1, alignItems:'center',  padding:15}}>
            <Rating
                type='custom'
                ratingImage={WATER_IMAGE}
                ratingCount={5}
                imageSize={30}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
        </View>
        </View>
          <View style={{flexDirection:'row', flex:1}}>
              <Accordion dataArray={this.state.dataAccordian} opened={0} headerStyle={styles.headerStyle} contentStyle={styles.contentStyle} />
          </View>
      </ScrollView>
        
          </Body>
          <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
            <Toast visible={this.state.visible} message="Your event item added into cart" />
            <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'orange', padding:15}}>
              <Text style={{color:'#FFF'}} onPress={this.handleButtonPress} >Add To Cart</Text>
              </View>
            <View style={{ flex:1, alignItems:'center', backgroundColor:'#F72F81', padding:15}}><Text style={{color:'#FFF', fontWeight:'400'}}>Book Now</Text></View>
          </View>
        </Container>
      );  
  }  
}  

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    borderWidth: 0.5,
    color: 'black',
    paddingRight: 10, // to ensure the text is never behind the icon
    marginTop:-15,
  },
});

const styles = StyleSheet.create({
    contentStyle:{
      fontSize:15
    },
    headerStyle:{
      fontSize:28,
      backgroundColor:'#D3E1E1',
      padding:10,
      borderBottomWidth:0.5,
      borderBottomColor:'#CCC',

    },
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
        fontSize: 15,
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        margin:5
    }
});
 