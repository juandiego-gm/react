import React, { useState } from "react";
import { Alert, Modal, StatusBar, StyleSheet, TextInput, Button, Text, View } from "react-native";

const NombreComponent = () => {
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    const closeMessage = () => {
        setShowMessage(!showMessage)
    }

    const getMessage = () => {
        setShowMessage(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={setApellido}
                />
                <Button title="Mostrar mensaje" onPress={getMessage} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showMessage}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed");
                    closeMessage();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Bienvenido {nombre} {apellido}
                        </Text>
                        <Button title="Cerrar" onPress={closeMessage} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "E8EAED",
        marginTop: StatusBar.currentHeight || 0,
        display: "flex"
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 22
    }, modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "100%",
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }, modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
    }, inputContainer: {
        marginBottom: 10,
    }, input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
})

export default NombreComponent;