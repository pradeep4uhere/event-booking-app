import React, {Component} from 'react';
import IconV from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import { Navigation } from 'react-navigation'; 
export default class DayExperinceScreen extends Component {  
  constructor(props) {
    super(props);
        this.state = {
          dobText: '',
          dobDate: null,
          journeyText: '',
          journeyDate: null,
        }
    this.onDOBPress = this.onDOBPress.bind(this);
    this.onDOBDatePicked =  this.onDOBDatePicked.bind();
    this.onJourneyDatePress = this.onJourneyDatePress.bind();
    this.onJourneyDatePicked = this.onJourneyDatePicked.bind();

  }

  /**
   * DOB textbox click listener
   */
  onDOBPress = () => {
    let dobDate = this.state.dobDate;

    if(!dobDate || dobDate == null){
      dobDate = new Date();
      this.setState({
        dobDate: dobDate
      });
    }

    //To open the dialog
    this.refs.dobDialog.open({
      date: dobDate,
      maxDate: new Date() //To restirct future date
    });

  }

  /**
   * Call back for dob date picked event
   *
   */
  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MMM-YYYY')
    });
  }



  /**
   * Journey date textbox click listener
   */
  onJourneyDatePress = () => {
    let journeyDate = this.state.journeyDate;

    if(!journeyDate || journeyDate == null){
      journeyDate = new Date();
      this.setState({
        journeyDate: journeyDate
      });
    }

    //To open the dialog
    this.refs.journeyDialog.open({
      date: journeyDate,
      minDate: new Date() //To restirct past date
    });

  }

  /**
   * Call back for journey date picked event
   *
   */
  onJourneyDatePicked = (date) => {
    this.setState({
      journeyDate: date,
      journeyText: moment(date).format('DD MMM, YYYY')
    });
  }

  render() {  
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
     
      return (  
        <Container>
        <Header style={{backgroundColor:'#F72F81'}}>
          <Left>
          <Icon style={{color:'#FFF'}} name="home" onPress={() => this.props.navigation.openDrawer()}  />       
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>Event Experince</Text>  
          </Body>
          <Right>
          
          <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />       
          </Right>
        </Header>
        <Body style={{width:'100%'}}>
        <ScrollView style={{marginBottom:1, marginTop:0}}>
        
        <View style={styles.destinationItem}>
            <View style={styles.destinationItemImage}>
              <Image
              style={styles.destinationItemImage}
              source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2016/04/mumbai_DSC_0545_rudra.jpg'}}/>
            </View>
            <View style={styles.ItemButton} >
                <View style={styles.rightBox}>
                      <Text style={styles.eventTitle}>Ghungroo – Country’s only Dinner Theatre</Text>
                      <Text style={styles.eventPlace}>Place: (New Delhi)</Text>
                      <Text style={styles.eventPrice}>Price:(in INR)</Text>
                      <Text style={styles.eventPriceValue}>3,000.00 – 3,500.00</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center'}}>
                  <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('EventDetailsPage', {
                      itemId: 86,
                      otherParam: 'anything you want here',
                    });
                  }}>Book Now</Text></Button>
                </View>
              </View>
              {/* <View style={{justifyContent:'space-between',flexDirection:'row'}}>
              <View>
                  <Text onPress={this.onJourneyDatePress.bind(this)}>dasd</Text>
                  </View>
                  <View>
                  <Text onPress={this.onJourneyDatePress.bind(this)} ><Icon name="calendar"/></Text>
                  <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)} />
                  </View>
              </View> */}
        </View> 





    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://www.holidify.com/images/cmsuploads/compressed/Taj_mahal_in_independence_day_20171024202456.jpg'}}/>
          </View>
          <View style={styles.ItemButton} >
            <View style={styles.rightBox}>
                  <Text style={styles.eventTitle}>Mahak – Jaipur (Morning)</Text>
                  <Text style={styles.eventPlace}>Place: (Jaipur)</Text>
                  <Text style={styles.eventPrice}>Price:(in INR)</Text>
                  <Text style={styles.eventPriceValue}>1,500.00 – 2,000.00</Text>
            </View>
            <View style={{justifyContent:'center', alignContent:'center'}}>
              <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}>Book Now</Text></Button>
            </View>
          </View>
    </View> 



    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://cdn1.goibibo.com/t_tg_fs/new-delhi-india-gate-147623366844-orijgp.jpg'}}/>
          </View>
        
          <View style={styles.ItemButton} >
            <View style={styles.rightBox}>
                  <Text style={styles.eventTitle}>Sham e Taj</Text>
                  <Text style={styles.eventPlace}>Place: (Agra)</Text>
                  <Text style={styles.eventPrice}>Price:(in INR)</Text>
                  <Text style={styles.eventPriceValue}>3,800.00 – 4,500.00</Text>
            </View>
            <View style={{justifyContent:'center', alignContent:'center'}}>
              <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}>Book Now</Text></Button>
            </View>
          </View>
        
    </View> 
    <View style={styles.destinationItem}>
        <View style={styles.destinationItemImage}>
          <Image
          style={styles.destinationItemImage}
          source={{uri: 'https://www.rudraxp.com/wp-content/uploads/2015/11/Sham-e-Banaras-Rudra_01.jpg'}}/>
          </View>
          <View style={styles.ItemButton} >
                <View style={styles.rightBox}>
                      <Text style={styles.eventTitle}>Pub Hopping</Text>
                      <Text style={styles.eventPlace}>Place: (New Delhi)</Text>
                      <Text style={styles.eventPrice}>Price:(in INR)</Text>
                      <Text style={styles.eventPriceValue}>2,000.00 – 3,500.00</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center'}}>
                  <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}>Book Now</Text></Button>
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
                <View style={styles.rightBox}>
                      <Text style={styles.eventTitle}>Ghungroo – Country’s only Dinner Theatre</Text>
                      <Text style={styles.eventPlace}>Place: (New Delhi)</Text>
                      <Text style={styles.eventPrice}>Price:(in INR)</Text>
                      <Text style={styles.eventPriceValue}>3,000.00 – 3,500.00</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center'}}>
                  <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}>Book Now</Text></Button>
                </View>
              </View>
    </View>
          <View style={styles.destinationItem}>
              <View style={styles.destinationItemImage}>
                <Image
                style={styles.destinationItemImage}
                source={{uri: 'https://storage.googleapis.com/ehimages/2018/6/4/img_399874620e07babb416b4f594d18cf89_1528117764888_processed_original.jpg'}}/>
                </View>
                <View style={styles.ItemButton} >
                <View style={styles.rightBox}>
                      <Text style={styles.eventTitle}>Sham e Mumbai</Text>
                      <Text style={styles.eventPlace}>Place: (Mumbai)</Text>
                      <Text style={styles.eventPrice}>Price:(in INR)</Text>
                      <Text style={styles.eventPriceValue}>4,500.00 – 9,500.00</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center'}}>
                  <Button style={styles.ItemButtonBox}><Text style={styles.ItemButtonText}>Book Now</Text></Button>
                </View>
              </View>
          </View>  
    </ScrollView> 
          </Body>
        </Container>
      );  
  }  
}  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 1,
    },
    datePickerBox:{
      marginTop: 9,
      borderColor: '#ABABAB',
      borderWidth: 0.5,
      padding: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      height: 38,
      justifyContent:'center'
    },
    datePickerText: {
      fontSize: 14,
      marginLeft: 5,
      borderWidth: 0,
      color: '#121212',
    },
    scrollView: {
      backgroundColor: '#222',
      marginHorizontal: 1,
    },
    textTitle:{
      fontSize:17,
      color:'#FFF',
      fontFamily:'Raleway-Bold'
    },

  destinationItem:{
    backgroundColor:'#FFF', 
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:5,
    borderBottomWidth:0.5,
    borderBottomColor:'#222'
  },
  destinationItemImage:{
    height:180, width:200
  },
  ItemButton:{
    backgroundColor:'#fff',
    height:180,
    width:200,
    padding:1
  },


  ItemButtonText:{
    fontSize:14,
    color:'#FFF',
    marginLeft:'20%'
  },
  ItemButtonBox:{
    backgroundColor:'#980000'
  },
  eventTitle:{
    fontWeight:'bold',
    fontSize:17,
    color:'#337ab7'
  },
  eventPlace:{
    fontSize:15, color:'tomato', fontWeight:'bold'
  },
  eventPrice:{
    fontSize:15, color:'#222', fontWeight:'bold'
  },
  eventPriceValue:{
    fontSize:16, 
    color:'#222', 
    fontWeight:'bold'
  },
  rightBox:{
   justifyContent:'space-between',
   flex: 1,
   flexDirection:'column',
   margin:10
  }

});