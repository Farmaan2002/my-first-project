import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import VideoPlayer from 'react-native-video-player';

const Child = () => {
  const [img, setImg] = useState('');
  const handleCameraLaunch = async isCamera => {
    const options = {
      mediaType: isCamera ? 'photo' : 'video',
    };
    try {
      const response = await launchCamera(options);
      console.log('pickedFile', response.assets);
      setImg(response.assets[0].uri);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const openLibrary = () => {
    const options = {
      StorageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response);
      setImg(response.assets[0]?.uri);
    });
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          handleCameraLaunch(true);
        }}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          handleCameraLaunch(false);
        }}>
        <Text>video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openLibrary}>
        <Text>Open Image library</Text>
      </TouchableOpacity>
      <View>
        <Image
          style={styles.imgstyle}
          source={{
            uri: img,
          }}
        />
      </View>
          <VideoPlayer
          source={{uri:
            "file:///data/user/0/com.awesomeproject/cache/rn_image_picker_lib_temp_a2e26c8e-927f-42bc-90e8-28e7a38a9e28.mp4"}}
          thumbnail={img}
          autoplay
          style={styles.imgstyle}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 9,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ef7718',
    marginBottom: 26,
    width: '50%',
  },
  imgstyle: {
    width: 150,
    height: 150,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ef7718',
  },
});

export default Child;
