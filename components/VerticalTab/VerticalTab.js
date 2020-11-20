import React from 'react';
import {View,TouchableOpacity,Text,Image,StyleSheet} from 'react-native';

const VerticalTab = (props) => {
    const { title, menu } = props;
    return (
      <View
        key={props.index}
        style={styles.container}
      >
          <TouchableOpacity onPress={()=> props.onClick(props.index)} style={{ marginBottom: 20,flexDirection:'row',alignItems:'center',  paddingVertical: 5,
            borderRadius:10,}}>
          {props.colorIndex == props.index ? <View style={{height:10,width:10,borderRadius:10/2,backgroundColor:'#50ABF1',marginRight:5}}/>: null}
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#000'}}>{title}</Text>
          </TouchableOpacity>
          {
            menu.map((listitem, index) => <View key={listitem.item_id} >
              <View  style={{ flexDirection: 'row'}}>
                <View style={{ flex: 7 }}>
                  <Text style={{ fontWeight: '700' }}>{listitem.item_name}</Text>
                  <Text numberOfLines={4}>{listitem.item_desc}</Text>
                  <Text style={{ marginTop: 8, fontWeight: 'bold' }}>₹ {listitem.item_price}</Text>
                </View>
                <View style={{ flex: 3 ,alignItems:'flex-end'}}>
                  <Image source={listitem.item_image} style={{ width: 100, height: 90 }} />
                </View>
              </View>
              <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10 }} />
            </View>
            )
          }
      </View>)
  };

  export default VerticalTab;


  const styles = StyleSheet.create({
      container:{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
      }
  })