import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../constants/Color'

const Card = ({children}) => {


  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 400 ? 20 : 28,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Color.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})