import React from 'react';
import { Text, View } from 'react-native';
import { Appbar, Menu, TextInput, Button, Snackbar } from 'react-native-paper';
import useFetch from '../Hooks/useFetch';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/Styles';
import { UserContext } from '../UseContext';
import { Controller, useForm } from 'react-hook-form';
import MainContainer from './MainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROFESSIONAL_POST } from '../services/api';

export default function AddService({ previous }) {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const { data, error, loading, request } = useFetch();
  const { userLogout } = React.useContext(UserContext);

  async function onSubmit(data) {
    const token = await AsyncStorage.getItem('token');
    const { url, options } = PROFESSIONAL_POST(data, token);
    request(url, options);
  }
  React.useEffect(() => {
    if (data) navigation.navigate('Success');
  }, [data, navigation]);

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Nova atividade" />
        {!previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }
          >
            <Menu.Item
              onPress={() => {
                console.log('Option 1 was pressed');
              }}
              title="Estatísticas"
            />
            <Menu.Item onPress={userLogout} title="Sair" />
          </Menu>
        ) : null}
      </Appbar.Header>
      <MainContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                label="Título da atividade"
                mode="outlined"
                keyboardType="default"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Insira o título da atividade"
                error={errors.nome ? true : false}
              />
            </View>
          )}
          name="nome"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.nome && (
          <Text style={styles.errorMessage}>
            Campo de título é obrigatório.
          </Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                label="Telefone"
                mode="outlined"
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Insira o seu Telefone"
                error={errors.telefone ? true : false}
              />
            </View>
          )}
          name="telefone"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.telefone && (
          <Text style={styles.errorMessage}>
            Campo de telefone é obrigatório.
          </Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                numberOfLines={8}
                autoCapitalize="none"
                label="Descrição"
                mode="outlined"
                keyboardType="default"
                secureTextEntry={true}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Descreva o seu serviço"
                error={errors.descricao ? true : false}
              />
            </View>
          )}
          name="descricao"
          defaultValue=""
          rules={{ required: true }}
        />

        {errors.descricao && (
          <Text style={styles.errorMessage}>
            Campo de descrição é obrigatório.
          </Text>
        )}

        {loading ? (
          <Button
            loading
            mode="contained"
            dark="true"
            disabled
            style={styles.button}
          >
            CADASTRANDO...
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          >
            CADASTRAR ATIVIDADE
          </Button>
        )}

        {error && (
          <Snackbar
            visible={error ? true : false}
            duration={3000}
            onDismiss={() => ''}
          >
            {error}
          </Snackbar>
        )}
      </MainContainer>
    </React.Fragment>
  );
}
