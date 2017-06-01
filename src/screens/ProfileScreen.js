import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Button
          title="Go To Settings"
          onPress={() => this.props.navigation.navigate('settings')}
        />
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
