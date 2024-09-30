import { StyleSheet } from "react-native";

const shopContainer = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        gap: "10px",
    },
    chatItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        borderColor: "gray",
        borderStyle: "solid",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    chatItemContainerActive: {
        backgroundColor: "#fff",
    },
    shopImageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "80px",
        height: "80px",
        backgroundColor: "#fff",
    },
    shopImage: {
        height: "100%",
        objectFit: "contain",
    },
    descWrapper: {
        flex: 1,
        gap: "15px",
    },
    shopTitle: {
        fontWeight: "600",
        fontSize: "18px",
    },
    shopLabel: {
        color: "gray",
    },
    shopName: {
        color: "red",
    },
    buttonChat: {
        backgroundColor: "red",
        color: "#fff",
        height: "35px",
        minWidth: "80px",
        marginRight: "20px",
        justifyContent: "center",
        alignItems: "center",
    },
    onPress: ({ pressed }) => ({
        backgroundColor: pressed ? "black" : "white",
    }),
});

export default shopContainer;
