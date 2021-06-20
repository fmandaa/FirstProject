import React, {Component} from "react";
import {View, Picker} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";
// Load komponen TopHeader yang telah dibuat sebelumnya

class KonversiScreen extends Component {
  constructor() {
    super();
    this.state = {
      option : "y",
      r : 0,
      result : ""
    }
  }

  // fungsi konversi rupiah -> usd
  convertToUSD = () => {
    let u = 0.000073 * Number(this.state.r);
    this.setState({result: u});
  }
  // fungsi konversi rupiah -> yen
  convertToYen = () => {
    let y = 0.00080 * Number(this.state.r);
    this.setState({result: y});
  }
  // fungsi konversi rupiah -> euro
  convertToEuro = () => {
    let e = 0.000067 * Number(this.state.r);
    this.setState({result: e});
  }

  convert = () => {
    if (this.state.option === "u") {
      this.convertToUSD();
    }
    else if (this.state.option === "y") {
      this.convertToYen();
    }
    else if (this.state.option === "e") {
      this.convertToEuro();
    }
  }

  render() {
    return (
      <View>
        <TopHeader
          navigation={this.props.navigation}
          title= "Konversi Mata Uang"/>

      <View style={{padding:10}}>
        <Text h4>Konversi Mata Uang</Text>
        <Picker
          selectedValue={this.state.option}
          style={{width: 100, height: 50}}
          onValueChange={(value) => this.setState({option: value})}>

          <Picker.Item label="USD" value="u" />
          <Picker.Item label="Yen" value="y" />
          <Picker.Item label="Euro" value="e" />
        </Picker>

        <Input label ="Masukkan Nilai Mata Uang (Rupiah)"
          value={this.state.r}
          onChangeText={(value) => this.setState({r: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
      </View>
    </View>

    )
  }

}

export default KonversiScreen;
