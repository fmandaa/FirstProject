import React, {Component} from "react";
import {View,Picker} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";

class OctalScreen extends Component {
    constructor () {
        super();
        this.state = {
            option: "2",
            desimal: "",
            result: ""
        }
    }

    //fungsi konversi desimal -> biner
    convertToDesimal = () => {
        //konversi ke biner
        let hasil = parseInt(this.state.desimal,8).toString(10);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> octal
    convertToBiner = () => {
        //konversi ke octal
        let hasil = parseInt(this.state.desimal,8).toString(2);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> biner
    convertToHexa = () => {
        //konversi ke Hexa
        let hasil = parseInt(this.state.desimal,8).toString(16);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> biner
    convert = () => {
        if(this.state.option === "10") {
            this.convertToDesimal();
        }
        else if(this.state.option === "2") {
            this.convertToBiner();
        }
        else if(this.state.option === "16") {
            this.convertToHexa();
        }
    }

    render() {
        return(
            <View>
            <TopHeader navigation={this.props.navigation}
            title="Konversi Octal"/>
        <View style={{padding:10}}>
             <Text h4>Konversi Octal</Text>
             <Text h5>Opsi Bilangan</Text>
             <Picker
             selectedValue={this.state.option}
             style={{width:300, height:250}}
             onValueChange={(value) => this.setState({option: value})}
             >

             <Picker.Item label="Desimal" value="10"/>
             <Picker.Item label="Biner" value="2"/>
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
export default OctalScreen;
