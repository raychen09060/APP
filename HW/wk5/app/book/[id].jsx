import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { BookSec, WishlistSec_books } from '../../data/books';
import { Rating } from "../../components/NewSec";
import Footer from '../../components/Footer';

export default function Books(){
    const { id } = useLocalSearchParams();
    const allBooks = BookSec.flatMap((section) => section.data);
    const books = allBooks.find((item) => item.id === id);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if(id) {
            setIsBookmarked(WishlistSec_books.includes(id));
        }
    }, [id]);

    const handleBookmarkToggle = () => {
        if (!id) return;
        const index = WishlistSec_books.indexOf(id);
        if (index > -1) {
            WishlistSec_books.splice(index, 1);
        }
        else {
            WishlistSec_books.push(id);
        }
        setIsBookmarked(!isBookmarked);
    };

    return (
        <View style={styles.container}>
            <Stack.Screen
                options = {{
                    headerRight: () => (
                        <TouchableOpacity onPress={handleBookmarkToggle}>
                            <View style={styles.icon_container}>
                                <Image source={isBookmarked ? require('../../images/icon_nav_bookmark_actived.png') : require('../../images/icon_bookmark.png')} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <ScrollView style={styles.scroll}
                contentContainerStyle={{paddingBottom: 50}}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.Book_container}>
                    <View style={styles.Book_Image_container}>
                        <Image source={books.img} style={styles.Book_Image} resizeMode="cover"/>
                    </View>
                    <View style={styles.Book_Title_container}>
                        <Text style={styles.Book_Title}>{books.title}</Text>
                    </View>
                    <View style={styles.Book_Author_container}>
                        <Text style={styles.Book_Author}>{books.Author}</Text>
                    </View>
                    {typeof books.rate === 'number' && (
                        <View style={styles.Book_Rating_container}>
                            <Rating rate={books.rate}/>
                            <Text>{books.rate.toFixed(1)}/5.0</Text>
                        </View>
                    )}
                    <View style={styles.Book_Description_container}>
                        <Text style={styles.Book_Description}>{books.description}</Text>
                    </View>
                    <View style={styles.Book_Cost_container}>
                        <Text style={styles.Book_Cost}>BUY NOW FOR {books.cost}</Text>
                    </View>
                </View>
            </ScrollView>
            <Footer page="book"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        backgroundColor: '#ffffff',
/*         borderWidth: 2,
        borderColor: "#ff0000", */
    },
    icon_container:{
        display: "flex",
        width: 40,
        height: 40,
/*         alignItems: "center",
        justifyContent: "center", */
    },
    icon:{
        width: "80%",
        height: "80%",
    },
    scroll: {
        flex: 1,
        width: "100%",
    },
    Book_container: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
/*         borderWidth: 2,
        borderColor: "#00ff00", */
    },
    Book_Image_container:{
        width: 200,
        height: 300,
/*         borderWidth: 2,
        borderColor: "#0000ff", */
    },
    Book_Image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    Book_Title_container: {
        display: "flex",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    Book_Title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    Book_Author_container: {
        display: "flex",
        width: "100%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    Book_Author: {
        fontSize: 14,
    },
    Book_Rating_container: {
        display: "flex",
        width: "40%",
        height: 20,
        justifyContent: "space-around",
        flexDirection: "row",

    },
    Book_Description_container: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    Book_Description: {
        fontSize: 14,
        textAlign: "center",
    },
    Book_Cost_container: {
        display: "flex",
        width: 200,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#6200EE",
        borderRadius: 10,
    },
    Book_Cost: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
    },
});
