import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useAuth } from "../../contexts/auth";
import { Avatar, Button, Card } from "react-native-paper";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const { user } = useAuth();
  const [total, setTotal] = React.useState(null);


  React.useEffect(() => {
    if(user.jobs.length == 0) return;
    else setTotal(user.jobs.map((job) => job.hits).reduce((acc, cur) => acc + cur));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Card.Content style={{ alignItems: "center" }}>
            <Avatar.Image
              size={100}
              source={require("../../assets/img//profile_default.jpg")}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
              {user.name} {user.surname}
            </Text>
          </Card.Content>
        </Card>
        <Card style={{ justifyContent: "center", marginBottom: 10 }}>
          <Card.Content>
            <Text style={{ alignItems: "center", marginBottom: 1 }}>
              <Ionicons
                name="call-outline"
                size={16}
                style={{ paddingRight: 10 }}
              />
              Telefone
            </Text>
            <Text style={{ fontSize: 16, color: "grey", marginBottom: 20 }}>
              {formatPhoneNumber(user.phone)}
            </Text>
            <Text style={{ alignItems: "center", marginBottom: 1 }}>
              <Ionicons
                name="mail-outline"
                size={16}
                style={{ paddingRight: 10 }}
              />
              E-mail
            </Text>
            <Text style={{ fontSize: 16, color: "grey" }}>{user.email}</Text>
          </Card.Content>
        </Card>
        <Card style={{ justifyContent: "center", marginBottom: 10 }}>
          <Card.Content
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ alignItems: "center" }}>
              <Ionicons
                name="grid-outline"
                size={16}
                style={{ paddingRight: 10 }}
              />{" "}
              Atividades Cadastradas
            </Text>
            <Text>{user.jobs.length}</Text>
          </Card.Content>
        </Card>

        <Card style={{ justifyContent: "center", marginBottom: 10 }}>
          <Card.Content
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ alignItems: "center" }}>
              <Ionicons
                name="eye-outline"
                size={16}
                style={{ paddingRight: 10 }}
              />{" "}
              Total de visualizações
            </Text>
            <Text>{total ? total : 0}</Text>
          </Card.Content>
        </Card>
      </View>

      <Button onPress={() => ""}>Editar Perfil</Button>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
