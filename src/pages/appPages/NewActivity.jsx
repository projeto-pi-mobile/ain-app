import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Switch,
} from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import styles from "../../assets/styles/styles";
import { useAuth } from "../../contexts/auth";
import api from "../../service/api";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewActivities = ({ route }) => {
  const { user, loading } = useAuth();
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState([]);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  
  } = useForm();

  React.useEffect(() => {
    if (route) {
      const { id } = route.params;
      api
        .get(`jobs/${id}`)
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          console.log(err);
          setTimeout(() => {
            setError(null);
          }, 5000);
        });
    }

  }, [route]);





  async function onSubmit(data) {
    const token = await AsyncStorage.getItem("@AINAuth:token");
    if (token) {
      const { description, name } = data;
      const finalData = {
        description,
        name,
        user_id: user.id,
      };

      api
        .post("jobs", finalData)
        .then((response) => {
          if (response.status == 200) {
            navigation.navigate("Success");
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
          setTimeout(() => {
            setError(null);
          }, 5000);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={styles.viewStyle}>
        <ScrollView style={{ width: "100%", flex: 1 }}>
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
                  onChangeText={onChange}
                  value={value}
                  placeholder="Insira o título da atividade"
                  error={errors.name ? true : false}
                />
              </View>
            )}
            name="name"
            rules={{ required: true }}
          />
          {errors.name && (
            <Text style={styles.errorMessage}>
              Campo de título é obrigatório.
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
                  onChangeText={onChange}
                  value={value}
                  placeholder="Descreva o seu serviço"
                  error={errors.description ? true : false}
                />
              </View>
            )}
            name="description"
            rules={{ required: true }}
          />

          {errors.description && (
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

          <Snackbar visible={error ? true : false}>{error}</Snackbar>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NewActivities;
