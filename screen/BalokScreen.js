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

class BalokScreen extends Component {

  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      p: 0,
      t: 0,
      b: 0,
    }
  }

  hitungLuas = () => {
    // ambil dan konversi nilai p ke bentuk numeric
    let p = Number(this.state.p);
    // ambil dan konversi nilai t ke bentuk numeric
    let b = Number(this.state.b);
    let l = p * b;
    //mengganti nilai state luas dengan hasil perhitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    // ambil dan konversi nilai r ke bentuk numeric
    let p = Number(this.state.p);
    // ambil dan konversi nilai t ke bentuk numeric
    let t = Number(this.state.t);
    // ambil dan konversi nilai l ke bentuk numeric
    let b = Number(this.state.b);
    let v = p * b * t;
    //mengganti nilai state volume dengan hasil perhitungan
    this.setState({volume : v});
  }

  render(){
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Balok" />
        <View style={styles.container}>
          <Text h4>Bangun Ruang Balok</Text>
          <Input
            label="Nilai Panjang Balok" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({p: value}) }
            value={this.state.p.toString()}
           />
          <Input
            label="Nilai Tinggi Balok" labelStyle={styles.labelInput} keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={(value) => this.setState({t: value}) }
            value={this.state.t.toString()}
           />
            <Input
              label="Nilai Lebar Balok" labelStyle={styles.labelInput} keyboardType="numeric"
              containerStyle={styles.input}
              onChangeText={(value) => this.setState({b: value}) }
              value={this.state.b.toString()}
            />
          <Button containerStyle={styles.input} title="Hitung"
            onPress={() => {this.hitungLuas(); this.hitungVolume();}}
          />

          <Text style={styles.result}>Luas Tabung = {this.state.luas}</Text>
          <Text style={styles.result}>Volume Tabung = {this.state.volume}</Text>
        </View>
      </View>
    )
  }
}

export default BalokScreen;
