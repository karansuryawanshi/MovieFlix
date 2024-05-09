import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window')

export default function TrendingMovies({data}){
    const navigation = useNavigation();
    const handleClick =({item})=>{
      navigation.navigate("Movie", item)
    }
    return (
      <View className="mb-8">
        <Text className="mx-5 text-xl mb-5 text-white">Trending</Text>
        <Carousel
        data={data}
        renderItem={((item)=><MovieCard item={item} handleClick={handleClick}/>)}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display:"flex",alignItem:"center"}}
        />
      </View>
    )
}

const MovieCard =({ handleClick, item})=>{
  return(
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        source={require("../assets/carosoul.jpg")}
        style={{
          width:width*0.6,
          height:height*0.4
        }}
        className="rounded-3xl"
        />
    </TouchableWithoutFeedback>
  )
}

  
