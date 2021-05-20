import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Snackbar, Title } from 'react-native-paper';
import styles from './Styles/Styles';
import { UserContext } from '../UseContext';
import MainContainer from './MainContainer';
import Logo from './Elements/Logo';

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function onSubmit(data) {
    const { email, password } = data;
    if (email && password) {
      userLogin(email, password);
    }
  }

  return (
    <MainContainer>
      <Logo />
      <Title style={styles.title}>Login</Title>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              label="E-mail"
              mode="outlined"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Insira o e-mail de cadastro"
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
              autoCapitalize="none"
              label="Insira sua senha"
              mode="outlined"
              keyboardType="default"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Insira a sua senha"
              error={errors.email ? true : false}
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Button
          mode="text"
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
        >
          REGISTRAR
        </Button>
        {loading ? (
          <Button
            loading
            mode="contained"
            dark="true"
            disabled
            style={styles.button}
          >
            AUTENTICANDO...
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          >
            ENTRAR
          </Button>
        )}
      </View>

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
