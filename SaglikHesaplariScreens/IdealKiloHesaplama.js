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

export default class IdealKiloHesaplama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      sonuc: 0,
    };

    this.sonucMethod = this.sonucMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  sonucMethod() {
    const number1 = parseFloat(this.state.input1);

    var sonuc = 50 + (2.3 * (number1 / 2.54) - 60);

    this.setState({
      sonuc: sonuc,
    });
  }

  clearMethod() {
    const sonuc= 0;
    const input1 = "";

    this.setState({
        sonuc: sonuc,
      input1: input1,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            İdeal Kilo Hesaplama
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Cm"
            onChangeText={(text) => {
              this.setState({
                input1: text,
              });
            }}
            value={this.state.input1}
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

          <Text style={styles.sampleText}> Kg : {this.state.sonuc}</Text>
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
