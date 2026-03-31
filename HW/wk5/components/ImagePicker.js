import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('抱歉', '我們需要相簿權限才能選取照片！');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true, // 開啟裁剪功能
        aspect: [4, 3],
        quality: 0.4,        // 壓縮品質
        base64: true,        // 要求回傳 Base64 字串
    });

    if (!result.canceled) {
        const base64String = `data:image/jpeg;base64,${result.assets[0].base64}`;

        return base64String;
    }
    return null;
};

export { pickImage };