import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView
} from 'react-native';


export default function Main() {

    const [number1, onChangeNumber1] = useState();
    const [number2, onChangeNumber2] = useState();

    const [modal, setModal] = useState(false)

    const [resultado, setResultado] = useState()

    const Somar = () => {
        setResultado(number1 / (number2 * number2))
        setModal(true)
    };

    const resetData = () => {
        onChangeNumber1('')
        onChangeNumber2('')
        alert('erro')
    }

    return (

        <View style={styles.container} >
            <View style={styles.content} id="content">
                <Text style={styles.title}>
                    Calculadora IMC
                </Text>
                <TouchableOpacity style={styles.divReset}>
                    <Text style={styles.textReset} onPress={resetData}>Resetar</Text>
                </TouchableOpacity>

                <View style={styles.DivSum}>
                    <SafeAreaView style={styles.viewInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Peso(kg)"
                            keyboardType="numeric"
                            placeholderTextColor={'gray'}
                            onChangeText={onChangeNumber1}
                            value={number1}
                            keyboardShouldPersistTaps='handled'
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Altura(cm)"
                            keyboardType="numeric"
                            placeholderTextColor={'gray'}
                            onChangeText={onChangeNumber2}
                            value={number2}
                            keyboardShouldPersistTaps='handled'
                        />

                    </SafeAreaView>
                </View>
                <TouchableOpacity style={styles.divSomar}>
                    <Text onPress={Somar} style={styles.buttonSomar}>Calcular</Text>

                </TouchableOpacity>
                {
                    modal ? (
                        <>
                            <View style={styles.viewResult}>
                                <Text style={styles.result}>
                                    {
                                        resultado === 0 ? (
                                            <>
                                                IMC: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado <= 18.5 ? (
                                            <>
                                                Magresa: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado >= 18.6 && resultado <= 24.9 ? (
                                            <>
                                                Normal: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado >= 25 && resultado <= 29.9 ? (
                                            <>
                                                Sobrepeso: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado >= 30 && resultado <= 34.9 ? (
                                            <>
                                                Obesidade Grau I: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado >= 35 && resultado <= 40 ? (
                                            <>
                                                Obesidade Grau II: {resultado.toFixed(2)}
                                            </>
                                        ) : resultado >= 0 ? (
                                            <>
                                                Obesidade Grau III: {resultado.toFixed(2)}
                                            </>
                                        ) : null
                                    }
                                </Text>
                            </View>
                        </>
                    ) : null
                }
            </View>
            <StatusBar style="auto" />

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1726',
        color: 'white',
    },
    content: {
        marginTop: 55,
        marginLeft: 20,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        width: '100%',

    },
    viewInput: {
        marginTop: 10,
    },
    input: {
        width: 330,
        borderBottomColor: '#87f2a2',
        borderColor: 'transparent',
        borderWidth: 3,
        paddingBottom: 10,
        marginTop: 15,
        fontSize: 15,
        color: 'white',
        width: '95%',
    },
    divSomar: {
        marginTop: 20,
        backgroundColor: '#87f2a2',
        borderRadius: 10,
        padding: 10,
        width: '95%',
    },
    buttonSomar: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
    },
    viewResult: {
        marginTop: 20,
        width: 330,
        backgroundColor: '#87f2a2',
        borderRadius: 10,
        padding: 10,
    },
    result: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
    resetNumber: {
        color: 'white'
    },
    divReset: {
        backgroundColor: '#87f2a2',
        width: 90,
        height: 30,
        padding: 5,
        borderRadius: 10,
        marginTop: -120,
        right: 10,
        position: 'absolute'
    },
    textReset: {
        color: '#121214',
        textAlign: 'center',
    }
});
