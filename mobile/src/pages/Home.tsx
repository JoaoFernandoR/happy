import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import mapMarker from '../../assets/happy65.png'
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { AppLoading } from 'expo'
import { useNavigation } from '@react-navigation/native'


interface LocationProps {
    latitude: number;
    longitude: number;
}


const Home = () => {
    
    const navigation =  useNavigation()
    const [location, setLocation] = useState<LocationProps>();
    const [errorMsg, setErrorMsg] = useState<string>('');
    
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords)
    })();
    }, []);

    if(!location) return <AppLoading /> 

    else return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008 
                }}>
                <Marker icon={mapMarker}
                coordinate={{
                    latitude: -22.0219228,
                    longitude: -47.9119373,
                }}
                calloutAnchor={{
                    x: 4.7,
                    y: 1.5
                }}>
                    <Callout tooltip={true} onPress={() => {}}>
                        <View style={styles.calloutContainer}>
                        <Text style={styles.calloutText}> Lar das meninas </Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}> 2 orfanatos encontrados</Text>
                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => navigation.navigate('another')}>
                    <Feather name='plus' size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </View>
        )
    }


export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    map : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    calloutContainer : {
        width: 160,
        height: 46,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    calloutText : {
        color: '#0089a5',
        fontSize: 14
    },
    footer :{
        position: 'absolute',
        left: 24,
        right: 24, 
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 46, 
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 7,
    },
    footerText : {
        color: '#8fa7b3',
        fontFamily: 'Ubuntu_700Bold'
    },
    createOrphanageButton : {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'
    }
})
