import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';

const HorizontalTab = (props) => {
    const { item } = props;
    return (
      <View
        key={item.id}
        style={styles.container}
      >
        <TouchableOpacity
          onPress={()=> props.onClick(props.index)}
          activeOpacity={1.75}
          style={styles.tabView}
        >
          <Text>{item.title}</Text>
        {
         props.colorIndex == props.index ? <View style={styles.line}/> :null
        }
        </TouchableOpacity>
      </View>)
  };

export default HorizontalTab;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    borderRadius: 7,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 20,
  },
  tabView:{
    borderRadius: 15,
    paddingVertical: 5
  },
  line:{
    borderBottomWidth:3,
    borderBottomColor:'gray',
    marginTop:10
  }
})