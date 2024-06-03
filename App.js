import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Metropolis-Black': require('./assets/fonts/Metropolis-Black.otf'),
        'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
        'Metropolis-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
        'Metropolis-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Font tidak ditemukan!</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 250 }}>font Biasa</Text>
            <Text style={{ fontFamily: 'Metropolis-Black', fontSize: 30, textAlign: 'center' }}>Metro Black</Text>
            <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 30, textAlign: 'center' }}>Metro Bold</Text>
            <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 30, textAlign: 'center'}}>Metro Medium</Text>
            <Text style={{ fontFamily: 'Metropolis-SemiBold', fontSize: 30, textAlign: 'center' }}>Metro SemiBold</Text>
        </View>
    );
}

export default App;