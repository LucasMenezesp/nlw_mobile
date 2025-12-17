import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import Landing from '../pages/landing';
import GiveClasses from '../pages/landing/GiveClasses';
import StudyTabs from './StudyTabs';

export type RoutesStackParamList = {
  Landing: undefined;
  GiveClasses: undefined;
  StudyTabs: undefined;
  Study: undefined;
};

const { Navigator, Screen } = createStackNavigator<RoutesStackParamList>();

export type AppNavigationProp = StackNavigationProp<RoutesStackParamList>;


function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="StudyTabs" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;