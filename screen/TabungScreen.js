import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";

const style = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center"
    },
    input:{
        marginTop:20
    },
    labelInput:{
        color: "maroon"
    },
    result: {
        fontSize:25,
        fontWeight:"bold",
        marginTop:10,
        color: "maroon"
    }
});

class TabungScreen extends Component {

    constructor(){
        super();
        this.state = {
            luas: 0,
            volume: 0,
            r: 0,
            t: 0,
        }
    }

    hitungLuas = () => {
        // ambil dan konversi nilai r ke bentuk numeric
        let r = Number(this.state.r);

        // ambil dan konversi nilai t ke bentuk numeric
        let t = Number(this.state.t);

        let l = (2 * 3.14 * r * r) + (2 * 3.14 * r * t);

        //mengganti nilai state luas dengan hasil perhitungan
        this.setState({luas : l});
      }

      hitungVolume = () => {
        // ambil dan konversi nilai r ke bentuk numeric
        let r = Number(this.state.r);

        // ambil dan konversi nilai t ke bentuk numeric
        let t = Number(this.state.t);
        let v = 3.14 * r * r * t;

        //mengganti nilai state volume dengan hasil perhitungan
        this.setState({volume : v});
      }


    render() {
        return (
            <View>
                <TopHeader navigation={this.props.navigation} title="Tabung" />
                <View style={StyleSheet.container}>
                <Text>Perumusan Tabung</Text>
                    <Input
                        label="Nilai Jari-Jari Tabung" labelStyle={StyleSheet.labelInput} keyboardType="numeric"
                        containerStyle={style.input}
                        onChangeText={(value) => this.setState({r: value})}
                        value={this.state.r.toString()}
                    />
                    <Input
                        label="Nilai Tinggi Tabung" labelStyle={StyleSheet.labelInput} keyboardType="numeric"
                        containerStyle={style.input}
                        onChangeText={(value) => this.setState({t: value})}
                        value={this.state.t.toString()}
                    />
                    <Button containerStyle={style.input} title="Hitung"
                    onPress={() =>{this.hitungLuas(); this.hitungVolume();}}/>

                    <Text style={style.result}>Luas Tabung = {this.state.luas}</Text>
                    <Text style={style.result}>Volume Tabung = {this.state.volume}</Text>
                </View>
            </View>
        )
    }
}

export default TabungScreen;
