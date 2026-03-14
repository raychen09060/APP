import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated} from "react-native";

export default function Page() {
  const splitAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(splitAnim, {
      toValue: 1,           
      duration: 1000,     
      delay: 2000,     
      useNativeDriver: true,   
    }).start();
  }, [splitAnim]);

  const titleTranslateX = splitAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-70, -30]
  });

  const logoTranslateX = splitAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 10]
  })

  const titleOpacity = splitAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const logoScale = splitAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7]
  });

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.menu_container}>
          <Text style={styles.menu}>☰</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Animated.Image source={require("./img/head.jpg")} style={[styles.logo, { transform: [{ translateX: logoTranslateX }, { scale: logoScale }] }]}></Animated.Image>
        <Animated.View style={[styles.title_container, {opacity: titleOpacity, transform: [{ translateX: titleTranslateX }] }]}>
          <Text style={styles.title}>陳逸凱</Text>
          <Text style={styles.subtitle}>NSYSU</Text>
          <Text style={styles.subtitle}>CSE</Text>
          <Text style={styles.sub_subtitle}>B133245002</Text>
        </Animated.View>
      </View>
    </View>        
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    maxWidth: "960px",
    alignItems: "center",
  },
  header:{
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  menu_container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    marginLeft: 20,
    marginTop: 40,
  },
  menu:{
    fontSize: 25,    
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "65%",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: 5,
  },
  title_container:{
    display: "flex",
    alignItems: "flex-end",
    width: "30%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
  },
  sub_subtitle: {
    fontSize: 14,
  },
});
