import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HomeIcon from '../assets/icons/homeSelected.png';
import StatsIcon from '../assets/icons/stats.png';
import CalendarIcon from '../assets/icons/calendar.png';
import InfoIcon from '../assets/icons/info.png';

export default class Footer extends React.Component {
  state = {
    sunbathingStarted: true
  };
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={HomeIcon}
          />
          <Text style={styles.iconTextSelected}>HOME</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={StatsIcon}
          />
          <Text style={styles.iconText}>STATISTICS</Text>
        </View>
        <View style={styles.iconContainer}>
         <View style={styles.circle}>
           <TouchableOpacity
             style={styles.square}
             onPress={() => {
               this.setState({
                 sunbathingStarted: false
               });
               this.props.navigate('Home', {stopTimer: true});
             }
           }
           />
         </View>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={CalendarIcon}
          />
          <Text style={styles.iconText}>CALENDAR</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={InfoIcon}
          />
          <Text style={styles.iconText}>ABOUT</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1.2,
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  iconContainer: {
    flex: 0.3,
    alignItems: 'center'
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 5
  },
  iconText: {
    color: '#676767',
    fontFamily: 'Avenir',
    fontSize: 10,
    fontWeight: '600'
  },
  iconTextSelected: {
    color: '#5e82d7',
    fontFamily: 'Avenir',
    fontSize: 10,
    fontWeight: '600'
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 46/2,
    backgroundColor: '#5e82d7',
    position: 'absolute',
    bottom: 5,
    right: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'white'
  }
});