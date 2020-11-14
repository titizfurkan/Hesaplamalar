import React from "react";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ navigation, style }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#ffffff", "#000000"]}>
      <Block
        style={{
          ...style,
        }}
      >
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Birim Dönüştürücü
          </Text>
        </View>

        <View style={styles.container}>

        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KuvvetBirimCevirici")}
          >
            <View style={styles.inner}>
               <Text>Kuvvet</Text>
               <Text>Birim</Text>
               <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("AgirlikBirimCevirici")}
          >
            <View style={styles.inner}>
              <Text>Ağırlık</Text>
              <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("BasincBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Basınç</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("HizBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Hız</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("AlanBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Alan</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("UzunlukBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Uzunluk</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ZamanBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Zaman</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("SicaklikBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Sıcaklık</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("EnerjiBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Enerji</Text>
            <Text>Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Block>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    top: 15
  },
  container: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "33%",
    height: "33%",
    padding: 5,   
  },
  inner: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
});
