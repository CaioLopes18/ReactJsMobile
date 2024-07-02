import * as React from 'react';
import { Modal, Portal, Text, Button, Provider as PaperProvider, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; // Importar ícones do Material Icons
import { View, StyleSheet } from 'react-native';

const AddItem = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <IconButton
          icon="plus"
          onPress={showModal}
          style={styles.iconButton}
        >
          Show Modal
        </IconButton>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default AddItem;
