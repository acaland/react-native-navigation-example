import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';


class App extends React.Component {
  render() {
    const ProfileNavigator = StackNavigator({
      profile: { screen: ProfileScreen },
      settings: {
        screen: SettingsScreen,
        navigationOptions: {
          title: 'Settings'
        }
      }
    });

    const MainNavigatorWithTab = TabNavigator({
      main: { screen: MainScreen },
      profile: { screen: ProfileNavigator}
    });


    return (
      <MainNavigatorWithTab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
