import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
import { Alumno } from './Alumno'
import * as alumnos from "./alumnos.json";
import { Navegacion } from './Navegacion';

export default function App() {
  console.log(App);
  const alArr = alumnos.alumnos;
  const [Estado, setEstado] = useState(true);
  return (
    <View style={styles.container}>
        <Text> MiFacultad(MR)</Text>
        <Button onPress={()=>{setEstado(!Estado)}} 
        title={Estado ? 'Mostrar alumnos inactivos' : 'Mostrar alumnos activos'}
        />
      <View style={styles.scrollView}>
        {
        alArr.map(alumno => (
          <Alumno key={alumno.matricula} indice={alumno.id} nombre={alumno.nombre} matricula={alumno.matricula} foto={alumno.foto} activo={alumno.activo} boton={Estado}/>
        ))
        }
      </View>
      <View>
        <Navegacion></Navegacion>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
	tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    flex: 10,
    overflow:'scroll',
    backgroundColor: 'white',
  },
});

