import React, {Component} from "react";
import {View,Picker} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";

class DesimalScreen extends Component {
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
        let hasil = parseInt(this.state.desimal,10).toString(2);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> octal
    convertToOctal = () => {
        //konversi ke octal
        let hasil = parseInt(this.state.desimal,10).toString(8);
        this.setState({result: hasil});
    }

    //fungsi konversi desimal -> biner
    convertToHexa = () => {
        //konversi ke Hexa
        let hasil = parseInt(this.state.desimal,10).toString(16);
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
        else if(this.state.option === "16") {
            this.convertToHexa();
        }
    }

    render() {
        return(
            <View>
            <TopHeader navigation={this.props.navigation}
            title="Konversi Desimal"/>
        <View style={{padding:10}}>
             <Text h4>Konversi Desimal</Text>
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

             <Input label="Masukan nilai desimal"
             value={this.state.desimal}
             onChangeText={(value) => this.setState({desimal: value})}/>

             <Button title="Convert" onPress={this.convert} />
             <Text h5>Hasil: {this.state.result} </Text>
         </View>
         </View>
        )
    }
}
export default DesimalScreen;
