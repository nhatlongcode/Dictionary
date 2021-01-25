import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';




const MenuButton = ({navigation, icon, title, navigateTo}) =>{

    const onButtonPress = () =>{
        navigation.navigate(navigateTo);
    }

    return(
        <View style={{margin: 8}}>
            <Icon.Button name={icon} backgroundColor="#51ABF0" onPress={onButtonPress} size={30} >
                <Text style={{fontSize: 20, color: 'white', marginLeft: 5}}>
                    {title}
                </Text>
            </Icon.Button>
        </View>
    );
}

export default MenuButton;