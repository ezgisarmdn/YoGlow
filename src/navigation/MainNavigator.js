import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from 'react-native-vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { 
    HomeScreen,
    SkinCareScreen,
    FaceYogaScreen,
    BeautyBlogsScreen
} from "../screens";
import BlogDetailScreen from '../screens/BlogDetailScreen';

//Home Stack Navigator
const HomeStack = createStackNavigator();
function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
        </HomeStack.Navigator>
    );
};

const SkinCareStack = createStackNavigator();
function SkinCareStackNavigator() {
    return (
        <SkinCareStack.Navigator>
            <SkinCareStack.Screen name="SkinCare" component={SkinCareScreen}/>
        </SkinCareStack.Navigator>
    );
};

const FaceYogaStack = createStackNavigator();
function FaceYogaStackNavigator() {
    return (
        <FaceYogaStack.Navigator>
            <FaceYogaStack.Screen name="FaceYoga" component={FaceYogaScreen}/>
        </FaceYogaStack.Navigator>
    );
};

const BeautyBlogsStack = createStackNavigator();
function BeautyBlogsStackNavigator() {
    return (
        <BeautyBlogsStack.Navigator>
            <BeautyBlogsStack.Screen name="BeautyBlogs" component={BeautyBlogsScreen}/>
            <BeautyBlogsStack.Screen name="BlogDetail" component={BlogDetailScreen}/>
        </BeautyBlogsStack.Navigator>
    );
};

//Tab Navigator
const Tab = createBottomTabNavigator();
export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
               initialRouteName='HomePage'
               screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FF77B7',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:{
                    height: 90
                },
                tabBarItemStyle:{
                    margin: 8,
                }
               }}
            >
                <Tab.Screen
                   name='HomePage'
                   component={HomeStackNavigator}
                   options={{
                   tabBarIcon: ({focused}) => (
                    <AntDesign name="home" size={25} color={focused ? '#FF77B7': 'gray'} />
                   )
                   }}
                />
                <Tab.Screen
                   name='Skin Care'
                   component={SkinCareStackNavigator}
                   options={{
                   tabBarIcon: ({focused}) => (
                    <AntDesign name="hearto" size={24} color={focused ? '#FF77B7': 'gray'} />
                   )
                   }}
                />
                <Tab.Screen
                   name='Face Yoga'
                   component={FaceYogaStackNavigator}
                   options={{
                   tabBarIcon: ({focused}) => (
                    <AntDesign name="smileo" size={24} color={focused ? '#FF77B7': 'gray'} />
                   )
                   }}
                />
                <Tab.Screen
                   name='Discover'
                   component={BeautyBlogsStackNavigator}
                   options={{
                   tabBarIcon: ({focused}) => (
                    <AntDesign name="profile" size={24} color={focused ? '#FF77B7': 'gray'} />
                   )
                   }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

