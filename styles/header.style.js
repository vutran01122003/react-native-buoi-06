import { StyleSheet } from "react-native";

const headerContainer = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#1BA9FF",
        position: "fixed",
        top: 0,
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

export default headerContainer;
