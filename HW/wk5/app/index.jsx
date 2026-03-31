import { StyleSheet, View, Text, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pickImage } from '../components/ImagePicker';
import Header from '../components/Header';


export default function Home() {
  const [photo, setPhoto] = React.useState(null);
  const handleSelectPhoto = async () => {
    const base64String = await pickImage();
    setPhoto(base64String);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.gallery_container}>
        <Pressable style={styles.upload_button} onPress={handleSelectPhoto}>
          <Text style={styles.upload_button_text}>Upload Images</Text>
        </Pressable>
        <View style={styles.image_container}>
          {photo && (
            <Image source={{ uri: photo }} resizeMode="cover" />
          )}
        </View>
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
  upload_button: {
    width: 200,
    height: 40,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
  },
  upload_button_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image_container: {
    width: 300,
    height: 200,
    backgroundColor: "#e0e0e0",
    borderRadius: 30,
    },
});

