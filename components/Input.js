import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Input() {
    return (
        <View style={styles.input_container}>
            <Ionicons name="search" size={24} color="#D9CCC1" />
            <TextInput style={styles.input}/>
            <Ionicons name="ellipse" size={24} color="#D9CCC1" />
        </View>
    );
}

const styles = StyleSheet.create({
input_container: {
    width: '90%',
    backgroundColor: '#004C6B',
    borderRadius: 20,
    elevation: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
},
input: {
    color: '#D9CCC1',
    fontSize: 12,
    width: '80%',
},
});
