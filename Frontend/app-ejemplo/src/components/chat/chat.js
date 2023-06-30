import { View, StyleSheet, Text, TextInput, Button, Alert, Modal } from "react-native";
import React, { useState } from "react";
import axios from "axios";


const Chat = () => {
    const [respuestas, setRespuestas] = useState([]);
    const [textInput, setTextInput] = useState("");
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    const apiKey = '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';
    const [showMessage, setShowMessage] = useState(false);

    const closeMessage = () => {
        setShowMessage(!showMessage)
    }

    const getMessage = () => {
        setShowMessage(true);
    }

    const sendMessageToChatGPT = async () => {
        setTextInput("");
        try {
            const prompt = textInput;
            const response = await axios.post(apiUrl, {
                prompt: prompt,
                max_tokens: 100,
                temperature: 0.5,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            });


            if (response.data.choices && response.data.choices.length > 0) {
                const botReply = response.data.choices[0].text.trim();
                console.log(botReply);
                setRespuestas([...respuestas, botReply]);
            } else {
                console.log('No se encontró una respuesta válida del bot');
            }
            setTextInput("");
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.error('Error al llamar a la API de ChatGPT: Se ha excedido la cuota');
                getMessage();
            } else {
                console.error('Error al llamar a la API de ChatGPT:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Bienvenido al chat</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un texto"
                    value={textInput}
                    onChangeText={setTextInput}
                />
                <Button title="Enviar" onPress={sendMessageToChatGPT} />
            </View>

            <View style={styles.respuestasContainer}>
                {respuestas.map((respuesta, index) => (
                    <Text key={index} style={styles.respuesta}>{respuesta}</Text>
                ))}
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
                            Error al llamar a la API de ChatGPT: Se ha excedido la cuota
                        </Text>
                        <Button title="Cerrar" onPress={closeMessage} />
                    </View>
                </View>
            </Modal>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: 400,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    respuestasContainer: {
        height: 200,
        width: 400,
        alignItems: 'center',
        borderWidth: 1, // Ancho del borde
        borderColor: 'gray', // Color del borde
        borderRadius: 5, // Radio de borde
        padding: 10, // Espacio interno alrededor de las respuestas
        marginTop: 10, // Espacio superior para separar del input
    },
    respuesta: {
        fontSize: 14,
        marginBottom: 5,
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        width: "80%", // Ancho del modal
        maxWidth: 450, // Máximo ancho del modal
        height: "100", // Altura del modal
        maxHeight: 200, // Máxima altura del modal
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }, modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
    }
});




export default Chat