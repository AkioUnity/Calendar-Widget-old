import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, Image, FlatList, Linking,SafeAreaView} from 'react-native';
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
        image: require('../../images/album/01_January.png'),
    },
    {
        id: 'FEBRUARY',
        image: require('../../images/album/01_January-1.png'),
    },
    {
        id: 'MARCH',
        image: require('../../images/album/01_January-2.png'),
    },
    {
        id: 'APRIL',
        image: require('../../images/album/01_January-3.png'),
    },
    {
        id: 'MAY',
        image: require('../../images/album/01_January-4.png'),
    },
    {
        id: 'JUNE',
        image: require('../../images/album/01_January-5.png'),
    },
    {
        id: 'JULY',
        image: require('../../images/album/01_January-6.png'),
    },
    {
        id: 'AUGUST',
        image: require('../../images/album/01_January-7.png'),
    },
    {
        id: 'SEPTEMBER',
        image: require('../../images/album/01_January-8.png'),
    },
    {
        id: 'OCTOBER',
        image: require('../../images/album/01_January-9.png'),
    },
    {
        id: 'NOVEMBER',
        image: require('../../images/album/01_January-10.png'),
    },
    {
        id: 'DECEMBER',
        image: require('../../images/album/01_January-11.png'),
    },
];

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
        };
    }
    handleClick = (index) => {
        this.setState({index: index});
    };

    render() {
        return (
          <Container style={styles.container}>
              <Content>
                  <View style={global.centerTitle}>
                      {this.state.index==-1?
                      <FlatList
                        data={DATA}
                        renderItem={({item,index}) => (
                          <TouchableOpacity onPress={() => this.handleClick(index)}>
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
                      :<TouchableOpacity onPress={() => this.handleClick(-1)}>
                        <Image source={DATA[this.state.index].image}  style={styles.bigImage}/>
                            <Text style={styles.bigText}>
                                {DATA[this.state.index].id}
                            </Text>
                        </TouchableOpacity>
                      }
                  </View>
              </Content>
          </Container>

        );
    }
}

export default Album;
