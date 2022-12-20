import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Main from '../screens/Main';
import CobaTab from '../screens/CobaTab';
import AddProduct from '../screens/AddProduct';
import EditProduct from '../screens/EditProduct';
import AddCategory from '../screens/AddCategory';
import EditCategory from '../screens/EditCategory';
import Cart from '../screens/Cart';

const StackAuth = createStackNavigator(
    {
      Login,
      Signup,
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    }
);


const StackHome = createStackNavigator(
    {
      Main,
      CobaTab,
      AddProduct,
      AddCategory,
      EditProduct,
      EditCategory,
      Cart
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
    }
);

const Router = createSwitchNavigator(
    {
      StackAuth,
      StackHome,
    },
    {
      initialRouteName: 'StackHome',
      headerMode: 'none',
    }
);



export default createAppContainer(Router);
