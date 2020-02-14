import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight,ScrollView,TouchableOpacity } from 'react-native'
import { white } from 'ansi-colors';
export default class ContentContainer extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={styles.drawerTransparent} onPress={() => this.props.navigation.goBack()}>
                <TouchableOpacity activeOpacity={1} style={styles.drawer} disabled={false}>
                    <ScrollView>

                        <View style={styles.header}>
                            
                            <Text style={[styles.text, {color: 'white'}]}>My Profile</Text>
                        </View>

                        <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'} onPress={() => this.props.navigation.navigate('Screen1')}>
                            <View style={styles.row}>
                                
                                <Text style={styles.text}>Contacts</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'} onPress={() => this.props.navigation.navigate('Screen2')}>
                            <View style={styles.row}>
                                
                                <Text style={styles.text}>Add Contact</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'} onPress={() => this.props.navigation.navigate('Screen3')}>
                            <View style={styles.row}>
                                
                                <Text style={styles.text}>Add Group</Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});