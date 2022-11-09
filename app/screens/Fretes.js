import {View,Text,StyleSheet,Button,TextInput} from 'react-native';
import {useState} from 'react';

export default function Fretes(){
  const [frete, setFrete] = useState('');
  function calcularFrete(cidade){
    if (cidade == 'Cotia'){
      setFrete('Seu frete é de R$12,00')
    } else if (cidade == 'Sao Paulo'){
      setFrete('Seu frete é de R$8,00')
    } else if (cidade == 'Santos'){
      setFrete('Seu frete é de R$14,00')
    } else if (cidade == 'Guarulhos'){
      setFrete('Seu frete é de R$11,00')
    } else if (cidade == 'Moji das Cruzes'){
      setFrete('Seu frete é de R$16,00')
    } else {
      setFrete('Ainda não chegamos nesse endereço')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, backgroundColor: '#fff'}}
        placeholder="Digite sua cidade!"
        onChangeText={cidade => calcularFrete(cidade)}
        defaultValue={frete}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {frete}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#808080'
   },
})