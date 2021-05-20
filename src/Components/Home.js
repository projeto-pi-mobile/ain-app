import React from 'react';

import { UserContext } from '../UseContext';
import { FAB } from 'react-native-paper';
import styles from './Styles/Styles';
import { Appbar, Menu } from 'react-native-paper';
import ServiceItem from './Elements/ServiceItem';

export default function Home({ navigation, previous }) {
  const [pages, setPages] = React.useState([1]);
  const { userLogout, data } = React.useContext(UserContext);

  React.useEffect(() => {
    setPages((pages) => [...pages]);
  }, []);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <React.Fragment>
      <Appbar.Header>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content
          title={`Olá, ${data?.nome}`}
          subtitle={'Minhas atividades'}
        />
        {!previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }
          >
            <Menu.Item
              onPress={() => {
                navigation.navigate('Stats');
              }}
              title="Estatísticas"
            />
            <Menu.Item onPress={userLogout} title="Sair" />
          </Menu>
        ) : null}
      </Appbar.Header>
      {pages.map((page) => (
        <ServiceItem key={page} page={page} user={data?.id} />
      ))}

      <FAB
        style={styles.fab}
        large
        icon="plus"
        onPress={() => navigation.navigate('AddService')}
      />
    </React.Fragment>
  );
}
