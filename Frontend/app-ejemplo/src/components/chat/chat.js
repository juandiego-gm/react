import { View, StyleSheet, Text, TextInput, Button, Alert, Modal } from "react-native";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const apiKey = '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';

const Chat = () => {

    const configuration = new Configuration({
        organization: "org-wynEPyJcGvJfZHKQl1lpwVCY",
        apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const [respuestas, setRespuestas] = useState([]);
    const [tokens, setTokens] = useState([]);
    const [textInput, setTextInput] = useState("");


    const sendMessageToChatGPT = async () => {
        setTextInput("");
        setRespuestas(null);

        // const prompt = `Cliente: ${textInput}\nAsistente: Cuenta la cantidad de cada vocal en el siguiente texto: ${textInput}`;

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": `Eres un contador de vocales, cuando recibas un texto debes contar las vocales de ese texto.
                E.G
                juan = 2 vocales
                Aeropuerto = 6 vocales
                zapato = 3 vocales` },
                { role: "user", content: `${textInput}` }],
            temperature: 0.5,
            max_tokens: 50,
            stop: [" Human:", " AI:"],
        });

        console.log(response);
        if (response.data.choices && response.data.choices.length > 0) {
            const botReply = response.data.choices[0].message.content;
            setTokens(response.data.usage.total_tokens);
            console.log(botReply);
            console.log(response.data.usage.total_tokens);
            setRespuestas(`${botReply}`);
        } else {
            console.log('No se encontró una respuesta válida del bot');
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
                <Text style={styles.respuesta}>{respuestas}</Text>
            </View>
            <Text style={styles.message}>Tokens utilizados: {tokens}</Text>
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
        alignItems: 'left',
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