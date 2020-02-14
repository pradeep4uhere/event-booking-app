import React from "react";
import { View, Text, Button } from "react-native";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../Components/home/home"
import Homepage from "../Components/home/homepage"
import EventList from "../Components/home/EventList"
import Login from "../Components/login/login"
import Register from "../Components/login/register"
import CartPage from "../Components/home/CartPage"

import ForgotPassword from '../Components/login/forgotpassword';
import Profile from '../Components/User/profile';
import TermsAndConditions from '../Components/other/termsandconditions';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Homepage: {screen: Homepage},
    EventList: {screen: EventList},
    Login: {screen: Login},
    CartPage: {screen: CartPage},
    Register: {screen: Register},
    ForgotPassword:{screen: ForgotPassword},
    Profile:{screen: Profile},
    TermsAndConditions:{screen: TermsAndConditions},
},
{
initialRouteName: "Home",
headerMode: "none",
swipeEnabled: false
});
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;
