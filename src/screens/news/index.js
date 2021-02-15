import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Keyboard,
  Linking,
  TouchableNativeFeedback,
} from 'react-native';

import {Button, Card, Divider} from 'react-native-elements';
import BtnWithImage from '../../components/btn_with_image';
import AssetsImages from '../../res';
import SafeAreaContainer from '../../components/safearea_container';
import styles from './styles';
import HeaderTxt from '../../components/header_txt';

import {connect} from 'react-redux';
import {news_clear_data, news} from '../../redux/actions';
import Loader from '../../components/loader';
import moment from 'moment';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      bodyTxt: '',
      isPopUpOpened: false,
      loading: false,

      order_list: [],
      isApiCalled: false,
    };
  }

  //TODO:- class life cycle
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: 'NEWS',
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 26,
        fontFamily: 'Avenir',
        alignSelf: 'center',
      },
      headerLeft: () => (
        <BtnWithImage
          img={AssetsImages.icon_sidemenu}
          btnImgStyle={{height: 22, width: 22}}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          btnStyle={{marginLeft: 8}}
        />
      ),
      headerRight: () => (
        <BtnWithImage
          img={AssetsImages.icon_chat}
          btnImgStyle={{height: 18, width: 18}}
          onPress={() => {
            // this.props.navigation.openDrawer();
          }}
          btnStyle={{marginRight: 8}}
        />
      ),
    });

    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.onFocus();
    });
  }

  onFocus = () => {
    this.props.news();
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    if (this.props.is_fetching !== prevProps.is_fetching) {
      if (this.props.is_fetching) {
        if (!this.state.isApiCalled) {
          this.setState({loading: true});
        }
      } else if (!this.props.is_fetching) {
        this.setState({loading: false, isApiCalled: true});
      }
    }

    if (this.props.is_success !== prevProps.is_success) {
      if (this.props.is_success == true) {
        console.log('success => ' + JSON.stringify(this.props.news_data));
        this.setState({order_list: this.props.news_data});
        this.props.news_clear_data();
      }
    }
  }

  orderHeader = () => {
    return (
      <View style={{width: '100%'}}>
        <HeaderTxt title={'All Orders'} marginTop={30} />
      </View>
    );
  };

  render() {
    // const {
    //   title,
    //   description,
    //   publishedAt,
    //   source,
    //   urlToImage,
    //   url,
    // } = this.props.article;

    // const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
    return (
      <SafeAreaContainer
        title={this.state.title}
        bodyTxt={this.state.bodyTxt}
        isModalOpened={this.state.isPopUpOpened}
        onDismiss={() => {
          this.setState({isPopUpOpened: false});
        }}>
        <Loader loading={this.state.loading} />
        <Text>hjkj,</Text>
        <View style={styles.container}>
          {this.state.order_list.length != 0 ? (
            <FlatList
              style={{width: '100%', marginTop: 5}}
              data={this.state.order_list}
              keyExtractor={(item, index) => index.toString()}
              // ListHeaderComponent={this.orderHeader()}
              renderItem={({item}) => {
                return (
                  <TouchableNativeFeedback
                    useForeground
                    onPress={() => Linking.openURL(item.url)}>
                    <Card
                      //featuredTitle={item.title}
                      featuredTitleStyle={styles.featuredTitleStyle}
                      // image={{
                      //   uri:
                      //     'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
                      // }}
                    >
                      <Text style={{marginBottom: 10}}>
                        {item.description || 'Read More..'}
                      </Text>
                      <Divider style={{backgroundColor: '#dfe6e9'}} />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.noteStyle}>
                          {item.source.name.toUpperCase()}
                        </Text>
                        <Text style={styles.noteStyle}>
                          {moment(item.time || moment.now()).fromNow()}
                        </Text>
                      </View>
                    </Card>
                  </TouchableNativeFeedback>
                );
              }}
            />
          ) : null}

          {this.state.order_list.length == 0 && !this.state.loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#80859F',
                  width: '90%',
                  fontWeight: 'bold',
                  fontFamily: 'Avenir',
                  textAlign: 'center',
                }}>
                You have not made any order yet
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  news: (request_data) => dispatch(news(request_data)),
  news_clear_data: () => dispatch(news_clear_data()),
});

const mapStateToProps = (state) => ({
  is_success: state.news.is_success,
  is_fetching: state.news.is_fetching,
  msg: state.news.msg,

  news_data: state.news.news_data,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
