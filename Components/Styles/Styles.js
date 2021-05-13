import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingLeft: 10,
    justifyContent: 'flex-end',
  },

  main: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  back: {
    fontSize: 40,
    color: '#8257E5',
  },
  bannerContainer: {
    width: '100%',
    flex: 0.5,
  },
  bannerContainerImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  formContainerText: {
    width: '100%',
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#8257E5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  containerTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  containerTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8257E5',
  },
  formContainer: {
    width: '100%',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E7E9EC',
    borderRadius: 5,
    backgroundColor: '#F7F8FA',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#8257E5',
    padding: 10,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#F7F8FA',
  },
});

export default styles;
