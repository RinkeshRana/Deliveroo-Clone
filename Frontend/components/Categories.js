import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {

    const [categories, setCategories] = useState()
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]`).then((data) => {
            setCategories(data)
        })
    }, [])
    return (
        <ScrollView
            contentContainerStyle={{
                paddingTop: 15,
                paddingHorizontal: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    id={category._id}
                    title={category.title}
                    imgUrl={category.image.asset._ref}
                    description={category.description}
                />
            ))
            }
        </ScrollView>
    )
}

export default Categories