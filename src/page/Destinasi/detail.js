import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

const DetailDestination = () => {
    return (
        <View style={[styles.all, {flexDirection: "column"}]}>
          <View style={[styles.pictureheader, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
              <ImageBackground
                source={{ uri: 'https://www.len-diary.com/wp-content/uploads/2021/01/gunong-lumut-576x768.jpg' }}
                style={{ width: 450, height: 400}}
              />
              <Image
                source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/arrow_back-1.png' }}
                style={{ width: 50, height: 50, position: 'absolute', opacity: 0.5, borderRadius: 40, top: 30, left: 15}}
              />
              <Image
                source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/love-1.png' }}
                style={{ width: 50, height: 50, position: 'absolute', opacity: 0.5, borderRadius: 40, top: 30, left: 280}}
              />
              <Image
                source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/share-1.png' }}
                style={{ width: 50, height: 50, position: 'absolute', opacity: 0.5, borderRadius: 40, top: 30, left: 350}}
              />
          </View>
          
          <ScrollView style={styles.scrollView}>
            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.texttitle}>Geosite Gunong Lumut</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textsupport}>Wisata Alam</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textdescription}>Description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.line}>Description It is a long established fact that a reader</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.texttelepon}>Telepon</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textnotelepon}>0812-3456-7890</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textinstagram}>Instagram</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textig}>Gunong Lumut</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.line}>Description It is a long established fact that a reader</Text>
            </View>

            <View style={[styles.title, {flexDirection: "row"}]}>
              <View style={{ flex: 1}} />
                <Text style={styles.textgaleri}>Galeri</Text>
            </View>

            <View style={[styles.gambar, {flexDirection: "row"}]}>
              <View style={{ flex: 5}} />
                  <Image
                    source={{ uri: 'https://www.gunungbagging.com/wp-content/NEXTGEN/Lumut/IMG_1720.JPG' }}
                    style={{ width: 60, height: 60, borderRadius: 15 }}
                  />
              <View style={{ flex: 5}} />
                  <Image
                    source={{ uri: 'https://www.gunungbagging.com/wp-content/NEXTGEN/Lumut/IMG-20170829-WA0000.jpg' }}
                    style={{ width: 60, height: 60, borderRadius: 15 }}
                  />
              <View style={{ flex: 5}} />
                  <Image
                    source={{ uri: 'https://www.gunungbagging.com/wp-content/NEXTGEN/Lumut/FB_IMG_15046930176876296.jpg' }}
                    style={{ width: 60, height: 60, borderRadius: 15 }}
                  />
              <View style={{ flex: 5}} />
                  <Image
                    source={{ uri: 'https://www.gunungbagging.com/wp-content/NEXTGEN/Lumut/FB_IMG_15046930090016692.jpg' }}
                    style={{ width: 60, height: 60, borderRadius: 15 }}
                  />
              <View style={{ flex: 5}} />
                  <Image
                    source={{ uri: 'https://www.gunungbagging.com/wp-content/NEXTGEN/Lumut/FB_IMG_15046929797393209.jpg' }}
                    style={{ width: 60, height: 60, borderRadius: 15 }}
                  />
            </View>

            <View style={[styles.picturefooter, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
              <Image
                source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/maps.png' }}
                style={{ width: 422, height: 234, marginTop: 30}}
              />
          </View>
            
          </ScrollView>
        </View>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 400,
  },
  pictureheader: {
  },
  texttitle: {
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "bold",
    marginEnd: 75,
  },
  textsupport: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#9096A0',
    marginEnd: 297,
  },
  textdescription: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#1F2937',
    marginRight: 22,
    marginLeft: 8,
  },
  line: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: 'white',
    marginRight: 25,
    marginLeft: 8,
    marginTop: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#EBECF0',
  },
  texttelepon: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#9096A0',
    marginTop: 18,
    marginEnd: 330,
  },
  textnotelepon: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#1F2937',
    //marginTop: 20,
    marginEnd: 272,
  },
  textinstagram: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#9096A0',
    marginTop: 18,
    marginEnd: 312,
  },
  textig: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#1F2937',
    //marginTop: 20,
    marginEnd: 280,
  },
  textgaleri: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: '#9096A0',
    marginTop: 18,
    marginEnd: 340,
  },
  gambar: {
    marginTop: 15,
    marginStart: 15,
    marginEnd: 25,
  },
});

export default DetailDestination;