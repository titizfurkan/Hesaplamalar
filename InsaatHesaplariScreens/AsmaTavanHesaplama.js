import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

export default class AsmaTavanHesaplama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      sonuc: 0,
      sonuc2: 0,
      sonuc3:0,
    };

    this.sonucMethod = this.sonucMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  sonucMethod() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    var sonuc = (number1 / 100) * (number2 / 100);
    var sonuc2 = sonuc * 27;
    sonuc2 = Number(sonuc2.toFixed(2));
    var sonuc3 = sonuc * 8.2;
    sonuc3 = Number(sonuc3.toFixed(2));

    this.setState({
      sonuc: sonuc,
      sonuc2: sonuc2,
      sonuc3: sonuc3,
    });
  }

  clearMethod() {
    const sonuc = 0;
    const sonuc2 = 0;
    const sonuc3 = 0;
    const input1 = "";
    const input2 = "";

    this.setState({
      input1: input1,
      input2: input2,
      sonuc: sonuc,
      sonuc2: sonuc2,
      sonuc3: sonuc3,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
              Asma Tavan Hesaplama
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Genişlik(cm)"
            onChangeText={(text) => {
              this.setState({
                input1: text,
              });
            }}
            value={this.state.input1}
          />

          <TextInput
            style={styles.input}
            placeholder="Uzunluk(cm)"
            onChangeText={(text) => {
              this.setState({
                input2: text,
              });
            }}
            value={this.state.input2}
          />

          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button
                onPress={this.sonucMethod}
                color="#9fb6cd"
                title="Hesapla"
              />
            </View>
          </View>
          <View style={styles.buttonClear}>
            <Button
              onPress={this.clearMethod}
              color="#cd853f"
              title="Temizle"
            />
          </View>

          <View style={{ padding: 10 }}></View>

          <Text style={styles.sampleText}> Kaplanacak Alan(m2) : {this.state.sonuc}</Text>
          <Text style={styles.sampleText}> Malzeme Maliyeti : {this.state.sonuc2}</Text>
          <Text style={styles.sampleText}> Derz Bandı/Alçı Maliyeti : {this.state.sonuc3}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  contentWrapper: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: "auto",
    margin: 5,
    borderRadius: 15,
  },
  buttonClear: {
    width: "auto",
    height: "auto",
    margin: 5,
  },
  input: {
    height: 40,
    fontSize: 20,
    marginBottom: 15,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  sampleText: {
    height: 45,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#4f4f4f",
    fontSize: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
