import React from 'react';
import { Text } from 'react-native'
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {NavigationState} from 'react-native-tab-view';
import SplashScreen from 'react-native-splash-screen'

import { getActiveRouteName, NavigationRef } from '../utils'

import Category from '../pages/Category';


export type RootStackParamList = {
    BottomTabs: {
      screen?: string;
    };
    Category: undefined;
    Album: {
      item: {
        id: string;
        title: string;
        image: string;
      };
      opacity?: Animated.Value;
    };
  };
  
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
  
const Stack = createStackNavigator<RootStackParamList>();

function RootStackScreen() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{
                headerTitle: '首页',
                }}
            />
            <Stack.Screen
                name="Category"
                component={Category}
                options={{
                headerTitle: '分类',
                }}
            />
      </Stack.Navigator>
    )
}

export type ModalStackParamList = {
    Root: undefined;
    Detail: {
      id: string;
    };
    Login: undefined;
};

const ModalStack = createStackNavigator<ModalStackParamList>();

export type ModalStackNavigation = StackNavigationProp<ModalStackParamList>;

function ModalStackScreen() {

    return(
        <ModalStack.Navigator
            mode="modal"
            headerMode="screen"
        >
            <ModalStack.Screen
                name="Root"
                component={RootStackScreen}
                options={{headerShown: false}}
            />
        </ModalStack.Navigator>
    )
}

class Navigator extends React.Component {
    state = {
        routeName: 'Root',
    };

    componentDidMount() {
        SplashScreen.hide()
    }
    
    onStateChange = (state: NavigationState | undefined) => {
        if (typeof state !== 'undefined') {
            const routeName = getActiveRouteName(state);
            this.setState({
            routeName,
            });
        }
    };

    render(){
        return (
            <NavigationContainer
                ref={NavigationRef}
                onStateChange={this.onStateChange}
            >
                <ModalStackScreen />
            </NavigationContainer>
        )
    }
}

export default Navigator