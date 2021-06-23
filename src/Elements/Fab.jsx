import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FAB } from "react-native-paper";

const Fab = () => {
  const navigation = useNavigation();

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;


  return (

    <FAB.Group
      open={open}
      icon={open ? "close" : "menu"}
      actions={[
        {
          icon: "briefcase-plus",
          label: "Adicionar atividade",
          onPress: () => navigation.navigate('NewActivity', {id: ''}),
          small: false,

        },
        {
          icon: "account",
          label: "Minha conta",
          onPress: () => navigation.navigate('Account'),
          small: false,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default Fab;
