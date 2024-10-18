import { Image, Text, View } from "react-native";
import headerContainer from "../styles/header.style";

function Header() {
    return (
        <View style={headerContainer.header}>
            <Image source={require("../assets/left-arrow.png")} />
            <Text style={headerContainer.title}>Chat</Text>
            <Image source={require("../assets/cart.png")} />
        </View>
    );
}

export default Header;
