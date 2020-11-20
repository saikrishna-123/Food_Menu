/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  LogBox
} from 'react-native';
import FoodMenu from './screens/FoodMenu/foodMenuScreen';

class App extends React.PureComponent{

  async componentDidMount(){
      LogBox.ignoreAllLogs();
  }

  render(){
  return (
    <View style={styles.scrollView}>
      <StatusBar barStyle="dark-content" />
      <FoodMenu />
    </View>
  );
};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex:1,
    height:null
  },
});

export default App;

