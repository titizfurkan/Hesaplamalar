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

export default class KiloHesaplama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      merkur: 0,
      venus: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      neptun: 0,
      uranus: 0,
    };

    this.sonucMethod = this.sonucMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  sonucMethod() {
    const number1 = parseFloat(this.state.input1);

    var merkur = number1 * 0.38;
    var venus = number1 * 0.91;
    var mars = number1 * 0.38;
    var jupiter = number1 * 2.34;
    var saturn = number1 * 0.93;
    var neptun = number1 * 1.12;
    var uranus = number1 * 0.92;

    this.setState({
      merkur: merkur,
      venus: venus,
      mars: mars,
      jupiter: jupiter,
      saturn: saturn,
      neptun: neptun,
      uranus: uranus,
    });
  }

  clearMethod() {
    const merkur = 0;
    const venus = 0;
    const mars = 0;
    const jupiter = 0;
    const saturn = 0;
    const neptun = 0;
    const uranus = 0;
    const input1 = "";
    const input2 = "";
    
    this.setState({
      merkur: merkur,
      venus: venus,
      mars: mars,
      jupiter: jupiter,
      saturn: saturn,
      neptun: neptun,
      uranus: uranus,
      input1:input1,
      input2:input2,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 15 }}>
              Diğer Gezegenlerdeki Kilonuz
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Dünyadaki Kg"
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

          <Text style={styles.sampleText}> Merkur : {this.state.merkur}</Text>
          <Text style={styles.sampleText}> Venüs : {this.state.venus}</Text>
          <Text style={styles.sampleText}> Mars : {this.state.mars}</Text>
          <Text style={styles.sampleText}> Jupiter : {this.state.jupiter}</Text>
          <Text style={styles.sampleText}> Satürn : {this.state.saturn}</Text>
          <Text style={styles.sampleText}> Neptun : {this.state.neptun}</Text>
          <Text style={styles.sampleText}> Uranus : {this.state.uranus}</Text>
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
