import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, Image, FlatList,Linking} from 'react-native';
import global from '../../global/styles';
import { WebView } from 'react-native-webview';
import {
    Container,
    Content,
    Text,
    View,
} from 'native-base';
import styles from './styles';

const DATA = [
    {
        id: 'Facebook',
        image: require('../../images/information/Icon_Facebook.png'),
        url: 'fb://page/kaybearcosplay',
    },
    {
        id: 'Instagram',
        image: require('../../images/information/Icon_Instagram.png'),
        url: 'https://www.instagram.com/kayyybear/',
    },
    {
        id: 'Twitter',
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

class Information extends Component {
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
        let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
        let source = JS + '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';

        return (
          <Container style={styles.container}>
              <Content contentContainerStyle={{flex:1}}>
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
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Album')}>
                              <Image source={require('../../images/information/albumtest.png')} style={styles.bottomBtn}>
                              </Image>
                          </TouchableOpacity>
                      </View>
                  </ImageBackground>
              <WebView
                source={{ uri: 'https://twitter.com/kayyybearxo' }}
                style={{ marginTop: 10,borderRadius:10 }}
              />
              </Content>
          </Container>
        );
    }
}

export default Information;
