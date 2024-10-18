import { Image, Text, View, StyleSheet } from "react-native";

function ChatItem({ image, title, shopName }) {
    return (
        <View style={shopContainer.chatItemContainer}>
            <View style={shopContainer.shopImageWrapper}>
                <Image style={shopContainer.shopImage} source={image} />
            </View>
            <View style={shopContainer.descWrapper}>
                <Text style={shopContainer.shopTitle}>{title}</Text>
                <View style={shopContainer.flexRow}>
                    <Text style={shopContainer.shopLabel}>Shop</Text>
                    <Text style={shopContainer.shopName}>{shopName}</Text>
                </View>
            </View>
            <View style={shopContainer.buttonChat}>
                <Text>Chat</Text>
            </View>
        </View>
    );
}

const shopContainer = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        gap: 10,
    },
    chatItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
        width: 80,
        height: 80,
        backgroundColor: "#fff",
    },
    shopImage: {
        height: "100%",
        objectFit: "contain",
    },
    descWrapper: {
        flex: 1,
        gap: 15,
    },
    shopTitle: {
        fontWeight: "600",
        fontSize: 18,
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
        height: 35,
        minWidth: 80,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ChatItem;
