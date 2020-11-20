import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import VerticalTab from '../../components/VerticalTab/VerticalTab';

const VerticalList = ({data, onViewableItemsChanged, _onscroll, onHorizontalClick, setColorIndex }) => {
    return (
        <View style={{
            marginBottom: 120,
        }} >
            <FlatList
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 56
                }}
                ref={_onscroll}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <VerticalTab
                        key={index}
                        title={item.title}
                        menu={item.items}
                        onClick={onHorizontalClick}
                        colorIndex={setColorIndex}
                        index={index}
                    />
                )}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0}
                scrollEventThrottle={16}
            />
        </View>
    )
}

export default VerticalList;
