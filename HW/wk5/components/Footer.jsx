import { View, Text, StyleSheet, Image } from 'react-native';

export default function Footer({ page }) {
    return(
        <View style={styles.footer_container}>
            <View style={styles.icon_container}>
                <Image source={page === "home" ? require('../images/icon_home_actived.png') : require('../images/icon_home.png')} style={styles.icon}/>
                <Text style={{fontSize: 12}}>Home</Text>
            </View>
            <View style={styles.icon_container}>
                <Image source={page === "wishlist" ? require('../images/icon_nav_bookmark_actived.png') : require('../images/icon_nav_bookmark.png')} style={styles.icon}/>
                <Text style={{fontSize: 12}}>Wishlists</Text>
            </View>
            <View style={styles.icon_container}>
                <Image source={page === "mybooks" ? require('../images/icon_mybook_actived.png') : require('../images/icon_mybook.png')} style={styles.icon}/>
                <Text style={{fontSize: 12}}>My Books</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer_container:{
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    icon_container:{
        display: "flex",
        height: 40,
        width: 80,
        alignItems: "center",
        justifyContent: "space-around",
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    icon:{
        width: "40%",
        height: "60%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    }
});