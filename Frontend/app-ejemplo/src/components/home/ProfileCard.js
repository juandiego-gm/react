import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTiktok } from '@fortawesome/free-brands-svg-icons';
const tw = <Icon name="twitter" size={30} color="black" />
const fb = <Icon name="facebook" size={30} color="black" />
const instagram = <Icon name="instagram" size={30} color="black" />
const linkedin = <Icon name="linkedin" size={30} color="black" />
// const tk = <FontAwesomeIcon icon={faTiktok} style={{fontSize: '30px', color: 'black'}} />


const ProfileCard = () => {
    const user = {
        avatar: "https://media.licdn.com/dms/image/C4E03AQH0xjOsMI6mFw/profile-displayphoto-shrink_800_800/0/1656051861235?e=2147483647&v=beta&t=bJBCBfTcvdt3gVY_tWCkP2C889kPymLnFgFrJSU1IZs",
        coverPhoto: "https://www.solofondos.com/wp-content/uploads/2016/11/lobo-aullando-a-la-luna-1024x640-1024x640.jpg",
        name: "Juan Diego Góez"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={[{ color: "blue" }, styles.hover]} onPress={() => Linking.openURL("https://www.twitter.com")}>
                    {tw}
                </Text>
                <Text style={[{ color: "blue" }, styles.hover]} onPress={() => Linking.openURL("https://www.facebook.com")}>
                    {fb}
                </Text>
                <Text style={[{ color: "blue" }, styles.hover]} onPress={() => Linking.openURL("https://www.instagram.com/")}>
                    {instagram}
                </Text>
                <Text style={[{ color: "blue" }, styles.hover]} onPress={() => Linking.openURL("https://ec.linkedin.com/")}>
                    {linkedin}
                </Text>
                {/* <Text style={[{ color: "blue" }, styles.hover]} onPress={() => Linking.openURL("https://www.tiktok.com/")}>
                    {tk}
                </Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: "center",
            height: 200,
        },
        coverPhoto: {
            width: "100%",
            height: 300
        },
        avatarContainer: {
            alignItems: "center",
            marginTop: -75
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "white"
        },
        name: {
            marginTop: 15,
            fontSize: 20
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-between"
        }, hover: {
            color: "blue",
        },
    }
)

export default ProfileCard