import React from 'react';

import Register from './Screens/Auth/Register';
import Login from './Screens/Auth/Login';
import Home from './Screens/Home';
import Chat from './Screens/Home/Chat/Chat';
import Status from './Screens/Home/Status';
import Feed from './Screens/Home/Feed/Feed';
import CountScreen from './Screens/CountScreen';
import SplashScreen from './Screens/Ecommerce/SplashScreen';
import shop from './Screens/Ecommerce/Shop';
import DashBoard from './Screens/Ecommerce/DashBoard';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import ProductDetails from './Screens/Ecommerce/ProductDetails';
import Wishlist from './Screens/Ecommerce/Wishlist';
import Account from './Screens/Ecommerce/Account';
import Cart from './Screens/Ecommerce/Cart';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import Checkout from './Screens/Ecommerce/Checkout';

const Route = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Splash" component={SplashScreen} hideNavBar={true} />
        <Scene key="login" component={Login} hideNavBar={true} />
        <Scene key="register" component={Register} hideNavBar={true} />

        <Scene
          key="DashBoard"
          initial
          component={DashBoard}
          hideNavBar={true}
        />
        <Scene
          key="productDetails"
          component={ProductDetails}
          hideNavBar={true}
        />

        <Scene
          tabs={true}
          icon={shopIcon}
          safeAreaInsert={{bottom: 'never'}}
          tabBarPosition={'bottom'}
          hideNavBar={true}
          tabBarOptions={{showLabel: false}}>
          <Scene
            key="shopLogIn"
            component={shop}
            hideNavBar={true}
            title={'Product'}
          />
          <Scene
            key="WishList"
            component={Wishlist}
            hideNavBar={true}
            title={'Wish'}
            showLabel={false}
          />
          <Scene
            key="Account"
            component={Account}
            hideNavBar={true}
            title={'Account'}
          />
          <Scene key="Cart" component={Cart} hideNavBar={true} title={'Cart'} />
        </Scene>

        <Checkout key="Checkout" component={Checkout} hideNavBar={true} />
        {/* <Scene
          key="tabs"
          initial
          tabs={true}
          icon={tabBar}
          safeAreaInsert={{bottom: 'never'}}
          tabBarPosition={'bottom'}
          hideNavBar={true}>
          <Scene
            key="chat"
            title={'Chat'}
            component={Chat}
            hideNavBar={true}
            //  icon={chatIcon}
          />
          <Scene
            key="status"
            title={'Status'}
            component={Status}
            hideNavBar={true}
            // icon={statusIcon}
          />
          <Scene
            key="feed"
            title={'Feed'}
            component={Feed}
            hideNavBar={true}
            // icon={feedIcon}
          />
          <Scene
            key="Count"
            title={'Count'}
            component={CountScreen}
            hideNavBar={true}
          />

          <Scene
            key="Shop"
            title={'Shop'}
            component={SplashScreen}
            hideNavBar={true}
          />
        </Scene> */}
      </Stack>
    </Router>
  );
};

// const tabBar = ({focused, title}) => {
//   var color = focused ? 'blue' : 'grey';

//   switch (title) {
//     case 'Chat':
//       return (
//         <View style={{alignItems: 'center'}}>
//           <Feather name={'home'} color={color} size={15} />
//         </View>
//       );

//     case 'Status':
//       return (
//         <View>
//           <Feather name={'coffee'} color={color} size={15} />
//         </View>
//       );

//     case 'Feed':
//       return (
//         <View>
//           <Feather name={'facebook'} color={color} size={15} />
//         </View>
//       );

//     case 'Count':
//       return (
//         <View>
//           <Feather name={'layers'} color={color} size={15} />
//         </View>
//       );
//     case 'Shop':
//       return (
//         <View>
//           <Feather name={'shopping-cart'} color={color} size={15} />
//         </View>
//       );
//   }
// };

const shopIcon = ({focused, title}) => {
  var color = focused ? 'blue' : 'grey';

  switch (title) {
    case 'Wish':
      return (
        <View>
          <Entypo name="heart" size={17} color={color} />
        </View>
      );
    case 'Product':
      return (
        <View>
          <Entypo name="home" size={17} color={color} />
        </View>
      );
    case 'Account':
      return (
        <View>
          <FontAwesom name="user-o" size={14} color={color} />
        </View>
      );
    case 'Cart':
      return (
        <View>
          <Feather name="shopping-cart" size={16} color={color} />
        </View>
      );
    default:
      return null;
  }
};

// const chatIcon = ({Focused}) => {
//   var color = Focused ? 'red' : 'grey';
//   return (
//     <View>
//       <Feather name={'home'} color={color} />
//     </View>
//   );
// };

// const statusIcon = () => {
//   return (
//     <View>
//       <Feather name={'coffee'} />
//     </View>
//   );
// };

// const feedIcon = () => {
//   return (
//     <View>
//       <Feather name={'compass'} />
//     </View>
//   );
// };

export default Route;
