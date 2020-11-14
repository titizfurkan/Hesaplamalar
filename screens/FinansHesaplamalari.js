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
            Finansal Hesaplamalar
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FaizVergiKarHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Faiz Vergi</Text>
            <Text>Öncesi Kar</Text>
              <Text>Hesaplamala</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KrediHesaplari")}
          >
            <View style={styles.inner}>
              <Text>Kredi</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("AylikFaizHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Aylık</Text>
            <Text>Faiz</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("NetKarMarji")}
          >
            <View style={styles.inner}>
            <Text>Net</Text>
            <Text>Kar</Text>
              <Text>Marjı</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("GelecekDegerHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Gelecek</Text>
            <Text>Değer</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("YatirimSermayeGetirisi")}
          >
            <View style={styles.inner}>
            <Text>Yatırım</Text>
            <Text>Sermaye</Text>
              <Text>Getirisi</Text>
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
