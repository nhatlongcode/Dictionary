import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

const TranslateBut = ({vntoen, onPress}) => {
    if (vntoen)
    {
        return(
            <View>
                <TouchableOpacity onPress={onPress}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../image/vn.png')} style={{width: 38, height: 38}}/>
                        <Image source={require('../image/arrow.png')} style={{width: 18, height: 18, margin: 10}}/>
                        <Image source={require('../image/uk.png')} style={{width: 38, height: 38}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    else
    {
        return(
            <View>
                <TouchableOpacity onPress={onPress}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../image/uk.png')} style={{width: 38, height: 38}}/>
                        <Image source={require('../image/arrow.png')} style={{width: 18, height: 18, margin: 10}}/>
                        <Image source={require('../image/vn.png')} style={{width: 38, height: 38}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default TranslateBut;