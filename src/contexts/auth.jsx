import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../service/api";
import { Alert, PermissionsAndroid } from "react-native";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@AINAuth:user");
      const storagedToken = await AsyncStorage.getItem("@AINAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
        setError(null)
      }
    }
    loadStoragedData();
  }, []);

  async function userData(id) {
    try {
      const response = await api.get(`user/${id}`);
      setUser(response.data.data);
      await AsyncStorage.setItem(
        "@AINAuth:user",
        JSON.stringify(response.data.data),
      );
    } catch (err) {
      setError("Usuário não encontrado");
      setTimeout(() => {
        setError(null);
      }, 5000)
    }
    return;
  }

  async function singIn(data) {
    setLoading(true);
    try {
      const response = await api.post("users/token", data);
      verifyPermissions();
      if (response.data.data.id && response.data.data.token) {
        const { id, token } = response.data.data;

        await AsyncStorage.setItem("@AINAuth:token", token);
        userData(id);
      }
    } catch (err) {
      setError("Usuário ou senha estão incorretos");
      setTimeout(() => {
        setError(null);
      }, 5000)

    }

    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setError(null);
    });
  }
  async function verifyPermissions() {
    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(response =>{
      if(response === true) {
        return
      } else {
        Alert.alert("Ops!", "Você precisa permitir acesso ao seu armazenamento.", [
          {
            text: "Ok",
            onPress: () => requestStoragePermission(),
          },
        ]);
      };
    }).catch(err => {
      Alert.alert("Ops!", err, [
        {
          text: "Ok",
          onPress: () => null,
        },
      ]);
      return ;
    })
  }

   const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Acesso ao armazenamento?",
          message:
            "All In Service precisa ter acesso ao armazenamento." +
            "Deseja permitir?",
          buttonNegative: "Cancelar",
          buttonPositive: "Sim"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("Permissão concedida!", "Prossiga com o login.", [
          {
            text: "Ok",
            onPress: () => null,
          },
        ]);
      } else {
        Alert.alert("Não foi possível prosseguir.","A permissão aos arquivos é necessária.", [
          {
            text: "Ok",
            onPress: () => null,
          },
        ]);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, singIn, signOut, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  return context;
}
