import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import RectangleText from '../RectangleText';
import homeScreenLogo from '../homeScreen.png';
import { sunbathingFacts } from '../data/sunbathingFacts';

class HomeScreen extends Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  randomFact = sunbathingFacts[Math.floor(Math.random() * sunbathingFacts.length)];

  render() {
    const { navigate } = this.props.navigation;
     return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={homeScreenLogo}
         />
        <View style={styles.bottom}>
          <View style={styles.smallSpace} />
          <RectangleText text={this.randomFact}/>
          <View style={styles.space} />
          <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
              title="Start sunbathing"
              onPress={() => navigate('Today')}
            />
            </View>
          <View style={styles.space} />
            <View style={styles.button}>
              <Button
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                title="Check statistics"
                onPress={() => navigate('Stats')}
              />
            </View>
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
    flex: 1.1,
    width: '100%'
  },
  bottom: {
    flex: 2,
    alignItems: 'center'
  },
  rectangle: {
    flex: 1.4,
    width: 310,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#636363',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 50,
    marginBottom: 20
  },
  text: {
    color: '#636363',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 25
  },
  space: {
    height: 30
  },
  smallSpace: {
    height: 15
  },
  buttons: {
    flex: 2
  },
  button: {
    backgroundColor: '#5e82d7',
    width: 238,
    height: 50,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default HomeScreen;