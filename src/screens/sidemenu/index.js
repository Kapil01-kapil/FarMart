//TODO:- imports
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import AssetsImages from '../../res';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import LinearGradient from 'react-native-linear-gradient';

// import { StackActions, NavigationActions } from "@react-navigation/native";
//TODO:- Sidemenu class
class Sidemenu extends Component {
  //TODO:- constructor
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      sideMenuBtnList: [
        {
          title: 'Service',
          isSelected: true,
          index: 0,
        },
        {
          title: 'Profile',
          isSelected: false,
          index: 1,
        },
        {
          title: 'Order History',
          isSelected: false,
          index: 2,
        },
        {
          title: 'Membership',
          isSelected: false,
          index: 3,
        },
        {
          title: 'Help',
          isSelected: false,
          index: 4,
        },
      ],
      selected_sub_category: '',
    };
  }

  //TODO:- class life cycle

  render() {
    return (
      <LinearGradient colors={['#FF881C', '#FB5E2D']} style={{flex: 1}}>
        <SafeAreaView style={styles.main_container}>
          <View style={styles.container}>
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                backgroundColor: '#00000000',
                marginTop: 16,
                flexDirection: 'row',
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowColor: 'rgba(0,0,0,0.8)',
                shadowOpacity: 0.2,
                shadowRadius: 20,
              }}
              onPress={() => {
                this.props.navigation.closeDrawer();
              }}>
              <Image
                source={AssetsImages.icon_close}
                style={{height: 25, width: 25, resizeMode: 'contain'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                marginLeft: 25,
                width: '30%',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
              onPress={() => {}}>
              <Text style={{color: '#fff', fontSize: 15}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//  // user_data_clear_data: () => dispatch(user_data_clear_data()),
// });

export default Sidemenu;
