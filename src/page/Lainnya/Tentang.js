import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { back } from '../../assets';

const Tentang = () => {
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <Image
        style={{ height: 10, width: 10, padding: 10 }}
        source={back}
      />
      <Text style={[styles.tentang, {}]}>Tentang</Text>
      <Text style={[styles.top, {}]}>
        Inspiring Belitung Timur, the land of maritime Spices Route
      </Text>
      <Text style={[styles.deskripsi, {}]}>
        Aplikasi Insipiring Belitung Timur memudahkan untuk menemukan wista -
        wisata di Kabupaten Belitung Timur.
        {'\n'}
        {'\n'}
        Sistem Informasi dan Konten Promosi Multimedia Dinas Kebudayaan dan
        Pariwisata Kabupaten Belitung Timur 2021.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  tentang: {
    padding: 15,
    fontWeight: 100,
    fontSize: 20,
    lineHeight: 32,
  },
  top: {
    padding: 15,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 32,
  },
  deskripsi: {
    padding: 15,
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 17,
  },
});

export default Tentang;