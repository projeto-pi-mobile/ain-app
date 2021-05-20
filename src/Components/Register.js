import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Snackbar, Title } from 'react-native-paper';
import { USER_POST } from '../services/api';
import useFetch from '../Hooks/useFetch';
import MainContainer from './MainContainer';

import styles from './Styles/Styles';
import Logo from './Elements/Logo';

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error, request } = useFetch();

  async function onSubmit(data) {
    const { url, options } = USER_POST(data);
    const { response } = await request(url, options);
    if (response.ok === false) return null;
    navigation.navigate('RegisterSuccess');
  }
  return (
    <MainContainer>
      <Logo />
      <Title style={styles.title}>Nova conta</Title>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Nome de usuário"
              mode="outlined"
              keyboardType="default"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Usuário"
              error={errors.username ? true : false}
            />
          </View>
        )}
        name="username"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.username && (
        <Text style={styles.errorMessage}>Campo de usuário é obrigatório.</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Seu melhor e-mail"
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="E-mail"
              error={errors.email ? true : false}
            />
          </View>
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && (
        <Text style={styles.errorMessage}>Campo de e-mail é obrigatório.</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              label="Senha super secreta"
              mode="outlined"
              keyboardType="default"
              secureTextEntry={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Senha"
              error={errors.password ? true : false}
            />
          </View>
        )}
        name="password"
        defaultValue=""
        rules={{ required: true }}
      />
      {errors.password && (
        <Text style={styles.errorMessage}>Campo de senha é obrigatório.</Text>
      )}
      {loading ? (
        <Button
          loading
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          disabled
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </Button>
      ) : (
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </Button>
      )}

      <Button
        mode="text"
        style={styles.buttonLink}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonLinkText}>ENTRAR</Text>
      </Button>

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
  );
}
