import { Image, View } from "react-native-web";
import footerContainer from "../styles/footer.style";

function Footer() {
    return (
        <View style={footerContainer.footer}>
            <Image source={require("../assets/Group 10.png")} />
            <Image source={require("../assets/Vector (1).png")} />
            <Image source={require("../assets/Vector 1 (Stroke).png")} />
        </View>
    );
}

export default Footer;
