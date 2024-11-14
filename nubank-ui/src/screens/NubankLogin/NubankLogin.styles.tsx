import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1', 
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 160, 
        height: 160,
        resizeMode: 'contain',
        
    },
    footerButton: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#ffffff', 
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 2,
        justifyContent: 'center',
        height: 50,
    },
    
    footerButtonText: {
        color: '#820AD1', 
        fontSize: 16,
        fontWeight: '600',
    },
});
