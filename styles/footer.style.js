import { StyleSheet } from "react-native";

const footerContainer = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#1BA9FF",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
    },
    title: {
        color: "#fff",
        fontSize: "18px",
        fontWeight: "500",
    },
});

export default footerContainer;
