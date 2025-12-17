import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';



import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

export type RoutesStackParamList = {
  Landing: undefined;
  GiveClasses: undefined;
  StudyTabs: undefined;
  Study: undefined;
};
export type NavigationProp = StackNavigationProp<RoutesStackParamList>;

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
   <Navigator
      initialRouteName="TeacherList"
    screenOptions = {{
      headerShown: false, 
      tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
    },
    tabBarItemStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarLabelStyle: {
      fontFamily: 'Archivo_700Bold',
      fontSize: 13,
      marginLeft: 16,
    },
    tabBarInactiveBackgroundColor: '#fafafc',
    tabBarActiveBackgroundColor: '#ebebf5',
    tabBarInactiveTintColor: '#c1bccc',
    tabBarActiveTintColor: '#32264d',
}}
>
    <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: (({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? "easel" : "easel-outline"}
                size={size}
                color={color}
              />
            );
          }),
        }}
      />
   <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: (({ color, size, focused }) => { 
            return (
              <Ionicons 
                name={focused ? 'heart' : 'heart-outline'} 
                size={size} 
                color={color} 
              />
            );
          }),
        }}
/>
    </Navigator>
  );
}

export default StudyTabs;