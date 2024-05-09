import React, { useEffect } from 'react'
import { View, Text, ScrollView, Platform, Dimensions, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';


var {width, height} = Dimensions.get('window')
const ios = Platform.OS == "ios"
const topMargin = ios? "": "mt-3"

export default function MovieScreens() {
  const {params: item} = useRoute();
  let movieName = "Ant Man and the wasp : quantumania"
  const [isFavourite, setIsFavourite] = useState(false)
  const [cast, setCast] = useState([1,2,3,4,5])
  useEffect(()=>{
    
  }, [])

  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{paddingBottom:20}}
    className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView className=" absolute z-20 w-full flex-row justify-between items-center px-4">
          <TouchableOpacity onPress={()=>{navigation.goBack()}} className="rounded-xl p-1 bg-yellow-400">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? 'yellow':"white"}/>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={require("../assets/poster2.jpeg")}
                  style={{width, height:height*0.55}}/>

          <LinearGradient 
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{width, height:height*0.40}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>
      <View style={{marginTop: -(height*0.09)}}className='space-y-3'>
        <Text className="text-white text-3xl text-center font-bold tracking-wider">
            {movieName}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
            Released · 2023 · 170 min
        </Text>

        <View className="flex-row text-neutral-400 justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Action ·
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Thrill ·
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Comedy ·
            </Text>
        </View>

        <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti, aspernatur nihil facere autem unde neque, sit ratione accusamus laborum iste beatae sequi. Aspernatur, dicta a sequi eum quas voluptatum!
        </Text>
          
      </View>
      <Cast cast={cast}>
      </Cast>
    </ScrollView>
  )
}
