import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBarComponent = ({valueSearch, onChangeSearch, onSubmitSearch}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconSearchStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect ={false}
                placeholder="Search"
                style = {styles.txtInputStyle}
                value={valueSearch}
                onChangeText={onChangeSearch}
                onEndEditing={onSubmitSearch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor : '#F0EEEE',
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    txtInputStyle: {
        fontSize: 20,
        borderColor:"black",
        flex: 1
    },
    iconSearchStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBarComponent;
