import React, { Component } from "react";
import {Image,ImageBackground,View} from 'react-native';
import global from '../../global/styles';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
  Container,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Main extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { props: { name } } = this;
    return (
      <Container style={styles.container}>
        <Content>
          <ImageBackground source={require('../../images/January.png')} style={styles.backgroundImage} imageStyle={{borderRadius:40}} >
            <Text style={styles.title}>
              January
            </Text>
            <View style={global.bottomView}>
              <Text style={styles.title}>
                Wednesday, Dec 4th
              </Text>
            </View>

          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({
  name: state.user.name
});

export default connect(mapStateToProps, bindAction)(Main);
