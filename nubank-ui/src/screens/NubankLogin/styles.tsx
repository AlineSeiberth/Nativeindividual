import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 160, // Tamanho do logo
        height: 160,
        resizeMode: 'contain',
        
    },
    footerButtonsContainer: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
    },
    footerButton: {
        backgroundColor: '#ffffff', 
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 25,
        elevation: 2,
        marginBottom: 20, 
    },
    footerButtonText: {
        color: '#111010',
        fontSize: 16,
        fontWeight: '600',
    },
    secundarioButtonText: {
        color: '#ffffff', 
        fontSize: 16,
        fontWeight: '600',
    },
});
