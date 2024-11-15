import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import logo from "../../assets/logo.png";

export function NubankLogin() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.footerButtonsContainer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Usar senha do celular</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.secundarioButtonText}>Usar senha do Nubank</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
