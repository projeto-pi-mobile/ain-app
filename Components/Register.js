import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Styles/Styles';

export default function Register({ navigation }) {
  const [name, setName] = React.useState('');
  const [whatsapp, setWhatsApp] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.bannerContainer}>
          <Image
            resizeMode="cover"
            style={styles.bannerContainerImage}
            source={require('../assets/img/register.png')}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.formContainerText}>Novo Registro</Text>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Nome"
                placeholderTextColor="#4E4E4E"
                value={name}
                onChangeText={(value) => setName(value)}
              />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor="#4E4E4E"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="CPF"
                placeholderTextColor="#4E4E4E"
                value={cpf}
                onChangeText={(value) => setCpf(value)}
              />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="WhatsApp"
                placeholderTextColor="#4E4E4E"
                value={whatsapp}
                onChangeText={(value) => setWhatsApp(value)}
              />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#4E4E4E"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
