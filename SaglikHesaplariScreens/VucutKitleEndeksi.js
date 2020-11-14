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

export default class VucutKitleEndeksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      mesaj: "",
      sonuc: 0,
    };

    this.sonucMethod = this.sonucMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  sonucMethod() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    var sonuc = number2 / (number1 * number1) * 10000;
    sonuc = Number(sonuc.toFixed(2))

    if(sonuc<18.5){
        mesaj = "Zayıfsınız";
        this.setState({
            mesaj: mesaj,
          });
    }

     else if(18.5<sonuc && sonuc<24.9){
         mesaj = "Normal Kilodasınız";
         this.setState({
             mesaj: mesaj,
           });
     }

     if(24.9<sonuc && sonuc<29.9){
         mesaj = "İdeal Kilonun Üzerindesiniz";
         this.setState({
             mesaj: mesaj,
           });
     }

     if(29.9<sonuc && sonuc<35){
         mesaj = "Kilonuza Göre Obezsiniz.";
         this.setState({
             mesaj: mesaj,
           });
     }

    if(sonuc>35){ 
        mesaj = "Doktorunuza danışıp en kısa sürede aksiyon almalısınız.";
        this.setState({
            mesaj: mesaj,
          });
    }

    this.setState({
      sonuc: sonuc,
    });
  }

  clearMethod() {
    const sonuc = 0;
    const input1 = "";
    const input2 = "";
    const mesaj = "";

    this.setState({
      sonuc: sonuc,
      input1:input1,
      input2:input2,
      mesaj: mesaj
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Vücut Kitle Endeksi Hesaplama
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

          <TextInput
            style={styles.input}
            placeholder="Kg"
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

          <Text style={styles.sampleText}> BMI : {this.state.sonuc}</Text>
              <Text style={{marginTop: 20, fontSize: 20}}> Mesaj : {this.state.mesaj}</Text>
          
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
