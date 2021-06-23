import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { TextInput, Button, Snackbar, Title } from "react-native-paper";
import styles from "../../assets/styles/styles";
import { useNavigation } from "@react-navigation/core";

import api from "../../service/api";
import Icon from "../../Elements/Icon";

const Register = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setLoading(true);
    api
      .post("users", data)
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Success");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setVisible(true);
        setTimeout(() => {
          setError("");
        }, 5000);
        setLoading(false);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={styles.viewStyle}>
        <ScrollView style={{ width: "100%", flex: 1 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Icon />
          </View>
          <Title>Nova conta</Title>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  label="Nome"
                  mode="outlined"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Primeiro nome"
                  error={errors.name ? true : false}
                />
              </View>
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && (
            <Text style={styles.errorMessage}>
              Campo de nome é obrigatório.
            </Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  label="Sobrenome"
                  mode="outlined"
                  keyboardType="default"
                  autoCapitalize="none"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Último nome"
                  error={errors.surname ? true : false}
                />
              </View>
            )}
            name="surname"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.surname && (
            <Text style={styles.errorMessage}>
              Campo de sobrenome é obrigatório.
            </Text>
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
            <Text style={styles.errorMessage}>
              Campo de e-mail é obrigatório.
            </Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  label="WhatsApp"
                  mode="outlined"
                  keyboardType="phone-pad"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Seu telefone com DDD"
                  error={errors.phone ? true : false}
                />
              </View>
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone && (
            <Text style={styles.errorMessage}>
              Campo de whatsapp é obrigatório.
            </Text>
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
            <Text style={styles.errorMessage}>
              Campo de senha é obrigatório.
            </Text>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Button
              mode="text"
              style={styles.buttonLink}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.buttonLinkText}>ENTRAR</Text>
            </Button>

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
          </View>
        </ScrollView>
      </SafeAreaView>
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
    </KeyboardAvoidingView>
  );
};

export default Register;
