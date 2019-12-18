import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground,Image} from 'react-native';
import global from '../../global/styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    Container,
    Content,
    Text,
    View,
} from 'native-base';
import styles from './styles';

class CalendarPage extends Component {
    render() {
        return (
          <Container>
              <Content>
                  <ImageBackground source={require('../../images/January.png')} style={global.backgroundImage}
                                   imageStyle={{borderRadius: 40}}>
                      <Calendar style={styles.calendar}
                                theme={{
                                    calendarBackground: 'rgba(0,0,0,0)',
                                    textSectionTitleColor: '#75ff58',
                                    dayTextColor: 'white',
                                    todayTextColor: '#57b1ff',
                                    selectedDayTextColor: '#ffe663',
                                    monthTextColor: '#ffcc83',
                                    indicatorColor: '#f470ff',
                                    selectedDayBackgroundColor: '#050507',
                                    arrowColor: '#8f68ff',
                                    textDisabledColor: '#7b7b7b',
                                    'stylesheet.calendar.header': {
                                        week: {
                                            marginTop: 10,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }
                                    }
                                }}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => {
                            console.log('selected day', day);
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => {
                            console.log('month changed', month);
                        }}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={false}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={false}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                      />
                      <View style={global.bottomView}>
                          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                              <Image source={require('../../images/Backarrowtest.png')} style={styles.bottomBtn} >
                              </Image>
                          </TouchableOpacity>
                          <View style={{flex:2}}/>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Information')}>
                              <Image source={require('../../images/infotest.png')} style={styles.bottomBtn} >
                              </Image>
                          </TouchableOpacity>
                      </View>
                  </ImageBackground>
              </Content>
          </Container>
        );
    }
}

export default CalendarPage;
