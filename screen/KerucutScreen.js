import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";

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

class KerucutScreen extends Component {

  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      r: 0,
      g: 0,
      t: 0,
    }
  }

  hitungLuas = () => {
    // ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    // ambil dan konversi nilai s ke bentuk numeric
    let g = Number(this.state.g);

    let l = (3.14 * r * r) + (3.14 * r * g);

    //mengganti nilai state luas dengan hasil perhitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    // ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    // ambil dan konversi nilai t ke bentuk numeric
    let t = Number(this.state.t);
    let v = 1/3 * 3.14 * r * r * t;

    //mengganti nilai state volume dengan hasil perhitungan
    this.setState({volume : v});
  }

  render(){
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Kerucut" />
        <View style={styles.container}>
          <Text h4>Perumusan Kerucut</Text>

          <Input
            label="Nilai Jari-Jari Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({r: value}) }
            value={this.state.r.toString()} />
          <Input
            label="Nilai Tinggi Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({t: value}) }
            value={this.state.t.toString()} />
            <Input
              label="Nilai Garis Pelukis Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
              containerStyle={styles.input}
              onChangeText={(value) => this.setState({g: value}) }
              value={this.state.g.toString()} />
          <Button containerStyle={styles.input} title="Hitung"
            onPress={() => {this.hitungLuas(); this.hitungVolume();}} />

          <Text style={styles.result}>Luas Tabung = {this.state.luas}</Text>
          <Text style={styles.result}>Volume Tabung = {this.state.volume}</Text>
        </View>
      </View>
    )
  }
}
export default KerucutScreen;
