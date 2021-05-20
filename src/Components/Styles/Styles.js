import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 123,
    marginBottom: 12,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 12,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  button: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  title: {
    color: '#8257E5',
  },
  successIcon: {
    fontSize: 80,
    color: '#8257E5',
  },
  errorMessage: {
    textAlign: 'left',
    width: '100%',
    marginTop: -10,
    color: '#B41634',
  },
  card: {
    borderRadius: 10,
    borderColor: '#E6E8EB',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginBottom: 10,
  },
  cardIconArea: {
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  views: {
    color: '#8257E5',
    fontSize: 14,
  },
  viewsIcon: {
    color: '#8257E5',
    fontSize: 20,
  },
});

export default styles;
