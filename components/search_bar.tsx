import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface props {
  placeholder: string,
  onPress?: () => void,
  value?: string,
  onChangeText?: (text: string) => void,
}

const SearchBar = ({ placeholder, onPress, value, onChangeText}: props) => {
  return (
    <View className='flex-row items-center rounded-full px-5 py-4 bg-dark-200'>
      <Image source={icons.search} resizeMode='contain' tintColor='#ab8bff' className='size-5'/>
       <TextInput 
        onPress={onPress} 
        placeholder={placeholder} 
        value={value}
        onChangeText={onChangeText} 
        placeholderTextColor='#8ab55db' 
        className="flex-1 ml-2 text-white" />
    </View>
  )
}

export default SearchBar