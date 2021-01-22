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
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Hakkımızda</Text>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              İsim Soyisim : Abdullah Furkan Titiz
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Numara : 1611012033
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, top: 30 }}>
              İsim Soyisim : Mehmet Ali Kırmızıtaş
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16,  top: 30 }}>
              Numara : 1611012030
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, top: 60 }}>
              İsim Soyisim : Semih Kalkan
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, top: 60 }}>
              Numara : 1511012084
            </Text>
          </View>
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
    top: 15,
  },
  container: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    top: 30
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
    borderRadius: 10,
  }
});
