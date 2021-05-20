import React, { useEffect, useState } from 'react';
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
import ainApi from '../services/ainApi';

export default function ProfessionalProfile({ navigation }, props) {
  
  const [users, setUsers] = useState({})
  const [atividades, setAtividades] = useState([])

  
  //Toda vez que carregar o componente ele executa isso
  useEffect(()=>{
    
    ainApi.get('users/1').then(results => {
      setUsers(results.data)
      setAtividades(results.data.atividades)
    })
    
    
  }, [])
  
  console.log(users)
  console.log(atividades)
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
              <Text>{users.nome}</Text>
            
              <Text style={styles.itemProfile}>E-mail</Text>
              <Text>{users.email}</Text>

              <Text style={styles.itemProfile}>CPF</Text>
              <Text>{users.cpf}</Text>

              <Text style={styles.itemProfile}>Telefone</Text>
              <Text>{users.telefone}</Text>

              <Text style={styles.itemProfile}>Minhas atividades</Text>
              
              {atividades?.map(atividade=>(
                <Text>{atividade}</Text>
              ))}
            </View>
            <View>
              <Text style={styles.itemProfile}>Biografia</Text>
              <View  style={styles.container}>
                <Text>{users.biografia}</Text>
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
