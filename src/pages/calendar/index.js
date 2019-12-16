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
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={true}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                      />
                      <View style={global.bottomView}>
                          <TouchableOpacity style={styles.bottomBtnOutline} onPress={() => this.props.navigation.goBack()}>
                              <Image source={require('../../images/back_arrow.png')} style={styles.bottomBtn} >
                              </Image>
                          </TouchableOpacity>
                          <View style={{flex:2}}/>
                          <TouchableOpacity style={styles.bottomBtnOutline} onPress={() => this.props.navigation.goBack()}>
                              <Image source={require('../../images/Bear_Paw.png')} style={styles.bottomBtn} >
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
