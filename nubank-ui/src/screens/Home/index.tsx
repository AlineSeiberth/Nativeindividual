import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { styles } from './style';
import logo from "../../assets/logo.png";
import setting from "../../assets/setting.png";
import mastercard from "../../assets/mastercard.png";
import Wallet from "../../assets/Wallet.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import emprestimo from "../../assets/emprestimo.png";
import dinheiro from "../../assets/dinheiro.png";

// Pegue a largura da tela
const { width } = Dimensions.get('window');

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Image source={logo} />
                    <Image source={setting} />
                    
                </View>
                <View>
                    <Text style={styles.footerText}>Olá, Aline Bastos.</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View />
                        <Image source={mastercard} />
                    </View>
                    <Text style={styles.cardText}>Aline Bastos</Text>
                    <View>
                        <Text style={styles.cardText}>5501 6788 4567 0987</Text>
                    </View>
                </View>
                <View style={styles.cardDetails}>
                    <View style={styles.cardDetailsHeader}>
                        <Text style={styles.cardDetailsHeaderText}>Saldo Disponível</Text>
                        <Image source={Wallet} />
                    </View>
                    <Text style={styles.cardText}>R$3000,00</Text>
                    
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Do que você precisa?</Text>

                <ScrollView
                    style={styles.footerContentScrollView}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true} 
                    snapToAlignment="center"
                    decelerationRate="fast"
                >
                    <View style={[styles.footerCard, { width: width * 0.5 }]}>
                        <Image source={pix} style={styles.footerCardImage} />
                        <Text style={styles.footerCardText}>Pix</Text>
                    </View>
                    <View style={[styles.footerCard, { width: width * 0.5 }]}>
                        <Image source={boleto} style={styles.footerCardImage} />
                        <Text style={styles.footerCardText}>Boleto</Text>
                    </View>
                    <View style={[styles.footerCard, { width: width * 0.5 }]}>
                        <Image source={dinheiro} style={styles.footerCardImage} />
                        <Text style={styles.footerCardText}>Depositar</Text>
                    </View>
                    <View style={[styles.footerCard, { width: width * 0.5 }]}>
                        <Image source={emprestimo} style={styles.footerCardImage} />
                        <Text style={styles.footerCardText}>Empréstimo</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
