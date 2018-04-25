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
    flex: 1.6,
    width: 310,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#636363',
    borderStyle: 'solid',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 50,
    marginBottom: 20
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    textAlign: 'center'
  }
});