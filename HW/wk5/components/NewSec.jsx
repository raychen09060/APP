import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { router } from 'expo-router';

export function Rating( {rate} ){
    const stars = [1, 2, 3, 4, 5];
    return(
        <View style={styles.NewSec_book_rate_container}>
            {stars.map((star) => {
                const starIcon = star <= rate ? require('../images/icon_star_filled.png') : require('../images/icon_star_empty.png');

                return(
                    <Image
                        key={star}
                        source={starIcon}
                        style={{ width: 14, height: 14, marginRight: 2 }}
                        resizeMode="contain"
                    />
                );
            })}
        </View>
    );
}

export default function NewSec({ book_data }) {
    return(
        <View style={styles.NewSec_container}>
            <View style={styles.NewSec_title_container}>
                <Text style={styles.NewSec_title_text}>Newest </Text>
            </View>
            <View style={styles.NewSec_FlatList_container}>
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
                        <View style={styles.NewSec_book_container}>
                            <View style={styles.NewSec_book_Image_container}>
                                <Image source={item.img} style={styles.NewSec_book_Image} resizeMode="cover"/>
                            </View>
                            <Rating rate={item.rate}/>
                            <Text style={styles.NewSec_book_Title}>{item.title}</Text>
                            <Text style={styles.NewSec_book_Author}>{item.Author}</Text>
                        </View>
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    NewSec_container:{
        width: "100%",
        height: 400,
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    NewSec_title_container:{
        width: "100%",
        height: "10%",
        paddingLeft: "5%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    NewSec_title_text:{
        fontSize: 24,
        fontWeight: "bold",
    },
    NewSec_FlatList_container:{
        width: "100%",
        height: "90%",
        marginLeft: "5%",
    },
    NewSec_book_container:{
        display: "flex",
        justifyContent: "space-around",
        width: 200,
        height: 350,
        marginRight: 15,
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    NewSec_book_Image_container:{
        width: "100%",
        height: "85%",
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    NewSec_book_Image:{
        height: "100%",
        width: "100%",
        borderRadius: 10,
    },
    NewSec_book_rate_container:{
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
    },
    NewSec_book_Title:{
        fontSize: 16,
        fontWeight: "bold",
    },
    NewSec_book_Author:{
        fontSize: 12,
    },
});