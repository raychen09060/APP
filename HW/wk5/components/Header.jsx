import { StyleSheet, View, Text, Image} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header_container}>
            <Text style={styles.header_title}>Gallery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header_container: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    header_title: {
        fontSize: 28,
        fontWeight: "bold",
    },
});