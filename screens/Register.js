import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import useForm from "../hooks/useForm";

export default ({ navigation }) => {
    const initialState = {
        email: '',
        password: ''
    }
    const onSubmit = values => {
        console.log(values)
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput 
                value={inputs.email}
                onChangeText={subscribe('email')}
                style={styles.input} 
                placeholder='email'
            />
            <TextInput 
                value={inputs.password}
                onChangeText={subscribe('password')}
                style={styles.input} 
                placeholder='password'
                secureTextEntry={true}
            />
            <Button title='Enviar' onPress={handleSubmit}/>
            <Button title='Volver al inicio' onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    title:{
        fontSize: 24,
        marginBottom: 16,
    },
    input:{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingHorizontal: 5,
    }
})