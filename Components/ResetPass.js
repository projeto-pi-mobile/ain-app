import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './Styles/Styles';

export default function ResetPass() {
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.bannerContainer}>
        <Image
          resizeMode="cover"
          style={styles.bannerContainerImage}
          source={require('../assets/img/banner_reset.png')}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.containerTitleText}>Resetar senha</Text>
        <Text>
          Insira o e-mail associado com a sua conta e recebe em seu e-mail as
          instruções para resetar o seu password
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Insira o seu e-mail de cadastro"
            placeholderTextColor="#4E4E4E"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar as instruções</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
