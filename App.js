import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer , createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';


import  HomePage from "./pages/HomePage";
import DetailPage from './pages/DetailPage';
import NewScreen from "./pages/NewScreen";
import HotPage from "./pages/HotPage";

console.disableYellowBox = true;

const HomeStack = createStackNavigator({
  Home: HomePage,
  Details: DetailPage,
});
const HotStack = createStackNavigator({
  Hot: HotPage,
  Details: DetailPage,
});

const NewsStack = createStackNavigator({
  News: NewScreen,
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
      tabBarLabel:"Top",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="notification" size={30}/>
      )
    },
  },
    Hot: {
      screen: HotStack,

      navigationOptions: {
        tabBarLabel:"News",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="heart" size={30}/>
        )
      },
    },
    News: {
      screen: NewsStack,

      navigationOptions: {
        tabBarLabel:"News",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="eye" size={30}/>
        )
      },
    }

},
{
  order: ['Home','Hot','News'],
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
