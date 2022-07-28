import { StyleSheet } from "react-native";

export const format = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },

    header: {
        flex: 1,
        backgroundColor: "#ff5722",
        flexDirection: "row",
        padding: 10,
    },

    leftimgheader: {
        width: 48,
        height: 48,
        top: 15,
    },

    rightimgheader: {
        width: 43,
        height: 43,
        top: 17,
    },

    txtheader: {
        flex: 3,
        color: "white",
        fontSize: 15,
        textAlign: "center",
        top: 27,
        fontWeight: "bold",
    },

    content: {
        flex: 1,
        flexDirection: "row"
    },

    footer: {
        flex: 1,
        backgroundColor: "#ff5722",
        justifyContent: "center",
        alignItems: "center",
    },

    txtfooter: {
        color: "white",
        fontSize: 15,
    },

    btn: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#dddddd",
        borderWidth: 1,
        margin: 5,
        height: "10%",
    },

    imgbtn: {
        width: 30,
        height: 30,
    },

    txtbtn: {
        fontSize: 15,
        textAlign: "center",
    },
 
});