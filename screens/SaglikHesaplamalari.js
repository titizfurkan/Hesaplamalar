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
           Sağlık Alanındaki Hesaplamalar
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("VucutKitleEndeksi")}
          >
            <View style={styles.inner}>
            <Text>Vücut</Text>
            <Text>Kitle</Text>
              <Text>Endeksi</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("GunlukSuIhtiyaci")}
          >
            <View style={styles.inner}>
              <Text>Günlük</Text>
              <Text>Su</Text>
              <Text>İhtiyacı</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("BazalMetabolizmaHizi")}
          >
            <View style={styles.inner}>
            <Text>Bazal</Text>
            <Text>Metabolizma</Text>
              <Text>Hızı</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("SigaraMaliyetHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Sigara</Text>
            <Text>Maliyet</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KanHacmiHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Kan</Text>
            <Text>Hacmi</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("IdealKiloHesaplama")}
          >
            <View style={styles.inner}>
            <Text>İdeal</Text>
            <Text>Kilo</Text>
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
