import { StyleSheet, Text, ScrollView, View, Button, Pressable, Image } from 'react-native';

export function Navegacion(){
    return(
        <View style={styles.container}>
            <Pressable style={styles.tab}>
                <Text>Título 1</Text>
            </Pressable>
            
            <Pressable style={styles.tab}>
                <Text>Título 2</Text>
            </Pressable>
            
            <Pressable style={styles.tab}>
                <Text>Título 3</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:25,
  },
  tab: {
    flex:1,
    borderColor:'brown',
    borderWidth:3,
    padding: 20
  }
});