import { StyleSheet, Text, View, Image, Button } from 'react-native';
const TextCustom = ()=>{
return(
<View style={{
        backgroundColor: 'blue',
        width: 150,
        height: 70,
        borderRadius: 10,
        marginLeft: 10
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          lineHeight: 80,
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          Test
        </Text>
      </View>
)

}