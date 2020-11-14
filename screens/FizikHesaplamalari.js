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
            Fizik Hesaplamaları
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("BasincHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Basınç</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("HookeYasasiHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Hooke</Text>
              <Text>Yasası</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("OrtalamaHizHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Ortalama</Text>
            <Text>Hız</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("PotansiyelEnerjiHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Potansiyel</Text>
            <Text>Enerji</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KinetikEnerjiHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Kinetik</Text>
            <Text>Enerji</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("SesHiziHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Ses</Text>
            <Text>Hızı</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("TorkHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Tork</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("YogunlukHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Yoğunluk</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KiloHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Kilogram</Text>
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
