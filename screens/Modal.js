import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useFetch from "../hooks/useFetch";

export default ({ navigation }) => {
    const id = navigation.getParam('_id')
    const { loading, data } = useFetch(`https://orders-gprosario.vercel.app/api/meals/${id}`)

    return (
        
        <View style={styles.container}>
            {loading ? <Text>Cargando...</Text> :
                <>
                    <Text>{data._id}</Text>
                    <Text>{data.name}</Text>
                    <Text>{data.desc}</Text>
                    <Button title="Aceptar" onPress={() => {
                        fetch('https://orders-gprosario.vercel.app/api/orders',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                meal_id: id,
                                user_id: 'xxxxxxxxxx'
                            })
                        }).then(() => {
                            alert('orden guardada con exito!')
                            navigation.navigate('Meals')
                        })
                    }}></Button>
                    <Button title="Cancelar" onPress={() => navigation.navigate('Meals')}></Button>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
