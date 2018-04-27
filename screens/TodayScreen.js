import React from 'react';
import RectangleText from '../RectangleText';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Modal from 'react-native-modal';
import AnimateNumber from 'react-native-countup'

export default class TodayScreen extends React.Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  state = {
    fill: 70,
    uvIndex: 7,
    isModalVisible: false,
    timer: 0,
    increaseUVIndex: false
  };

  toggleModal = () =>
    this.setState({ isModalVisible: true });

  onPress = () => {
    this.setState({ isModalVisible: false });
    setTimeout(() => {
      this.props.navigation.navigate('Info')
    }, 2000);
  };

  renderButton = (text) => (
    <TouchableOpacity onPress={this.onPress}>
      <View style={styles.warningButton}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <Text style={styles.modalContent}>
      <Text style={styles.modalContent}>
        UV Index increased from 7 to 8!
        Don't forget to put on sunscreen!
      </Text>
      {this.renderButton('Close', () => this.setState({ isModalVisible: false }))}
    </Text>
  );

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        uvIndex: 8,
        fill: 80,
        increaseUVIndex: true
      });
      setTimeout(() => {
        this.toggleModal();
      }, 2000);
    }, 3000);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header title="Current UV Index" navigate={navigate} />
        <View style={styles.content}>
          <View style={styles.firstHalf}>
            <View style={styles.space}/>
            <AnimatedCircularProgress
              size={200}
              width={28}
              fill={this.state.fill}
              tintColor="#E86E57"
              backgroundColor="#efefef"
              rotation={360}
              lineCap="round"
            >
            </AnimatedCircularProgress>
            <View style={styles.space}/>
            <Text style={styles.centeredText}>{this.state.uvIndex}</Text>
          <View>
            <Text>
              <Text style={styles.text}>
                You’ve been sunbathing from
              </Text>
              <Text style={styles.text}> </Text>
              <Text style={styles.timer}>
                14:28
              </Text>
            </Text>
          </View>
          </View>
          <View style={styles.secondHalf}>
            <RectangleText text="Currently UV index is high.
              Remember to put the sunscreen with
              index 40.
              Wear a hat and sunglasses!"/>
            <View style={styles.button}>
              <Button
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                title="What is UV Index?"
              />
            </View>
            </View>
        </View>
        <Footer navigate={navigate} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContent}>
            <Text style={styles.modalContentText}>
              UV Index increased from 7 to 8!
              Don't forget to put on sunscreen!
            </Text>
            {this.renderButton('OK')}
          </View>
        </Modal>
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
    alignItems: 'center'
  },
  centeredText: {
    color: '#e86e57',
    fontFamily: 'Avenir',
    fontSize: 90,
    fontWeight: '900',
    position: 'absolute',
    top: 70,
    left: 92,
    zIndex: 2
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 15,
    flex: 1.4
  },
  timer: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '700'
  },
  space: {
    flex: 1.6
  },
  button: {
    backgroundColor: '#5e82d7',
    width: 238,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  warningButton: {
    backgroundColor: '#e86e57',
    width: 100,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    textAlign: 'center'
  },
  firstHalf: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1
  },
  secondHalf: {
    flex: 5,
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalContentText: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    textAlign: 'center'
  }
});