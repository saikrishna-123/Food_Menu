import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import HorizontalTab from '../../components/HorizontalTab/HorizontalTab';

const HorizontalList = ({ data, _onHorizontalScroll, setColorIndex, onVerticalClick }) => {
    return (
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <FlatList
                data={data}
                ref={_onHorizontalScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <HorizontalTab
                        item={item}
                        colorIndex={setColorIndex}
                        onClick={onVerticalClick}
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0}
            />
        </View>
    )
}

export default HorizontalList;