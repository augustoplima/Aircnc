import React, {useState,useEffect} from 'react';
import { SafeAreaView,ScrollView,Image,StyleSheet,AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

import SpotList from '../components/Spotlist';

export default function List(){
    const [techs, setTechs]= useState([]);
    
    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storagedTechs =>{
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    },[]);
    
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image style={styles.logo} source={logo}/>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    logo:{
        height:32,
        resizeMode:"contain",
        marginTop:25,
        alignSelf:'center',
    },
});
