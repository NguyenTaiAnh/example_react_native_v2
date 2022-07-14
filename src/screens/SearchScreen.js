import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import ResultListComponent from '../components/ResultListComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import useResult from '../hooks/useResult';
const SearchScreen = () => {
    const [keyWord, setKeyWord] = useState('');
    const [searchApi, result, errorMessage] = useResult();

    const filterItem = (price) => {
        const filterData = result.filter(i => i.price === price);
        return filterData
    }
    return (
        <View style={styles.container}>
            <SearchBarComponent 
                valueSearch={keyWord} 
                onChangeSearch={setKeyWord} 
                onSubmitSearch={() => searchApi(keyWord)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            {/* <Text>We have found: {result.length} result</Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultListComponent title="Cost Effective"  dataFilter={filterItem('$')}/>
                <ResultListComponent title="Bit Pricer"  dataFilter={filterItem('$$')}/>
                <ResultListComponent title="Big Spender"  dataFilter={filterItem('$$$')}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // height: '100%',
        flex:1
    }
})

export default SearchScreen;
