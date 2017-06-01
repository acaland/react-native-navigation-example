import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
        <Text>MainScreen</Text>
        <Text>MainScreen</Text>
        <Text>MainScreen</Text>
        <Text>MainScreen</Text>
        <Text>MainScreen</Text>
        <Button
          title="Go To Profile"
          onPress={() => this.props.navigation.navigate('profile')}
        />
      </View>
    );
  }
}

MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Main Screen',
  headerStyle: {
    backgroundColor: 'lightgray',
    marginTop: Platform.OS == 'android' ? 24 : 0
  },
  // headerRight: <Text>Go to Profile</Text>,
  headerRight: (
      <Button
        title="Profile"
        onPress={() => navigation.navigate('profile')}
      />
    ),
  headerLeft: <Text>Go to Home</Text>
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
