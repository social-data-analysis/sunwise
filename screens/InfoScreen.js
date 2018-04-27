import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class InfoScreen extends React.Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  state = {
    isDateTimePickerVisible: false,
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
    this.props.navigation.navigate('Home');
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header title="Stop Sunbathing" navigate={navigate} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>You forgot to stop sunbathing!</Text>
            <Text style={styles.text}>When did you finish?</Text>
          </View>
          <View style={styles.button}>
            <Button
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
              title="Choose time"
              onPress={this.showDateTimePicker}
            />
          </View>
          <View style={styles.space} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode='datetime'
          />
        </View>
        <Footer navigate={navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    flex: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#5e82d7',
    width: 238,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    textAlign: 'center'
  },
});