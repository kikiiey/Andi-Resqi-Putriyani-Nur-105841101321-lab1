import { StyleSheet, Text, View, Image} from 'react-native';

const Images1 = ()=>{
    return (
        <>
        <Image source={require('./assets/hijab.jpg')}
        style={{
            width: 220,
            height: 220,
            alignContent: 'center',
            justifyContent: 'flex-start',
            marginLeft: 100,
            marginTop: 140
        }}></Image>
        </>
    )
}
export default Images1