import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, Image, FlatList,Linking} from 'react-native';
import global from '../../global/styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    Container,
    Content,
    Text,
    View,
} from 'native-base';
import styles from './styles';

const DATA = [
    {
        id: 'JANUARY',
        image: require('../../images/information/Icon_Facebook.png'),
        url: 'fb://page/kaybearcosplay',
    },
    {
        id: 'FEBRUARY',
        image: require('../../images/information/Icon_Instagram.png'),
        url: 'https://www.instagram.com/kayyybear/',
    },
    {
        id: 'MARCH',
        image: require('../../images/information/Icon_Twitter.png'),
        url: 'https://www.twitter.com/kayyybearxo',
    },
    {
        id: 'Patren',
        image: require('../../images/information/Icon_Patreon.png'),
        url: 'https://www.patreon.com/kayyybear',
    },
    {
        id: 'Gumroad',
        image: require('../../images/information/Icon_Gumroad.png'),
        url: 'https://www.gumroad.com/kayyybear',
    },
    {
        id: 'Shopify',
        image: require('../../images/information/Icon_Shopify.png'),
        url: 'https://www.kaybear.shop',
    },
    {
        id: 'OnlyFans',
        image: require('../../images/information/Icon_OnlyFans.png'),
        url: 'https://www.onlyfans.com/kayyybear',
    },
    {
        id: 'Youtube',
        image: require('../../images/information/Icon_Youtube.png'),
        url: 'https://www.youtube.com/kaybear',
    },
    {
        id: 'Twitch',
        image: require('../../images/information/Icon_Twitch.png'),
        url: 'https://www.twitch.tv/kayyybear',
    },
];

class Album extends Component {
    handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " +url);
            }
        });
    };
    render() {
        return (
          <Container style={styles.container}>
              <Content>
                  <ImageBackground source={require('../../images/information/information.png')}
                                   style={global.informationImage}
                                   imageStyle={{borderRadius: 40}}>
                      <View style={global.informationBottom} >
                          <FlatList
                            data={DATA}
                            renderItem={({item}) => (
                              <TouchableOpacity onPress={() => this.handleClick(item.url)}>
                              <View style={{flex: 1, flexDirection: 'column'}}>
                                  <Image style={styles.imageThumbnail} source={item.image}/>
                                  <Text style={styles.itemText}>
                                      {item.id}
                                  </Text>
                              </View>
                              </TouchableOpacity>
                            )}
                            //Setting the number of column
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                          />
                          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                              <Image source={require('../../images/information/albumtest.png')} style={styles.bottomBtn}>
                              </Image>
                          </TouchableOpacity>
                      </View>
                  </ImageBackground>
              </Content>
          </Container>
        );
    }
}

export default Album;
