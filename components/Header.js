import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Header extends React.Component {

  static navigationOptions = { title: 'sunwise', header: null }; // hide header

  render() {

    return (
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Icon
            name='ios-arrow-back'
            type='ionicon'
            iconStyle={styles.backIcon}
            color='#565656'
            onPress={() => this.props.navigate('Home')}
          />
            <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginTop: 28
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
});