import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  viewStyle: {
    flex: 1,
    padding: 4,
    width: '100%',
    maxWidth: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 123,
    marginBottom: 12,
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 12,
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    
  },
  errorMessage: {
    textAlign: 'left',
    width: '100%',
    marginTop: -10,
    color: '#B41634',
  },
});

export default styles;
