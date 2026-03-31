import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import PopularSec from '../components/PopularSec';
import NewSec from '../components/NewSec';
import Footer from '../components/Footer';
import { BookSec } from '../data/books';

export default function BookStore() {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={ BookSec }
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.section_container}>
            {item.id === "Popular" ? <PopularSec book_data={item.data}/> : <NewSec book_data={item.data}/>}
          </View>
        )}
      />
      <Footer page="home"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section_container: {
    width: "100%",
    marginBottom: 10,
/*     borderWidth: 2,
    borderColor: "#ff0000", */
  },
});

