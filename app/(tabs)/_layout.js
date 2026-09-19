import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{headerShown: true}}>
            <Tabs.Screen name="index" options={{title: "Inicio"}}/>
            <Tabs.Screen name="materias"/>
        </Tabs>
    )
}