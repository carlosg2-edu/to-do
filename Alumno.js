import { useState } from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native'

export function Alumno({nombre, matricula, foto, activo, indice, boton}){
	const estado = activo;
	if (activo == boton)
	{return (
		<View>
			<Image style={{width: 50, height: 50}}
			source={{uri: foto,}}/>
			<Text>{indice} {nombre}, {matricula} | {estado ? 'Activo' : 'Inactivo'}</Text>
		</View>
		)}
	return(<View></View>)
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flex: .1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    flex: .8,
    backgroundColor: 'white',
  },
});