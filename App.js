import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './app/styles';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from './app/components/Input';
import Button from './app/components/Button';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function App(props) {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState('true');
  const [name, setName] = useState('');

  function handleNameChane() {
    setName(null);
  }


  //   constructor(props){
  //     super(props)
  //     this.state = {
  //       count: 0,
  //       disabled: true
  //     };
  // }

  // handleChange= (e) => {
  //  if(e.target.value.length <= 0) {
  //     this.setState({
  //      disabled: true
  //     });
  //  }
  //  else{
  //    this.setState({
  //      disabled: false
  //    });
  //  }

  // }

  return (
    <View style={styles.container}>
      <View style={styles.vicon}>
        <TouchableOpacity>
          <Icon name="menu" color="black" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="more-vertical"
            color="black"
            size={25}
            style={{marginRight: -10}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.header}>Input Data</Text>
        <Text style={styles.kData}>Data Kepala Keluarga</Text>
      </View>
      <View style={styles.packetData}>
        <Input
          value={name}
          onChange={handleNameChane}
          keyboardType="numeric"
          placeholder="NIK"
        />
        <Text style={styles.dNIK} />
        <Input
          value={name}
          onChange={handleNameChane}
          placeholder="Alamat"
        />
        <Text style={styles.dNIK} />
        <Input
          value={name}
          onChangeText={handleNameChane}
          keyboardType="phone-pad"
          placeholder="DD/MM/YYYY"
        />
        <Text style={styles.dNIK} />
        <Input
          value={name}
          onChangeText={handleNameChane}
          placeholder="Pendidikan terakhir"
        />
        <Text style={styles.dNIK} />
        <Input
          value={name}
          onChangeText={handleNameChane}
          keyboardType="email-address"
          placeholder="Email"
        />
      </View>
      <Text style={styles.jData}>Jumlah Keluarga</Text>
      <View style={styles.packetData2}>
        <TouchableOpacity
          style={styles.minus}
          onPress={() => setCount(count - 1)}
        >
          <Entypo name="circle-with-minus" color="#3abbf2" size={20} />
        </TouchableOpacity>
        <Text style={styles.number}> {count} </Text>
        <TouchableOpacity
          style={styles.minus}
          onPress={() => setCount(count + 1)}
        >
          <Entypo name="circle-with-plus" color="#3abbf2" size={20} />
        </TouchableOpacity>
      </View>
      <Button theme= "data" title="Kirim Data" />
    </View>
  );
}
export default App;
