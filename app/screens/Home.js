import {View,Text,StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home(){
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text style={styles.header}>
        Smart delivery
      </Text>
      <Text style={styles.texts}>
        Bem Vindo ao Smart Delivery, somos especializados em entrega por drones de cargas leves, garantindo entrega rápida e segura para nossos usuarios e de forma barata.
      </Text>
      <Button 
      onPress={()=>navigation.navigate('Fretes')}
      style={styles.button} 
      title="Frete"
      color="#FF0066"/>
      <Button 
      onPress={()=>navigation.navigate('Servicos')}
      style={styles.button} 
      title="Serviços"
      color="#FF0066"/>
    </View>
  )
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
  texts:{

  },
  button:{
    width: 20
  }
})
