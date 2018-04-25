import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import StatsScreen from './screens/StatsScreen';
import InfoScreen from './screens/InfoScreen';
import TodayScreen from './screens/TodayScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Stats: { screen: StatsScreen },
  Today: { screen: TodayScreen },
  Calendar: { screen: CalendarScreen },
  Info: { screen: InfoScreen }
},
  {
    initialRouteName: 'Today'
  },
  {
    headerMode: 'screen'
});

export default App;