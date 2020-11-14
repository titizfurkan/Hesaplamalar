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
            İstatistik Hesaplamaları
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("BinomDagilimHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Binom</Text>
            <Text>Dağılım</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("GeometrikDagilimHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Geometrik</Text>
              <Text>Dağılım</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("PermutasyonHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Permutasyon</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KombinasyonHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Kombinasyon</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("IhtimalHesaplama")}
          >
            <View style={styles.inner}>
              <Text>İhtimal</Text>
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
    height: "50%",
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
