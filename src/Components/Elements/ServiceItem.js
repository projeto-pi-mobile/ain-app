import React from 'react';
import { ActivityIndicator, FlatList, Text, Alert } from 'react-native';
import { PROFESSIONALS_GET, PROFESSIONAL_DELETE } from '../../services/api';
import { Card, Button, List, Portal, Modal } from 'react-native-paper';
import MainContainer from '../MainContainer';
import useFetch from '../../Hooks/useFetch';
import styles from '../Styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ServiceItem({ page, id }) {
  const { data, loading, error, request } = useFetch();

  async function fetchProfessional() {
    const total = 100;
    const { url, options } = PROFESSIONALS_GET({ page, total, id });
    const { response, json } = await request(url, options);
    if (response && response.ok && json.length < total) return;
  }
  React.useEffect(() => {
    fetchProfessional();
  }, [request, id, page]);

  function handleOpenAlertToDelete(id) {
    Alert.alert('Deletar', 'Deseja realmente deletar essa atividade?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => deleteItem(id),
      },
    ]);
  }

  async function deleteItem(item) {
    const token = await AsyncStorage.getItem('token');
    const { url, options } = await PROFESSIONAL_DELETE(item, token);
    const { response } = await request(url, options);
    if (response.ok) console.log('deletado');
    fetchProfessional();
  }
  if (error) return <Text>{error}</Text>;
  if (loading) {
    return (
      <MainContainer>
        <ActivityIndicator size="large" color="#8257E5" />
        <Text>Carregando...</Text>
      </MainContainer>
    );
  }
  if (data && typeof data !== 'string') {
    return (
      <MainContainer>
        {data.length === 0 ? (
          <Text>Sem atividades cadastradas.</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ width: '125%' }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card key={item.id} style={styles.card}>
                <Card.Title
                  title={item.title}
                  right={() => (
                    <>
                      <Button onPress={() => handleOpenAlertToDelete(item.id)}>
                        <Ionicons
                          style={styles.viewsIcon}
                          name="trash-outline"
                        />
                      </Button>
                    </>
                  )}
                />
                <List.Section>
                  <List.Accordion
                    title="Descrição"
                    left={(props) => (
                      <List.Icon {...props} icon="text-box-outline" />
                    )}
                  >
                    <Text>{item.descricao}</Text>
                  </List.Accordion>
                </List.Section>
              </Card>
            )}
          />
        )}
      </MainContainer>
    );
  } else {
    return null;
  }
}
