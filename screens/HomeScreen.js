import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import homeScreenLogo from '../homeScreen.png';

class HomeScreen extends Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={homeScreenLogo}
         />
        <View style={styles.bottom}>
          <View style={styles.rectangle}>
            <Text style={styles.text}>
              Did you know that sunlight
              cues special areas in the retina,
              which triggers the release
              of serotonin?
            </Text>
          </View>
            <View style={styles.button}>
              <Button
                color="white"
                title="Start sunbathing"
                onPress={() => navigate('Today')}
              />
            </View>
          <View style={styles.space} />
            <View style={styles.button}>
              <Button
                color="white"
                title="Check statistics"
                onPress={() => navigate('Stats')}
              />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    zIndex: 1
  },
  logo: {
    height: '40%',
    width: '100%'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  rectangle: {
    width: 310,
    height: 140,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#636363',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    marginBottom: 30
  },
  text: {
    color: '#636363',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 25
  },
  space: {
    height: 10
  },
  button: {
    backgroundColor: '#5e82d7',
    width: 238,
    height: 46,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 22,
    marginTop: 20
  }
});

export default HomeScreen;