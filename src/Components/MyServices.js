import React from 'react';
import { Text, TouchableOpacity, View, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Styles/Styles';
import ServiceItem from './Elements/ServiceItem';

export default function MyServices({ route, navigation }) {
  const { id } = route.params;
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    setPages((pages) => [...pages]);
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.containerTitleText}>Meus serviços</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddService')}>
          <Ionicons name="add-outline" style={styles.back} />
        </TouchableOpacity>
      </View>
      {pages.map((page) => (
        <ServiceItem key={page} page={page} user={id} />
      ))}
    </View>
  );
}
