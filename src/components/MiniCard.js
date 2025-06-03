import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function MainCard() {
    return (
    <LinearGradient
        colors={['#024059', '#023E73']}
        style={styles.card_content}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Recife-PE</Text>
                <Text style={styles.header_text}>12:04</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_text}>29°C</Text>
            </View>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
card_content: {
    padding: 15,
    borderRadius: 15,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    overflow: 'hidden',
    elevation: 6,
},
header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
},
header_text: {
    color: '#D9CCC1',
    fontSize: 12,
    fontWeight: 'bold',
},
body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
},
body_text: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
}
});
