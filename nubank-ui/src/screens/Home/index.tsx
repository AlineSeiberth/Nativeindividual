import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { styles } from './Home.style';

import logo from "../../assets/logo.png";
import setting from "../../assets/setting.png";
import mastercard from "../../assets/mastercard.png";
import Wallet from "../../assets/Wallet.png";
import pix from "../../assets/pix.png";



export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo} />
                <Image source={setting} />
            </View >
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View/>
                        <Image source={mastercard} />
                    </View>
                    <Text style={styles.cardText}>Aline Bastos</Text>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo Disponível</Text>
                    <Image source={Wallet} />
                 </View>
                 <Text style={styles.cardText}>R$3000,00</Text>
            </View >
            </View>
            <View style={styles.footer}>
            <Text style={styles.footerText}>Do que você precisa?</Text>

            <ScrollView
            style={styles.footerContentScrowView}
             showsHorizontalScrollIndicator={false} 
             horizontal= {true}
             >
            <View style={styles.footerCard}>
                <Image source={pix}/>
                <Text style={styles.footerCardText}>Pix</Text>
            </View>
            <View style={styles.footerCard}>
                <Image source={pix}/>
                <Text style={styles.footerCardText}>Boleto</Text>
            </View>
            <View style={styles.footerCard}>
                <Image source={pix}/>
                <Text style={styles.footerCardText}>Depositar</Text>
            </View>
            
            </ScrollView>
            </View>
        </View>
    );
}

