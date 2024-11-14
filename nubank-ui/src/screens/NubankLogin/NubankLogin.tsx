import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './NubankLogin.styles'; 
import logo from "../../assets/logo.png"; 
export function NubankLogin() {
    return (
        
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Usar sua senha do celular</Text>
            </TouchableOpacity>
        </View>
    );
}
