import { Image, Text, TouchableOpacity, View } from "react-native-web";
import shopContainer from "../styles/chat.style";

function ChatItem({ image, title, shopName }) {
    return (
        <View style={shopContainer.chatItemContainer} onTouchStart={this}>
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
            <View style={shopContainer.buttonChat}>Chat</View>
        </View>
    );
}

export default ChatItem;
