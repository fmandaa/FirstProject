import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import BerandaScreen from "./screen/BerandaScreen";
// load file BerandaScreen
import TabungScreen from "./screen/TabungScreen";
// load file TabungScreen
import KerucutScreen from "./screen/KerucutScreen";
// load file KerucutScreen
import KubusScreen from "./screen/KubusScreen";
import BolaScreen from "./screen/BolaScreen";
import BalokScreen from "./screen/BalokScreen";
import DesimalScreen from "./screen/DesimalScreen";
import BinerScreen from "./screen/BinerScreen";
import OctalScreen from "./screen/OctalScreen";
import HexaScreen from "./screen/HexaScreen";
import SuhuScreen from "./screen/SuhuScreen";
import BmiScreen from "./screen/BmiScreen";
import KonversiScreen from "./screen/KonversiScreen";
import BayarScreen from "./screen/BayarScreen";
// konfigurasi navigasi yang akan dibuat dan load tampilan pada setiap navigasinya

const AppNavigator = createDrawerNavigator({
  Beranda : {
    screen: BerandaScreen
  },
  Tabung : {
    screen: TabungScreen
  },
  Kerucut : {
    screen: KerucutScreen
  },
  Kubus : {
    screen: KubusScreen
  },
  Bola : {
    screen: BolaScreen
  },
  Balok : {
    screen: BalokScreen
  },
  Desimal : {
    screen: DesimalScreen
  },
  Biner : {
    screen: BinerScreen
  },
  Octal : {
    screen: OctalScreen
  },
  Hexa : {
    screen: HexaScreen
  },
  Suhu : {
    screen: SuhuScreen
  },
  Bmi : {
    screen: BmiScreen
  },
  Konversi : {
    screen: KonversiScreen
  },
  Bayar : {
    screen: BayarScreen
  },
});


export default createAppContainer(AppNavigator);
