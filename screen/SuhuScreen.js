import React, {Component} from "react";
import {View, Picker} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";
// Load komponen TopHeader yang telah dibuat sebelumnya

class SuhuScreen extends Component {
  constructor() {
    super();
    this.state = {
      option : "f",
      c : 0,
      result : ""
    }
  }

  // fungsi konversi celsius -> fahrenheit
  convertToFahrenheit = () => {
    let f = 9/5 * Number(this.state.c) + 32;
    this.setState({result: f});
  }
  // fungsi konversi celsius -> reamur
  convertToReamur = () => {
    let r = 4/5 * Number(this.state.c);
    this.setState({result: r});
  }
  // fungsi konversi celsius -> kelvin
  convertToKelvin = () => {
    let k = Number(this.state.c) + 273;
    this.setState({result: k});
  }

  convert = () => {
    if (this.state.option === "f") {
      this.convertToFahrenheit();
    }
    else if (this.state.option === "r") {
      this.convertToReamur();
    }
    else if (this.state.option === "k") {
      this.convertToKelvin();
    }
  }

  render() {
    return (
      <View>
        <TopHeader
          navigation={this.props.navigation}
          title= "Konversi Suhu"/>

      <View style={{padding:10}}>
        <Text h4>Konversi Suhu</Text>
        <Picker
          selectedValue={this.state.option}
          style={{width: 300, height: 250}}
          onValueChange={(value) => this.setState({option: value})}>

          <Picker.Item label="Fahrenheit" value="f" />
          <Picker.Item label="Reamur" value="r" />
          <Picker.Item label="Kelvin" value="k" />
        </Picker>

        <Input label ="Masukkan Nilai Suhu (Celcius)"
          value={this.state.c}
          onChangeText={(value) => this.setState({c: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
      </View>
    </View>

    )
  }

}

export default SuhuScreen;
