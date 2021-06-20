import React, {Component} from "react";
import {View,Picker} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";

class HexaScreen extends Component {
    constructor () {
        super();
        this.state = {
            option: "2",
            desimal: "",
            result: ""
        }
    }

    //fungsi konversi desimal -> biner
    convertToBiner = () => {
        //konversi ke biner
        let hasil = parseInt(this.state.desimal,16).toString(2);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> octal
    convertToOctal = () => {
        //konversi ke octal
        let hasil = parseInt(this.state.desimal,16).toString(8);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> biner
    convertToDesimal = () => {
        //konversi ke Hexa
        let hasil = parseInt(this.state.desimal,16).toString(10);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> biner
    convert = () => {
        if(this.state.option === "2") {
            this.convertToBiner();
        }
        else if(this.state.option === "8") {
            this.convertToOctal();
        }
        else if(this.state.option === "10") {
            this.convertToDesimal();
        }
    }

    render() {
        return(
            <View>
            <TopHeader navigation={this.props.navigation}
            title="Konversi Hexa desimal"/>
        <View style={{padding:10}}>
             <Text h4>Konversi Hexa Desimal</Text>
             <Text h5>Opsi Bilangan</Text>
             <Picker
             selectedValue={this.state.option}
             style={{width:300, height:250}}
             onValueChange={(value) => this.setState({option: value})}
             >

             <Picker.Item label="Biner" value="2"/>
             <Picker.Item label="Octal" value="8"/>
             <Picker.Item label="Hexadesimal" value="16"/>
             </Picker>

             <Input label="Masukan nilai Biner"
             value={this.state.desimal}
             onChangeText={(value) => this.setState({desimal: value})}/>

             <Button title="Convert" onPress={this.convert} />
             <Text h5>Hasil: {this.state.result} </Text>
         </View>
         </View>
        )
    }
}
export default HexaScreen;
