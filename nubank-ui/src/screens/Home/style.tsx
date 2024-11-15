import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1',
    },

    content: {
        paddingHorizontal: 30,
    },

    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 40,
    },

    card: {
        width: "100%",
        height: 190,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
        padding: 20,
        justifyContent: "space-between",
    },

    cardDetails: {
        width: "100%",
        height: 120,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: "space-between",
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        
    },

    cardText: {
        fontSize: 20,
        color: '#fff',
        lineHeight: 36,
        fontWeight: "600",
    },

    cardDetailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    cardDetailsText: {
        fontSize: 34,
        color: "#fff",
        fontWeight: "600",
    },

    cardDetailsHeaderText: {
        color: "#fff",
    },

    footer: {
        paddingTop: 50,
        paddingLeft: 20,
    },

    footerText: {
        color: "#fff",
        marginHorizontal: 20,
        paddingBottom: 30,
        fontWeight: "600",
        fontSize: 14,
    },

    footerContentScrollView: {
        height: 150,
        
    },

    footerCard: {
        width: 127,
        height: 127,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: "space-between",
        marginLeft: 10,
        
    },

    footerCardImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }, 

    footerCardText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
    },
});
