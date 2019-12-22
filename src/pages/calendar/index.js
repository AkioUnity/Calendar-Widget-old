import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground,Image} from 'react-native';
import global from '../../global/styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import {Container, Content, Text, View} from 'native-base';
import styles from './styles';
import moment from 'moment';

const EVENT_TITLE = 'KayBear';
const TIME_NOW_IN_UTC = moment.utc();

const utcDateToString = (momentInUTC: moment): string => {
    let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return s;
};

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
                                    textMonthFontWeight:'500',
                                    textMonthFontSize:18,
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

                                markedDates={{
                                    '2019-12-16': {marked: true, selectedColor: 'blue'},
                                    '2019-12-17': {marked: true},
                                    '2019-12-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                                }}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => {
                            console.log('selected day', day);
                            // CalendarPage.addToCalendar('', day.timestamp);
                            CalendarPage.editCalendarEventWithId('70');

                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMM yyyy'}
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

    static addToCalendar = (title: string, startDateUTC: moment) => {

        const eventConfig = {
            title,
            startDate: utcDateToString(startDateUTC),
            endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
            notes: '',
            navigationBarIOS: {
                tintColor: 'orange',
                backgroundColor: 'green',
                titleColor: 'blue',
            },
        };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
          .then(
            (eventInfo: {
                calendarItemIdentifier: string,
                eventIdentifier: string,
            }) => {
                alert('a event added'+JSON.stringify(eventInfo));
                console.log(JSON.stringify(eventInfo));
            }
          )
          .catch((error: string) => {
              // handle error such as when user rejected permissions
              alert('Error -> ' + error);
          });
    };

    static editCalendarEventWithId = (eventId: string) => {
        const eventConfig = {
            eventId,
        };

        AddCalendarEvent.presentEventEditingDialog(eventConfig)
          .then(eventInfo => {
              alert('eventInfo -> ' + JSON.stringify(eventInfo));
          })
          .catch((error: string) => {
              alert('Error -> ' + error);
          });
    };

    static showCalendarEventWithId = (eventId: string) => {
        const eventConfig = {
            eventId,
            allowsEditing: true,
            allowsCalendarPreview: true,
            navigationBarIOS: {
                tintColor: 'orange',
                backgroundColor: 'green',
            },
        };

        AddCalendarEvent.presentEventViewingDialog(eventConfig)
          .then(eventInfo => {
              alert('eventInfo -> ' + JSON.stringify(eventInfo));
          })
          .catch((error: string) => {
              alert('Error -> ' + error);
          });
    };
}

export default CalendarPage;
