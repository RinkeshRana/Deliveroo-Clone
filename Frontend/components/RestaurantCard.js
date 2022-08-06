import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    title,
    rating,
    imgUrl,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,

}) => {
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("RestaurantScreen", {
                id,
                title,
                rating,
                imgUrl,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat,
            });

        }} className="bg-white shadow rounded-lg mr-3"
        >
            <Image
                className="h-36 w-64 rounded "
                source={{
                    uri: urlFor(imgUrl).url()
                }}
            />
            <View className="px-3 pb-4" >
                <Text className="font-bold text-lg pt-2" >{title}</Text>
                <View className="flex-row items-center space-x-1" >
                    <StarIcon color={'green'} opacity={0.5} size={22} />
                    <Text className="text-gray-500 text-xs" >
                        <Text className="text-green-500" >
                            {rating}
                        </Text> ∙ {genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1" >
                    <LocationMarkerIcon color={'green'} opacity={0.4} size={22} />
                    <Text className="text-xs to-gray-500" >Near by ∙ {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard