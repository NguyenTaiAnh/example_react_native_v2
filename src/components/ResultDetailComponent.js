import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ResultDetailComponent = ({result}) => {
    return (
        <View>
            <Image source={{ uri: result.image_url}} style={styles.imgStyle}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count} Starts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle:{
        width: 250,
        height: 150,
        borderRadius: 2,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize: 15,
    },
})

export default ResultDetailComponent;
