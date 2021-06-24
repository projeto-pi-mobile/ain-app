import React from "react";
import { View, Text, Alert } from "react-native";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Surface,
  IconButton,
  Snackbar,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../service/api";
import { useNavigation } from "@react-navigation/core";

const ActivityCard = (props) => {
  const navigation = useNavigation();

  async function handleDelete(item) {
    const token = await AsyncStorage.getItem("@AINAuth:token");
    if (token) {
      api
        .delete(`jobs/${item}`)
        .then((response) => {
          if (response.status === 200) {
            Alert.alert("Atividade excluida!", "A atividade foi excluída com sucesso", [
              {
                text: "Ok",
                onPress: () => null,
              },
            ]);
          }
        })
        .catch((err) => {
          Alert.alert("Ops!", err.response.data.message, [
            {
              text: "Ok",
              onPress: () => null,
            },
          ]);
        });
    }
  }

  async function handleDeletDialog(id) {
    Alert.alert("Deletar", "Deseja confirmar a exclusão?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => handleDelete(id),
      },
    ]);
  }

  return (
    <React.Fragment>
      {props.data.map((item) => (
        <Surface key={item.id} style={{ margin: 6 }}>
          <Card>
            <Card.Content>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Title style={{ color: "#8257E5" }}>{item.name}</Title>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="eye-outline" color="#04D361" size={20} />
                  <Text style={{ color: "#04D361", marginLeft: 6 }}>
                    {item.hits ? item.hits : 0}
                  </Text>
                </View>
              </View>

              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <IconButton
                icon="delete-outline"
                color={"red"}
                onPress={() => handleDeletDialog(item.id)}
              />

              <IconButton
                icon="square-edit-outline"
                color={"#8257E5"}
                onPress={() => navigation.push("NewActivity", { id: item.id})}
              />
            </Card.Actions>
          </Card>
        </Surface>
      ))}
    </React.Fragment>
  );
};

export default ActivityCard;
