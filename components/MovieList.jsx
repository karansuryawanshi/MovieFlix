import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'

var {width, height} = Dimensions.get('window')

export default function MovieList({title, data}) {
    let movieName = "Ant Man and the wasp : quantumania"
    const navigation = useNavigation();
  return (
    <View className = "mb-8 space-x-4">
        <View className = 'mx-4 flex-row justify-between items-center'>
            <Text className="text-white text-xl">{title}</Text>
            <TouchableOpacity>
                <Text className="text-yellow-300 text-lg">See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}>
            {data.map((item,index)=>{
                return(
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={()=>navigation.navigate('Movie', item)}
                        >
                        <View className="space-y-1 mr-4">
                            <Image
                                source={require("../assets/poster2.jpeg")}
                                className="rounded-3xl"
                                style={{width: width*0.33, height:height*0.22}}/>

                                <Text className="text-neutral-300 ml-1">
                                    {movieName.length>14 ? movieName.slice(0,14)+"...":movieName}
                                </Text>

                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </ScrollView>
    </View>
  )
}
