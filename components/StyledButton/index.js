import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = props => {
    const
        { type, content, onPress } = props,
        backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6',
        textColor = type === 'primary' ? '#FFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View >
    )
}

export default StyledButton
