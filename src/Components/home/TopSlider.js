import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
export default class TopSlider extends Component {
        constructor(props) {
            super(props);
            this.state = {
              position: 2,
              interval: null,
              arrowSize:1,
              dataSource: [
                {
                  title: 'Pub Hopping',
                  caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
                  url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Ghungroo_Delhi_Rudra_01.jpg',
                  
                  
                }, {
                  title: 'Sham e Banaras',
                  caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
                  url: 'https://www.rudraxp.com/wp-content/uploads/2019/05/Day-tour-india_home_Rudra_ladakh.jpg',
                }, {
                  title: 'Sham e Dilli',
                  caption: 'How did it get so late so soon?”',
                  url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Mahak_rudraXp_H.jpg',
                },
              ],
            };
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
        <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    );
    }
    }
