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
        fontSize: 24,
        color: "#fff",
        lineHeight: 36,
        fontWeight: "600",
    },
    cardDetailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        paddingTop: 30,
        paddingLeft: 20,
    },
    footerText: {
        color: "#fff",
        marginHorizontal: 20,
        paddingBottom: 30,
        fontWeight: "600",
        fontSize: 14,
    },
    footerCard: {
        width: 115,
        height: 127,
        backgroundColor: "#9500F6",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: "space-between",
        marginLeft: 10,
    },
    footerCardText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
    },
    footerContentScrowView: {
        height: 400,
    },
});
