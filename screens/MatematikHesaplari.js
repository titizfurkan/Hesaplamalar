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
            Matematik Hesaplari
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FaktoriyelHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Faktöriyel</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("DaireAlanCevreHesaplama")}
          >
            <View style={styles.inner}>
              <Text>Daire Alan</Text>
              <Text>Çevre</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("DikdortgenAlanCevreHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Dikdörtgen</Text>
            <Text>Alan Çevre</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("HataYuzdesiHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Hata</Text>
            <Text>Yüzdesi</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("KarekokHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Karekök</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("LogaritmaHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Logaritma</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("UcgenAlaniHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Üçgen</Text>
            <Text>Alanı</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("UsHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Üs</Text>
              <Text>Hesaplama</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("YuzdeHesaplama")}
          >
            <View style={styles.inner}>
            <Text>Yüzde</Text>
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
