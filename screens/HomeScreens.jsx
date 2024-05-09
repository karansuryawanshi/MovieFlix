import React, {component} from 'react'
import { Text, TouchableOpacity, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import {Bars3CenterLeftIcon} from "react-native-heroicons/outline"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import { ScrollView } from 'react-native'
import TrendingMovies from '../components/TrendingMovies'
import { useState } from 'react'
import MovieList from '../components/MovieList'

export default function HomeScreens() {

const [trending, setTrending] = useState([1,2,3])
const [upComing, setUpComing] = useState([1,2,3])
const [topRated, setTopRated] = useState([1,2,3])

    return (
      <View className="flex-1 bg-neutral-800">
        <SafeAreaView className="mb-3">
          <StatusBar style="light"/>
            <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
            <Text className="text-white text-3xl font-bold">
              <Text className="text-yellow-300">M</Text>ovies
            </Text>
            <TouchableOpacity>
              <MagnifyingGlassIcon size={30}strokeWidth={2} color="white"/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:10}}>

          {/* Trending movies row */}
          <TrendingMovies data={trending}></TrendingMovies>

          {/* Upcoming movies row */}
          <MovieList title={"UpComing"} data={upComing}></MovieList>

          {/* Upcoming movies row */}
          <MovieList title={"Top Rated"} data={topRated}></MovieList>

        </ScrollView>
      </View>
    )
}
