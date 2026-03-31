import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function PopularSec({ book_data }) {
    return(
        <View style={styles.popularSec_container}>
            <View style={styles.PopularSec_title_container}>
                <Text style={styles.PopularSec_title_text}>Popular Books</Text>
            </View>
            <View style={styles.PopularSec_FlatList_container}>
                <FlatList
                    data={ book_data }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Pressable
                            onPress={() => {
                                router.push({
                                    pathname: "book/[id]", 
                                    params: { id: item.id } 
                                });
                            }}
                        >
                            <View style={styles.PopularSec_book_container}>
                                <View style={styles.PopularSec_book_Image_container}>
                                    <Image source={item.img} style={styles.PopularSec_book_Image} resizeMode="cover"/>
                                </View>
                                <Text style={styles.PopularSec_book_Title}>{item.title}</Text>
                                <Text style={styles.PopularSec_book_Author}>{item.Author}</Text>
                            </View>
                        </Pressable>
                        
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    popularSec_container:{
        width: "100%",
        height: 400,
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    PopularSec_title_container:{
        width: "100%",
        height: "10%",
        paddingLeft: "5%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    PopularSec_title_text:{
        fontSize: 24,
        fontWeight: "bold",
    },
    PopularSec_FlatList_container:{
        width: "100%",
        height: "90%",
        marginLeft: "5%",
    },
    PopularSec_book_container:{
        display: "flex",
        justifyContent: "space-around",
        width: 200,
        height: 350,
        marginRight: 15,
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    PopularSec_book_Image_container:{
        width: "100%",
        height: "85%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    PopularSec_book_Image:{
        height: "100%",
        width: "100%",
        borderRadius: 10,
    },
    PopularSec_book_Title:{
        fontSize: 16,
        fontWeight: "bold",
    },
    PopularSec_book_Author:{
        fontSize: 12,
    },
});