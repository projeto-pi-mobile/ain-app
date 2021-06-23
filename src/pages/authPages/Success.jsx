import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, Title } from "react-native-paper";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function Success() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons
        style={{ fontSize: 80, color: "#8257E5" }}
        name="checkmark-done-outline"
      />
      <Title style={{color: '#8257E5'}}>Usuário cadastrado com sucesso!</Title>

      <Button
        mode="text"
        onPress={() => navigation.navigate("SignIn")}
      >
        Entrar
      </Button>
    </View>
  );
}
