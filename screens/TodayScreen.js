import React from 'react';
import RectangleText from '../RectangleText';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

export default class TodayScreen extends React.Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  state = {
    fill: 70,
    uvIndex: 7
  };

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <MessageBar ref="alert" />
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
          <Text style={styles.text}>You’ve been sunbathing from 14:25</Text>
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
                onPress={() => {
                  MessageBarManager.showAlert({
                    title: 'UV Index increased from 7 to 8. Don\'t forget to put on sunscreen with SPF 30!',
                    message: 'UV Index increased from 7 to 8. Don\'t forget to put on sunscreen with SPF 30!',
                    alertType: 'warning',
                    titleNumberOfLines: 4,
                    messageNumberOfLines: 4
                  });
                  // navigate('Info');
                }}
              />
            </View>
            </View>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginTop: 28
  },
  content: {
    flex: 10,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 25,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 2
  },
  backIcon: {
    flex: 1,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  circle: {
    width: 210,
    height: 210,
    borderRadius: 210/2,
    borderWidth: 26,
    borderColor: '#e86e57',
    borderStyle: 'solid',
  },
  pieChart: {
    marginTop: 10,
    zIndex: 1,
    flex: 15
  },
  centeredText: {
    color: '#e86e57',
    fontFamily: 'Avenir',
    fontSize: 90,
    fontWeight: '900',
    position: 'absolute',
    top: 70,
    left: 95,
    zIndex: 2
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 15,
    flex: 1.4
  },
  space: {
    flex: 1.6
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
  }
});