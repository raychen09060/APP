import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pickImage } from '../components/ImagePicker';
import Header from '../components/Header';


export default function Home() {
  const [photos, setPhotos] = React.useState([]);
  const handleSelectPhoto = async () => {
    const base64String = await pickImage();
    setPhotos(prevPhotos => [...prevPhotos, base64String]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.gallery_container}>
        <View style={styles.button_container}>
          <Pressable style={({ pressed }) => [styles.upload_button, { backgroundColor: pressed ? '#a0a0a0' : '#ffffff' }]} onPress={handleSelectPhoto}>
            <Text style={styles.upload_button_text}>Upload</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.upload_button, { backgroundColor: pressed ? '#a0a0a0' : '#ffffff' }]} onPress={() => setPhotos([])}>
            <Text style={styles.upload_button_text}>Clear</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.images_container} showsVerticalScrollIndicator={false}>
          {photos.map((photo, index) => (
            <Image 
              key={index}
              source={{ uri: photo }} 
              resizeMode="cover" 
              style={styles.images} 
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  gallery_container: {
    flex: 1,
    alignItems: "center",
  },
  button_container: {
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  upload_button: {
    width: 100,
    height: 40,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
  },
  upload_button_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  images_container: {
    flex: 1,
    },
  images: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

