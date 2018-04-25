import React from 'react';
import RectangleText from '../RectangleText';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import PieChart from 'react-native-pie-chart';

export default class TodayScreen extends React.Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  render() {
    const { navigate } = this.props.navigation;

    const chartWidth = 200;
    const series = [300, 130];
    const sliceColor = ['#E86E57','#efefef'];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
          <Icon
            name='ios-arrow-back'
            type='ionicon'
            iconStyle={styles.backIcon}
            color='#565656'
            onPress={() => navigate('Home')}
          />
          <Text style={styles.title}>Current UV Index</Text>
        </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.centeredText}>7</Text>
          <PieChart
            chart_wh={chartWidth}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.7}
            coverFill={'white'}
            style={styles.pieChart}
          />
          <Text style={styles.text}>You’ve been sunbathing from 14:25</Text>
          <RectangleText text="Currently UV index is high.
            Remember to put the sunscreen with
            index 40.
            Wear a hat and sunglasses!"/>
        </View>
        <View style={styles.header2}>
          <Text style={styles.title}>Footer</Text>
        </View>
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
    backgroundColor: 'pink',
    alignItems: 'center'
  },
  header2: {
    flex: 2,
    backgroundColor: 'yellow'
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
    marginTop: 20,
    zIndex: 1
  },
  centeredText: {
    color: '#e86e57',
    fontFamily: 'Avenir',
    fontSize: 90,
    fontWeight: '900',
    position: 'absolute',
    top: 70,
    left: 160,
    zIndex: 2
  },
  text: {
    color: '#565656',
    fontFamily: 'Avenir',
    fontSize: 15
  },
  space: {
    height: 30
  }
});