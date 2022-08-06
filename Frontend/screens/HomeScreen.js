import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    ChevronDownIcon,
    SearchIcon,
    UserIcon,
    AdjustmentsIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {

    const [featuredCategories, setFeaturedCategories] = useState([])
    // headerShown false to hide the header
    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured"] {
                ...,
                restaurants[]->{
                ...,
                dishes[]->, 
     
                }
            }  
                `).then(data => {
                setFeaturedCategories(data)
            })

    }, [])



    return (
        <SafeAreaView className="bg-white " >
            {/* <SafeAreaView className="bg-white pt-5" > */}
            <View className="flex-row items-center pb-3 mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1" >
                    <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
                    <Text className="text-lg font-bold" >Current Location
                        <ChevronDownIcon size={20} color={'#00CCBB'} />
                    </Text>
                </View>
                <UserIcon size={30} color={'#00CCBB'} />
            </View>

            {/* Search */}
            <View className="flex-row items-center mx-4 pb-2 " >
                <View className="bg-gray-200 flex-row space-x-2 p-2 items-center flex-1" >
                    <SearchIcon size={20} color={'#00CCBB'} />
                    <TextInput
                        placeholder='Restaurant and cuisines'
                        className=" rounded-lg"
                        keyboardType='default'
                    />

                </View>
                <View>
                    <AdjustmentsIcon size={30} color={'#00CCBB'} />
                </View>
            </View>
            {/* Body */}
            <ScrollView
                className="bg-gray-100 "
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Category */}
                <Categories />
                {/* Feautured Row */}

                {featuredCategories?.map(category => (
                    <FeaturedRow
                        id={category._id}
                        key={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}


            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen