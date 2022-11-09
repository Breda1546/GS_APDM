import {View,Text,StyleSheet,Button} from 'react-native';

export default function Servicos(){
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conheça nossos serviços:</Text>
      
      <Text style={styles.texts}>My Own Drone: Use um ou mais drones somente seus, para realizar a busca e entrega das suas encomendas, sem a ajuda de terceiros.</Text>
      <Text style={styles.texts}>Por apenas R$400,00/mês com acesso a 2 drones</Text>
      <Text style={styles.texts}>Shared Delivery: Você pode compatilhar o seu drone com até 5 pessoas, dividindo as despezas e recebendo suas encomendas de maneira rapida e eficiente.</Text>
      <Text style={styles.texts}>Por apenas R$250,00/mês com acesso a 1 drone</Text>

    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#808080'
  },
  header:{
    textAlign: 'center',
  },
})
