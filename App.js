import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer , createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';


import  HomePage from "./pages/HomePage";
import  ProfilePage  from "./pages/ProfilePage";
import DetailPage from './pages/DetailPage';

const HomeStack = createStackNavigator({
  Home: HomePage,
  Details: DetailPage,
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


const TabNavigator = createBottomTabNavigator(
  {

  Home: {
    screen: HomeStack,

    navigationOptions: {
      tabBarLabel:"Home Page",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30}/>
      )
    },
  },
},
{
  order: ['Home'],
  tabBarOptions: {
    activeTintColor: '#ffa500',
    inactiveTintColor: 'gray',
    showIcon: true,
    style: {
      backgroundColor: 'white',
    }
  },
},
);



export default createAppContainer(TabNavigator);