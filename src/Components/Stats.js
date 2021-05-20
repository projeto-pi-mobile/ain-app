import React from 'react';
import ActivityRings from 'react-native-activity-rings';

import { Appbar, Menu } from 'react-native-paper';
import { UserContext } from '../UseContext';
import { View } from 'react-native';

export default function Stats({ navigation, previous }) {
  const { userLogout, data } = React.useContext(UserContext);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const activityData = [
    {
      value: 0.8, // ring will use color from theme
    },
    {
      label: 'ACTIVITY',
      value: 0.6,
      color: '#cb5f18',
    },
    {
      label: 'RINGS',
      value: 0.2,
      color: '#86040f',
      backgroundColor: '#cccccc',
    },
  ];

  const activityConfig = {
    width: 150,
    height: 150,
  };

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Estatísticas" />
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
                console.log('Option 1 was pressed');
              }}
              title="Estatísticas"
            />
            <Menu.Item onPress={userLogout} title="Sair" />
          </Menu>
        ) : null}
      </Appbar.Header>

      <ActivityRings
        theme={'light'}
        legend={true}
        data={activityData}
        config={activityConfig}
      />
    </React.Fragment>
  );
}
