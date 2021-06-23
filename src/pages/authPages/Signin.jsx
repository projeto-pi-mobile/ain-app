import React from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button, Snackbar, Title } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import Logo from "../../Elements/Logo";

import { useAuth } from "../../contexts/auth";
import styles from "../../assets/styles/styles";

const SignIn = ({ navigation }) => {
  const { singIn, loading, error } = useAuth();
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);

  React.useEffect(() => {
    if (error) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [error]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (data) {
      singIn(data);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.viewStyle}>
        <Logo />
        <Title>Login</Title>
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
          <Text style={styles.errorMessage}>
            Campo de e-mail é obrigatório.
          </Text>
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
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button mode="text" onPress={() => navigation.navigate("Register")}>
            REGISTRAR
          </Button>
          {loading ? (
            <Button loading mode="contained" dark="true" disabled>
              AUTENTICANDO...
            </Button>
          ) : (
            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
              ENTRAR
            </Button>
          )}
        </View>
        <Snackbar
          visible={error ? visible : false}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
            onPress: () => {
              // Do something
            },
          }}
        >
          {error}
        </Snackbar>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
