import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    box: {
        marginHorizontal: 20,
    },
    inputBox: {
        flexDirection: "row",
        borderWidth: 0.8,
        borderRadius: 16,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    inputName: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 12,
        marginBottom: 4,
    },
    input: {
        flex: 1
    },
    button: {
        backgroundColor: "black",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 16,
        alignItems: "center",
        alignSelf: "center",
        width: Dimensions.get("screen").width / 3,
    },
    buttonName: {
        color: "white",
        margin: 12,
        fontSize: 16,
        fontWeight: "bold",
    },
    backgroundImage: {
        flex: 1,
    },
    icon: {
        paddingHorizontal: 10
    },
})