import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './Styles/Styles';

export default function Login({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
