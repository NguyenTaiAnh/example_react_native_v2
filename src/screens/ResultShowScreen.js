import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from '../../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [detail, setDetail] = useState(null);
    const id= navigation.getParam('id');

    const getDataDetail =  async () =>{
        const res = await yelp.get(`${id}`)
        setDetail(res.data)
    }
    useEffect(() => {
        getDataDetail()
    }, []);
    if(!detail){
        return null;
    }
    return (
        <View>
            <Text>{detail.name}</Text>
            <FlatList
                data={detail.photos}
                keyExtractor={img => img}
                renderItem={({item}) => {
                    return <Image source={{ uri: item}} style={styles.imgStyle} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        height: 300,
        width: 300,
    }
})

export default ResultShowScreen;
