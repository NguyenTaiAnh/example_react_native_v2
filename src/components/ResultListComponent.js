import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultDetailComponent from './ResultDetailComponent';
import { withNavigation } from 'react-navigation';
const ResultListComponent = ({title, dataFilter, navigation}) => {
    if(!dataFilter.length) return null;
    return (
        <View style={{ marginLeft: 15, marginBottom: 10}}>
            <Text style={styles.txtTitle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataFilter}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('ResultShow',{id: item.id})}>
                        <ResultDetailComponent result={item}/>
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    txtTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 2
    }
})

export default withNavigation(ResultListComponent);
