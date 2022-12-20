import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Content
import Noodles from './Noodles';
import History from './History';
import Category from './Category';
import Product from './Product';
import User from './User';

const BottomNavigator = createBottomTabNavigator({

  Noodles: {
    screen: Noodles,
    navigationOptions: {
      tabBarLabel: 'Noodles'
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      tabBarLabel: 'Product',
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: 'Category',
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: 'Profile',
    }
  },
},{
  //router config
  initialRouteName: 'Noodles',
  main: ['Noodles','Product','Category','History','User'],
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused}) => {
      const { routeName } = navigation.state;
      let focus = focused ? {width: 30, height: 30} : {width: 26, height: 26};
      let sourceImage;
      if (routeName === 'Noodles') {
        sourceImage = focused ? require('../assets/icon/cart-actived.png') : require('../assets/icon/cart.png');
      } else if (routeName === 'Product') {
        sourceImage = focused ? require('../assets/icon/product-actived.png') : require('../assets/icon/product.png');
      } else if (routeName === 'Category') {
        sourceImage = focused ? require('../assets/icon/category-actived.png') : require('../assets/icon/category.png');
      } else if (routeName === 'User') {
        sourceImage = focused ? require('../assets/icon/user-actived.png') : require('../assets/icon/user.png');
      } else {
        sourceImage = focused ? require('../assets/icon/history-actived.png') : require('../assets/icon/history.png');
      }

      return <Image style={focus} source={sourceImage} />;
    },
    tabBarOptions: {
      activeTintColor: '#43AB4A',
      inactiveTintColor: '#545454',
      style: {
        borderTopWidth: 0,
        backgroundColor: '#FFFFFF',
        paddingBottom: 5,
      },
    },
  }),
})

const TabNavigation = createAppContainer(BottomNavigator);
export default TabNavigation;
