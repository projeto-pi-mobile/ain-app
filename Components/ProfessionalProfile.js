import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Styles/Styles';

export default function ProfessionalProfile({ navigation }) {

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.bannerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Ionicons name="chevron-back-outline" style={styles.back} />
          </TouchableOpacity>
          <Image
            resizeMode="cover"
            style={styles.bannerContainerImage}
            source={require('../assets/img/professional_profile.png')}
            />
        </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            <View>
              <Text style={styles.containerTitleText}>Detalhes do Usuário</Text>

              <Text style={styles.itemProfile}>Nome</Text>
              <Text>Pedro Costa da Silva</Text>
            
              <Text style={styles.itemProfile}>E-mail</Text>
              <Text>pedro.silva@gmail.com</Text>

              <Text style={styles.itemProfile}>CPF</Text>
              <Text>345.231-76</Text>

              <Text style={styles.itemProfile}>Telefone</Text>
              <Text>(61) 96271-4092</Text>

              <Text style={styles.itemProfile}>Minhas atividades</Text>
              <Text>Atividade 1</Text>
              <Text>Atividade 2</Text>
              <Text>Atividade 3</Text>
              <Text>Atividade 4</Text>
              <Text>Atividade 5</Text>
            </View>
            <View>
              <Text style={styles.itemProfile}>Biografia</Text>
              <View  style={styles.container}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</Text>
              </View>
            </View>
            <View style={styles.formContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  <Ionicons name="logo-whatsapp" style={styles.buttonIcon} />Contratar agora
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
