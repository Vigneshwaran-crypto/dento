import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from './././../../Common/colors';
import Feather from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import {
  textFontFaceLight,
  textFontFaceMedium,
  textFontFaceSemiBold,
} from '../../Common/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const DashBoard = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView style={styles.parentScrollView}>
        <View style={styles.topBar}>
          <View style={styles.layerImage}>
            <Image
              source={require('../../../Assets/box2.png')}
              style={styles.box1}
            />
            <Image
              source={require('../../../Assets/box1.png')}
              style={styles.box2}
            />
          </View>
          <Text style={styles.sweavaText}>Sweava</Text>
          <Entypo
            name="menu"
            size={30}
            color={'grey'}
            style={styles.menuLogo}
          />
        </View>

        <View style={styles.middleView}>
          <Text style={styles.middleViewText}>
            Shopping App for {'\n'}
            Gadgets and Gifts
          </Text>

          <Text style={styles.offerText}>
            Get 10% off your first order {'\n'}
            when you spend over £40{'\n'} {'        '}on any product!
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTextDownload}>Download App</Text>
        </TouchableOpacity>

        <View style={styles.images}>
          <Image
            style={styles.roseRound}
            source={require('../../../Assets/roseround.png')}
          />
          <Image
            style={styles.plant}
            source={require('../../../Assets/plant.png')}
          />
          <Image
            style={styles.girl}
            source={require('../../../Assets/girl.png')}
          />

          <Image
            style={styles.backgroundImage}
            source={require('../../../Assets/halfRound.png')}
          />
          <Image
            style={styles.yellowRound}
            source={require('../../../Assets/yellowround.png')}
          />
        </View>

        <View style={styles.screen2}>
          <Text style={styles.screen2Heading}>How the app works</Text>
          <Text style={styles.createAccText}>Create an account</Text>
          <Text style={styles.discoverOrgText}>
            Discover original {'\n      '} products
          </Text>

          <Text style={styles.offerScreen2Text}>
            There are more than 950{'\n '}categories updated daily{'\n'}based on
            trending websites{'\n  '}reviews an users rating.
          </Text>

          <View style={styles.screen2Images}>
            <Image
              style={styles.triangle}
              source={require('../../../Assets/triangle.png')}
            />
            <Image
              style={styles.splashScreen}
              source={require('../../../Assets/splashscreen.png')}
            />
            <Image
              style={styles.triangleLower}
              source={require('../../../Assets/triangleLower.png')}
            />
          </View>
        </View>
        <View style={styles.screen3}>
          <Text style={styles.screen3Heading}>Experience</Text>
          <Text style={styles.screen3Heading2}>Products in AR</Text>
          <Text style={styles.screen3Offers}>
            {'               '}
            Have you tried {'\n       '} Augmented Reality? Stop {'\n      '}{' '}
            looking at boring galleries
            {'\n'} and start experiences each item.
          </Text>
          <View style={styles.screen3Images}>
            <Image
              style={styles.roseRoundBig}
              source={require('../../../Assets/roseRoundBig.png')}
            />
            <Image
              style={styles.screen3outline}
              source={require('../../../Assets/screen3outline.png')}
            />
            <Image
              style={styles.screen3Screen}
              source={require('../../../Assets/screen3.png')}
            />
          </View>
        </View>

        <View style={styles.screen4}>
          <Text style={styles.screen4Heading}>Original platform</Text>
          <Text style={styles.screen4SubHeading}>
            {'\n  '}Hottest deals{'\n'}Around the web
          </Text>
          <Text style={styles.screen4Offers}>
            find the perfect gift or {'\n     '}everyday goods {'\n'} right at
            your fingertip
          </Text>

          <View style={styles.screen4Images}>
            <Image
              style={styles.triangle}
              source={require('../../../Assets/triangle.png')}
            />
            <Image
              style={styles.screen4outline}
              source={require('../../../Assets/screen3outline.png')}
            />
            <Image
              style={styles.splashScreen}
              source={require('../../../Assets/image4.png')}
            />
            <Image
              style={styles.triangleLower}
              source={require('../../../Assets/triangleLower.png')}
            />
          </View>
        </View>
        <View style={styles.screen5}>
          <Text style={styles.screen5Heading}>
            {'\n     '}Save time & {'\n    '} money with {'\n'} exclusive offers
            {'\n  '}from top stores
          </Text>

          <Image
            style={styles.screen5Image}
            source={require('../../../Assets/fullbg.png')}
          />
        </View>
        <View style={styles.screen6}>
          <Text style={styles.screen4SubHeading}>
            {'\n   '}Hey follow us on{'\n'}social media so you {'\n'}don't miss
            any offer.
          </Text>

          <View style={styles.screen6Images}>
            <Image
              style={styles.triangle6}
              source={require('../../../Assets/triangle.png')}
            />

            <Image
              style={styles.youtube}
              source={require('../../../Assets/youtube.png')}
            />
            <Image
              style={styles.facebook}
              source={require('../../../Assets/facebook.png')}
            />
            <Image
              style={styles.twitter}
              source={require('../../../Assets/twitter.png')}
            />
            <Image
              style={styles.fallingBoy}
              source={require('../../../Assets/fallingboy.png')}
            />
            <Image
              style={styles.triangleLower6}
              source={require('../../../Assets/triangleLower.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

{
  /* <View style={styles.start}>
        <TouchableOpacity onPress={startBt}>
          <Text style={styles.starttxt}>
            Start <Feather name="arrow-right" size={20} />
          </Text>
        </TouchableOpacity>
      </View> */
}
// const startBt = () => {
//   Actions.login();
// };
// start: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   backgroundColor: colors.baseBackground,
//   height: 30,
//   width: 100,
//   borderRadius: 8,
//   alignSelf: 'center',
//   marginTop: 60,
// },
// starttxt: {
//   color: colors.white,
//   fontSize: 20,
// },

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    height: height,
    width: width,
  },
  topBar: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  layerImage: {margin: 10},
  box1: {
    margin: 5,
  },
  box2: {
    position: 'absolute',
  },
  sweavaText: {
    color: colors.black,
    fontFamily: textFontFaceMedium,
    fontSize: 25,
    marginStart: -220,
  },
  menuLogo: {
    alignSelf: 'center',
    margin: 5,
  },
  middleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  middleViewText: {
    fontSize: 35,
    fontFamily: textFontFaceMedium,
    color: colors.black,
  },
  offerText: {
    fontFamily: textFontFaceLight,
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: colors.baseBackground,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  buttonTextDownload: {
    color: colors.white,
    fontSize: 20,
    fontFamily: textFontFaceSemiBold,
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  backgroundImage: {
    alignSelf: 'flex-end',
    marginEnd: -20,
  },
  girl: {
    position: 'absolute',
    zIndex: 2,
  },
  roseRound: {
    marginEnd: 240,
    marginBottom: -90,
  },
  plant: {
    position: 'absolute',
    zIndex: 3,
    alignSelf: 'flex-start',
  },
  yellowRound: {
    marginTop: -120,
    marginEnd: 30,
  },
  screen2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  screen2Heading: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
  },
  createAccText: {
    color: colors.lightBlue,
    fontFamily: textFontFaceSemiBold,
    fontSize: 20,
    marginTop: 35,
  },
  discoverOrgText: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
    marginTop: 30,
  },
  screen2Images: {
    marginTop: 70,
  },
  offerScreen2Text: {
    color: colors.grey,
    fontFamily: textFontFaceLight,
    fontSize: 20,
    marginTop: 30,
  },
  triangle: {
    position: 'absolute',
    zIndex: 2,
    marginStart: -80,
    marginTop: -70,
  },
  triangleLower: {
    zIndex: 3,
    alignSelf: 'flex-end',
    marginTop: -100,
    marginEnd: -50,
  },
  screen3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen3Heading: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
  },
  screen3Heading2: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
  },
  screen3Offers: {
    fontFamily: textFontFaceLight,
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
  },
  screen3Images: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  screen3Screen: {
    position: 'absolute',
  },
  screen3outline: {
    position: 'absolute',
  },
  screen4: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 100,
  },
  screen4Heading: {
    color: colors.blue33,
    fontFamily: textFontFaceSemiBold,
    fontSize: 20,
    marginTop: 35,
  },
  screen4SubHeading: {
    color: colors.black,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
  },
  screen4Offers: {
    fontFamily: textFontFaceLight,
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
  },
  screen4Images: {
    marginTop: 40,
  },
  screen4outline: {
    position: 'absolute',
    zIndex: 0,
    marginStart: -50,
    marginTop: -30,
  },
  screen5: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.gradientColor,
  },
  screen5Heading: {
    color: colors.blue33,
    fontFamily: textFontFaceSemiBold,
    fontSize: 30,
    marginTop: 35,
  },
  screen6: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  screen6Images: {},
  triangle6: {
    position: 'absolute',
    marginStart: 300,
  },
  fallingBoy: {},
  triangleLower6: {
    position: 'absolute',
    marginTop: 200,
  },
  youtube: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 110,
    marginStart: 40,
  },
  facebook: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 125,
    marginStart: 90,
  },
  twitter: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 140,
    marginStart: 130,
  },
});
export default DashBoard;
