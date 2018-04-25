import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class RectangleText extends React.Component {

  render() {

    return (
      <View style={styles.rectangle}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rectangle: {
    flexGrow: 0.5,
    width: 290,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#636363',
    borderStyle: 'solid',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    textAlign: 'center'
  }
});