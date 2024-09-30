import { StyleSheet, View } from "react-native";
import ChatItem from "./components/Chat";
import Header from "./components/header";
import { Text } from "react-native-web";
import Footer from "./components/footer";

const productList = [
    {
        shopName: "Devang",
        title: "Ca nấu lẩu, nếu mì mini",
        image: require("./assets/ca_nau_lau.png"),
    },
    {
        shopName: "LTD Food",
        title: "1KG khô gà bơ tỏi",
        image: require("./assets/ga_bo_toi.png"),
    },
    {
        shopName: "Thế giới đồ chơi",
        title: "Xe cần cẩu đa năng",
        image: require("./assets/xa_can_cau.png"),
    },
    {
        shopName: "Thế giới đồ chơi",
        title: "Đồ chơi dạng mô hình",
        image: require("./assets/do_choi_dang_mo_hinh.png"),
    },
    {
        shopName: "Minh Long Book",
        title: "Lãnh đạo giản đơn",
        image: require("./assets/lanh_dao_gian_don.png"),
    },
    {
        shopName: "Minh Long Book",
        title: "Hiểu lòng con trẻ",
        image: require("./assets/hieu_long_con_tre.png"),
    },
    {
        shopName: "Minh Long Book",
        title: "Donal Trump thiên tài lãnh đạo",
        image: require("./assets/trump 1.png"),
    },
];

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.body.title}>
                    <Text>
                        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với
                        shop
                    </Text>
                </View>
                <View>
                    {productList.map((product) => (
                        <ChatItem
                            image={product.image}
                            shopName={product.shopName}
                            title={product.title}
                        />
                    ))}
                </View>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        marginTop: "60px",
        title: {
            height: "60px",
            padding: "10px",
            justifyContent: "center",
        },
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        backgroundColor: "#ccc",
    },
});
