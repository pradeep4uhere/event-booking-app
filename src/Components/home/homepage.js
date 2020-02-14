import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import HomeSlider from './HomeSlider';
import PopularEvent from './PopularEvent';
import PopularViedos from './PopularViedos';
import PopularDestination from './PopularDestination';
import PopularTravel from './PopularTravel';
import Footer from './Footer';
export default class HomepageScreen extends Component {
    constructor(props) {
        super(props);
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
  <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
</Right>
</Header>
<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Container style={{height: '50%'}}>
        <View  style={{width: '100%'}}>
        
          <HomeSlider />
        </View>
        <View  style={{width: '100%',marginTop:15,height:280,marginBottom:25,}}>
          <PopularEvent/>
        </View>
        <View  style={{width: '100%',marginTop:15,height:280,marginBottom:25,}}>
          <PopularDestination/>
        </View>
        <View  style={{width: '100%',marginTop:15,height:280,marginBottom:25,}}>
          <PopularTravel/>
        </View>
        <View  style={{width: '100%',marginTop:15,height:200,marginBottom:1,}}>
          <PopularViedos/>
        </View>
        <Footer/>
        </Container>
      </ScrollView>
    </SafeAreaView>
</Container>
);
}
}
