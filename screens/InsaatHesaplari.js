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
            İnşaat Hesaplamaları
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("BoslukHacmiHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Boşluk</Text>
            <Text>Hacmi</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("SuMuhtevasiHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Su</Text>
              <Text>Muhtevası</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("MutlakBasincHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Mutlak</Text>
            <Text>Basınç</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KinematikVizkoziteHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Kinematik</Text>
            <Text>Vizkozite</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("AsmaTavanHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Asma</Text>
            <Text>Tavan</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("GazbetonDuvarHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Gazbeton</Text>
            <Text>Duvar</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ParkeMaliyetHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Parke</Text>
            <Text>Maaliyet</Text>
              <Text>Hesaplama</Text>
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
