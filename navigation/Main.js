import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";

// screens
import BirimDonusturucu from "../screens/BirimDonusturucu";
import FinansHesaplamalari from "../screens/FinansHesaplamalari";
import FizikHesaplamalari from "../screens/FizikHesaplamalari";
import InsaatHesaplari from "../screens/InsaatHesaplari";
import SaglikHesaplamalari from "../screens/SaglikHesaplamalari";
import MatematikHesaplari from "../screens/MatematikHesaplari";
import IstatistikHesaplamalari from "../screens/IstatistikHesaplamalari";
import Hakkimizda from "../screens/Hakkimizda";

//altscreens -> Birim Dönüştürücüler
import EnerjiBirimCevirici from "../BirimDonusturucuScreens/EnerjiBirimCevirici";
import SicaklikBirimCevirici from "../BirimDonusturucuScreens/SicaklikBirimCevirici";
import ZamanBirimCevirici from "../BirimDonusturucuScreens/ZamanBirimCevirici";
import UzunlukBirimCevirici from "../BirimDonusturucuScreens/UzunlukBirimCevirici";
import AlanBirimCevirici from "../BirimDonusturucuScreens/AlanBirimCevirici";
import HizBirimCevirici from "../BirimDonusturucuScreens/HizBirimCevirici";
import BasincBirimCevirici from "../BirimDonusturucuScreens/BasincBirimCevirici";
import AgirlikBirimCevirici from "../BirimDonusturucuScreens/AgirlikBirimCevirici";
import KuvvetBirimCevirici from "../BirimDonusturucuScreens/KuvvetBirimCevirici";

//altscreens -> Finans Hesaplamaları
import FaizVergiKarHesaplama from "../FinansHesaplariScreens/FaizVergiKarHesaplama";
import KrediHesaplari from "../FinansHesaplariScreens/KrediHesaplari";
import AylikFaizHesaplama from "../FinansHesaplariScreens/AylikFaizHesaplama";
import NetKarMarji from "../FinansHesaplariScreens/NetKarMarji";
import GelecekDegerHesaplama from "../FinansHesaplariScreens/GelecekDegerHesaplama";
import YatirimSermayeGetirisi from "../FinansHesaplariScreens/YatirimSermayeGetirisi";

//altscreens -> Fizik Hesaplamaları
import KinetikEnerjiHesaplama from "../FizikHesaplariScreens/KinetikEnerjiHesaplama";
import PotansiyelEnerjiHesaplama from "../FizikHesaplariScreens/PotansiyelEnerjiHesaplama";
import YogunlukHesaplama from "../FizikHesaplariScreens/YogunlukHesaplama";
import TorkHesaplama from "../FizikHesaplariScreens/TorkHesaplama";
import SesHiziHesaplama from "../FizikHesaplariScreens/SesHiziHesaplama";
import OrtalamaHizHesaplama from "../FizikHesaplariScreens/OrtalamaHizHesaplama";
import BasincHesaplama from "../FizikHesaplariScreens/BasincHesaplama";
import HookeYasasiHesaplama from "../FizikHesaplariScreens/HookeYasasiHesaplama";
import KiloHesaplama from "../FizikHesaplariScreens/KiloHesaplama";

//altscreens -> Sağlık Hesaplamaları
import VucutKitleEndeksi from "../SaglikHesaplariScreens/VucutKitleEndeksi";
import GunlukSuIhtiyaci from "../SaglikHesaplariScreens/GunlukSuIhtiyaci";
import BazalMetabolizmaHizi from "../SaglikHesaplariScreens/BazalMetabolizmaHizi";
import SigaraMaliyetHesaplama from "../SaglikHesaplariScreens/SigaraMaliyetHesaplama";
import KanHacmiHesaplama from "../SaglikHesaplariScreens/KanHacmiHesaplama";
import IdealKiloHesaplama from "../SaglikHesaplariScreens/IdealKiloHesaplama";

//altscreens -> İstatistik Hesaplamaları
import BinomDagilimHesaplama from "../IstatistikHesaplamaScreens/BinomDagilimHesaplama";
import GeometrikDagilimHesaplama from "../IstatistikHesaplamaScreens/GeometrikDagilimHesaplama";
import PermutasyonHesaplama from "../IstatistikHesaplamaScreens/PermutasyonHesaplama";
import KombinasyonHesaplama from "../IstatistikHesaplamaScreens/KombinasyonHesaplama";
import IhtimalHesaplama from "../IstatistikHesaplamaScreens/IhtimalHesaplama";

