import React, {Component} from "react";
import {View, Text} from "react-native";
import TopHeader from "../component/TopHeader";

class BerandaScreen extends Component {
    render() {
        return (
            <View>
                <TopHeader navigation={this.props.navigation} title="Beranda" />
                <Text>Manda</Text>
            </View>
        )
    }
}
export default BerandaScreen;
