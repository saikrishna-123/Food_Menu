import React, { createRef } from 'react';
import {
    Image,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { data } from '../../constants/data/dummy';
import HorizontalList from '../HorizontalList/HorizontalList';
import VerticalList from '../VerticalList/VerticalList';

class FoodMenu extends React.Component {

    _onscroll = createRef();
    _onHorizontalScroll = createRef();
    constructor(props) {
        super(props);
        this.state = {
            setColorIndex: 0,
        }
    }

    onVerticalClick = (index) => {
        this.setState({
            setColorIndex: index
        }, () => {
            this._onscroll.current.scrollToIndex({
                index: index,
                animated: true,
            })
        })
    }

    onHorizontalClick = (index) => {
        this.setState({
            setColorIndex: index
        }, () => {
            this._onHorizontalScroll.current.scrollToIndex({
                index: index,
                animated: true,
            })
        })
    }


    onViewableItemsChanged = ({ viewableItems, changed }) => {
        if (changed[0].index) {
            this.setState({
                setColorIndex: changed[0].index
            }, () => {
                this._onHorizontalScroll.current.scrollToIndex({
                    index: changed[0].index,
                    animated: true,
                })
            })
        }
        else {
            this.setState({
                setColorIndex: 0
            }, () => {
                this._onHorizontalScroll.current.scrollToIndex({
                    index: 0,
                    animated: true,
                })
            })
        }
    }

    render() {
        return (
            <SafeAreaView >
                <View style={{flexDirection:'row',padding:20,justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:5,flexDirection:'row',alignItems:'center'}}>
                        <Image
                         source={require('../../assets/Back_Orange.png')} style={{width:20,height:20}}/>
                         <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold'}}>Food Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                         source={require('../../assets/Search.png')} style={{width:20,height:20}}/>
                    </TouchableOpacity>
                </View>
                <HorizontalList
                    _onHorizontalScroll={this._onHorizontalScroll}
                    data={data}
                    setColorIndex={this.state.setColorIndex}
                    onVerticalClick={this.onVerticalClick}
                />
                <VerticalList
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    _onscroll={this._onscroll}
                    data={data}
                    onHorizontalClick={this.onHorizontalClick}
                    setColorIndex={this.state.setColorIndex}
                />
            </SafeAreaView>
        )
    }
}

export default FoodMenu;