//altscreens -> Matematik Hesaplamaları
import DaireAlanCevreHesaplama from "../MatematikHesaplariScreens/DaireAlanCevreHesaplama";
import DikdortgenAlanCevreHesaplama from "../MatematikHesaplariScreens/DikdortgenAlanCevreHesaplama";
import FaktoriyelHesaplama from "../MatematikHesaplariScreens/FaktoriyelHesaplama";
import HataYuzdesiHesaplama from "../MatematikHesaplariScreens/HataYuzdesiHesaplama";
import KarekokHesaplama from "../MatematikHesaplariScreens/KarekokHesaplama";
import LogaritmaHesaplama from "../MatematikHesaplariScreens/LogaritmaHesaplama";
import UcgenAlaniHesaplama from "../MatematikHesaplariScreens/UcgenAlaniHesaplama";
import UsHesaplama from "../MatematikHesaplariScreens/UsHesaplama";
import YuzdeHesaplama from "../MatematikHesaplariScreens/YuzdeHesaplama";

//altscreens -> İnşaat Hesaplamaları
import BoslukHacmiHesaplama from "../InsaatHesaplariScreens/BoslukHacmiHesaplama";
import SuMuhtevasiHesaplama from "../InsaatHesaplariScreens/SuMuhtevasiHesaplama";
import MutlakBasincHesaplama from "../InsaatHesaplariScreens/MutlakBasincHesaplama";
import KinematikVizkoziteHesaplama from "../InsaatHesaplariScreens/KinematikVizkoziteHesaplama";
import AsmaTavanHesaplama from "../InsaatHesaplariScreens/AsmaTavanHesaplama";
import GazbetonDuvarHesaplama from "../InsaatHesaplariScreens/GazbetonDuvarHesaplama";
import ParkeMaliyetHesaplama from "../InsaatHesaplariScreens/ParkeMaliyetHesaplama";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Feather
              name="menu"
              size={18}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
          </Button>
        ),
      }}
    >
      {/* Ana Screens */}

      <Stack.Screen name="BirimDonusturucu">
        {(props) => <BirimDonusturucu {...props} />}
      </Stack.Screen>

      <Stack.Screen name="FinansHesaplamalari">
        {(props) => <FinansHesaplamalari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="FizikHesaplamalari">
        {(props) => <FizikHesaplamalari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="InsaatHesaplari">
        {(props) => <InsaatHesaplari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="SaglikHesaplamalari">
        {(props) => <SaglikHesaplamalari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="MatematikHesaplari">
        {(props) => <MatematikHesaplari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="IstatistikHesaplamalari">
        {(props) => <IstatistikHesaplamalari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="Hakkimizda">
        {(props) => <Hakkimizda {...props} />}
      </Stack.Screen>

      {/* Birim Dönüştürücüler */}

      <Stack.Screen name="EnerjiBirimCevirici">
        {(props) => <EnerjiBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="SicaklikBirimCevirici">
        {(props) => <SicaklikBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="ZamanBirimCevirici">
        {(props) => <ZamanBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="UzunlukBirimCevirici">
        {(props) => <UzunlukBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="AlanBirimCevirici">
        {(props) => <AlanBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="HizBirimCevirici">
        {(props) => <HizBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="BasincBirimCevirici">
        {(props) => <BasincBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="AgirlikBirimCevirici">
        {(props) => <AgirlikBirimCevirici {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KuvvetBirimCevirici">
        {(props) => <KuvvetBirimCevirici {...props} />}
      </Stack.Screen>

      {/* Finans Hesaplamaları */}

      <Stack.Screen name="FaizVergiKarHesaplama">
        {(props) => <FaizVergiKarHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KrediHesaplari">
        {(props) => <KrediHesaplari {...props} />}
      </Stack.Screen>

      <Stack.Screen name="AylikFaizHesaplama">
        {(props) => <AylikFaizHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="NetKarMarji">
        {(props) => <NetKarMarji {...props} />}
      </Stack.Screen>

      <Stack.Screen name="GelecekDegerHesaplama">
        {(props) => <GelecekDegerHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="YatirimSermayeGetirisi">
        {(props) => <YatirimSermayeGetirisi {...props} />}
      </Stack.Screen>

      {/* Fizik Hesaplamaları */}

      <Stack.Screen name="KinetikEnerjiHesaplama">
        {(props) => <KinetikEnerjiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="PotansiyelEnerjiHesaplama">
        {(props) => <PotansiyelEnerjiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="YogunlukHesaplama">
        {(props) => <YogunlukHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="TorkHesaplama">
        {(props) => <TorkHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="SesHiziHesaplama">
        {(props) => <SesHiziHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="OrtalamaHizHesaplama">
        {(props) => <OrtalamaHizHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="BasincHesaplama">
        {(props) => <BasincHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="HookeYasasiHesaplama">
        {(props) => <HookeYasasiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KiloHesaplama">
        {(props) => <KiloHesaplama {...props} />}
      </Stack.Screen>

      {/* Sağlık Hesaplamaları */}

      <Stack.Screen name="VucutKitleEndeksi">
        {(props) => <VucutKitleEndeksi {...props} />}
      </Stack.Screen>

      <Stack.Screen name="GunlukSuIhtiyaci">
        {(props) => <GunlukSuIhtiyaci {...props} />}
      </Stack.Screen>

      <Stack.Screen name="BazalMetabolizmaHizi">
        {(props) => <BazalMetabolizmaHizi {...props} />}
      </Stack.Screen>

      <Stack.Screen name="SigaraMaliyetHesaplama">
        {(props) => <SigaraMaliyetHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KanHacmiHesaplama">
        {(props) => <KanHacmiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="IdealKiloHesaplama">
        {(props) => <IdealKiloHesaplama {...props} />}
      </Stack.Screen>

      {/* İstatistik Hesaplamaları */}

      <Stack.Screen name="BinomDagilimHesaplama">
        {(props) => <BinomDagilimHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="GeometrikDagilimHesaplama">
        {(props) => <GeometrikDagilimHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="PermutasyonHesaplama">
        {(props) => <PermutasyonHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KombinasyonHesaplama">
        {(props) => <KombinasyonHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="IhtimalHesaplama">
        {(props) => <IhtimalHesaplama {...props} />}
      </Stack.Screen>

      {/* Matematik Hesaplamaları */}

      <Stack.Screen name="DaireAlanCevreHesaplama">
        {(props) => <DaireAlanCevreHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="DikdortgenAlanCevreHesaplama">
        {(props) => <DikdortgenAlanCevreHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="FaktoriyelHesaplama">
        {(props) => <FaktoriyelHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="HataYuzdesiHesaplama">
        {(props) => <HataYuzdesiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KarekokHesaplama">
        {(props) => <KarekokHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="LogaritmaHesaplama">
        {(props) => <LogaritmaHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="UcgenAlaniHesaplama">
        {(props) => <UcgenAlaniHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="UsHesaplama">
        {(props) => <UsHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="YuzdeHesaplama">
        {(props) => <YuzdeHesaplama {...props} />}
      </Stack.Screen>

      {/* İnşaat Hesaplamaları */}

      <Stack.Screen name="BoslukHacmiHesaplama">
        {(props) => <BoslukHacmiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="SuMuhtevasiHesaplama">
        {(props) => <SuMuhtevasiHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="MutlakBasincHesaplama">
        {(props) => <MutlakBasincHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="KinematikVizkoziteHesaplama">
        {(props) => <KinematikVizkoziteHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="AsmaTavanHesaplama">
        {(props) => <AsmaTavanHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="GazbetonDuvarHesaplama">
        {(props) => <GazbetonDuvarHesaplama {...props} />}
      </Stack.Screen>

      <Stack.Screen name="ParkeMaliyetHesaplama">
        {(props) => <ParkeMaliyetHesaplama {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.3} margin={20} bottom>
          <Text white title center bold>
            Hesaplamalar
          </Text>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginTop: 8,
            }}
          ></View>
        </Block>
        <Block style={{ width: "120%", marginTop: -15 }}>
          <DrawerItem
            label="Birim Dönüştürücü"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("BirimDonusturucu")}
          />
          <DrawerItem
            label="Finans Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("FinansHesaplamalari")}
          />
          <DrawerItem
            label="Fizik Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("FizikHesaplamalari")}
          />
          <DrawerItem
            label="İnşaat Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("InsaatHesaplari")}
          />
          <DrawerItem
            label="Sağlık Alanındaki Hesaplamalar"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("SaglikHesaplamalari")}
          />
          <DrawerItem
            label="Matematik Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("MatematikHesaplari")}
          />
          <DrawerItem
            label="İstatistik Alanındaki Hesaplamalar"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("IstatistikHesaplamalari")}
          />

          <DrawerItem
            label="Hakkımızda"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("Hakkimizda")}
          />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#000000", "#474747"]}>
      <Drawer.Navigator
        drawerType="back"
        drawerStyle={styles.drawerStyles}
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  drawerStyles: { backgroundColor: "transparent" },
  drawerLabel: { color: "white", marginLeft: 0 },
});
