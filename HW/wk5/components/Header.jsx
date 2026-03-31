import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header_container}>
            <View style={styles.icon_container}>
                <Image source={require('../images/icon_menu.png')} style={styles.icon}/>
            </View>
            <View style={styles.icon_container}>
                <Image source={require('../images/icon_search.png')} style={styles.icon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header_container:{
        width: "95%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "2.5%",
/*         borderWidth: 2,
        borderColor: "#ff0000", */
        
    },
    icon_container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    icon:{
        width: "60%",
        height: "60%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    }
});