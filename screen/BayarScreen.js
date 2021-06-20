import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button,} from "react-native-elements";
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
  },
  labelInput: {
    color: "red"
  }
});

class BayarScreen extends Component {
  constructor(){
    super();
    this.state = {
      bayar:"",
      harga:"",
      diskon:"",
      ppn:"",
      result: ""
    }
  }

  hitungBayar = () => {
    let harga = Number(this.state.harga);
    let diskon = Number(this.state.diskon);
    let ppn = Number(this.state.ppn);

    let b = harga - (diskon / 100 * harga ) + (ppn / 100 * harga);
    this.setState({bayar : b});
  }

    render(){
      return(
       <View>
          <TopHeader navigation={this.props.navigation} title="Bayar" />
          <View style={styles.container}>
           <Text h4>Bayar</Text>

           <Input
             label="Harga Barang" labelStyle={styles.labelInput} keyboardType="numeric"
             containerStyle={styles.input}
              onChangeText={(value) => this.setState({harga: value}) }
              value={this.state.harga.toString()} />
            <Input
              label="Diskon" labelStyle={styles.labelInput} keyboardType="numeric"
              containerStyle={styles.input}
              onChangeText={(value) => this.setState({diskon: value}) }
              value={this.state.diskon.toString()} />
            <Input
              label="PPN" labelStyle={styles.labelInput} keyboardType="numeric"
              containerStyle={styles.input}
              onChangeText={(value) => this.setState({ppn: value}) }
              value={this.state.ppn.toString()} />

            <Button containerStyle={styles.input} title="Hitung Bayar"
              onPress={() => {this.hitungBayar(); }} />

            <Text style={styles.result}>Harga Akhir = {this.state.bayar}</Text>
          </View>
        </View>
      )
    }
  }
  export default BayarScreen;
