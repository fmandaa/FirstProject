import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";
// Load komponen TopHeader yang telah dibuat sebelumnya
const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center"
  },
  input: {
    marginTop:20
  },
  result: {
    fontSize:25,
    fontWeight:"bold",
    marginTop:10,
    color: "maroon"
  }
});
class BmiScreen extends Component {


  constructor(){
    super();
    this.state = {
      berat:0,
      m: "",
      h: "",
    }
  }

  hitungBerat = () => {
    // ambil dan konversi nilai m ke bentuk numeric
    let m = Number(this.state.m);

    // ambil dan konversi nilai h ke bentuk numeric
    let h = Number(this.state.h);

    let b = m / (h * h);

    //mengganti nilai state berat dengan hasil perhitungan
    if (b <= 18.5) {
    this.setState({berat : "Kurus"});
  }
    else if (b >= 18.5 && b <= 22.9) {
    this.setState({berat : "Ideal"});
  }
    else if (b >=23 && b <= 24.9) {
    this.setState({berat : "Overweight"});
  }
    else if (b >= 25) {
    this.setState({berat : "Obesitas"});
  }

  }


  render(){
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Bmi" />
        <View style={styles.container}>
          <Text h4>BMI</Text>

          <Input
            label="Massa" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({m: value}) }
            value={this.state.m.toString()} />
          <Input
            label="Tinggi" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({h: value}) }
            value={this.state.h.toString()} />

          <Button containerStyle={styles.input} title="Hitung"
            onPress={() => {this.hitungBerat();}} />

          <Text style={styles.result}>Berat Badan = {this.state.berat}</Text>
        </View>
      </View>
    )
  }
}

export default BmiScreen;
