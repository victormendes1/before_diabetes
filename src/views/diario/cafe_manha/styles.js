import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
    container:{
      marginLeft: 10,
      marginTop: 10,
      fontSize: 18,
      backgroundColor: 'black'
    },  
    opcao: {
      justifyContent: 'center',
      marginBottom: 30,
      width: 300,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#2570f9',
    },
    searchBar: {
      justifyContent: 'center',
      height: 50,
      backgroundColor: '#D3D3D3'
    },
    searchInput: { 
      backgroundColor: 'white',
      marginLeft: 8,
      width: 320,
      height: 35,
      borderRadius: 8,
      fontSize: 16
    },
    foodlist: {
      flex: 1,
      height: 60,
      backgroundColor: '#E5E4E2',
    },
    title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 5
    },
    subtitle: {
      marginLeft: 10,
    },
    subtitle2: {
      marginTop: -15,
      marginBottom: 10,
      marginLeft: 320,
    }
  });
  
  export default styles;