import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import ScreenA from '../User/profile';
import ScreenB from '../User/profileScreen';
import ScreenC from '../User/settingScreen';
import drawerContentComponents from '../SideBar/drawerContentComponents';
export const DrawerNav = DrawerNavigator (
    {
        ScreenA:{ screen: ScreenA },
        ScreenB:{ screen: ScreenB },
        ScreenC:{ screen: ScreenC }
    },
    {
       contentComponent: drawerContentComponents
    });