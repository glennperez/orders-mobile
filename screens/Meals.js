import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import useeFetch from "../hooks/useFetch";

const Meals = ({navigation}) => {
    const { loading, data: meals } = useeFetch('https://orders-gprosario.vercel.app/api/meals/')
    return (
        <View style={styles.container}>
            { loading ? <Text>Cargando...</Text> :
                <FlatList
                    style={styles.list}
                    data={meals}
                    keyExtractor={x => x._id}
                    renderItem={ ({item}) => 
                        <ListItem
                            onPress={() => navigation.navigate('Modal', { _id: item._id })}
                            name={item.name}
                        />
                    }
                /> 
            }
        </View>
    )
}

Meals.navigationOptions = ({
    title: 'Platos disponibles',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    list:{
        alignSelf: 'stretch',
    }
})

export default Meals;