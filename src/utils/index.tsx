import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import {NavigationState} from 'react-native-tab-view';


function getActiveRouteName(state: NavigationState) {
    let route;
    route = state.routes[state.index];
    while (route.state && route.state.index) {
        route = route.state.routes[route.state.index];
    }
    return route.name;
}

const NavigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  NavigationRef.current?.navigate(name, params);
}

function goBack() {
  NavigationRef.current?.goBack();
}


export {
    getActiveRouteName,
    NavigationContainerRef,
    NavigationRef,
    navigate,
    goBack
}