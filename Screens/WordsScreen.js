import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import colors from "../Config/Styles/Colors";
import ArTextInput from "../Components/Ar_TextInput";
import wordsApi from '../api/words';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Ar_DefinitionBlock from "../Components/Dictionary/Ar_DefinitionBlock";

const WordsScreen = () => {
    const [keyword, setKeyword] = useState('example');
    const [word, setWord] = useState([]);
    useEffect(() => {
        loadDefinition();
    }, [])
    const loadDefinition = async () => {
        const response = await wordsApi.getWords(keyword);
        setWord(response.data);
    }
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    Online Dictionary
                </Text>
                <Text style={styles.containerSubText}>Search for a Word below</Text>
                <View style={styles.searchView}>
                    <ArTextInput value={keyword} onChangeText={(val) => setKeyword(val)} icon={'book'} placeholder={'Type' +
                    ' English' +
                    ' Language Word'}/>
                    <TouchableWithoutFeedback onPress={() => loadDefinition()}>
                        <View style={styles.searchIconBox}>
                            <MaterialCommunityIcons name={'text-search'} size={22} style={styles.searchIcon}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View>
                <ScrollView>
                    <Text style={{textTransform: 'capitalize', textAlign: 'center', marginVertical: 20, fontSize: 18}}>Results
                        for the word " {word.word} "</Text>
                    <FlatList keyExtractor={(item, index) => index.toString()} data={word.results}
                              renderItem={(definition) => <Ar_DefinitionBlock definition={definition}/>}/>

                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 20,
    },
    containerText: {
        color: colors.secondary,
        fontSize: 24,
        fontWeight: '700',
        marginTop: 30,
    },
    containerSubText: {
        color: colors.white,
        marginBottom: 15,
    },

    searchView: {
        flexDirection: 'row',
    },
    searchIconBox: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10,
        backgroundColor: colors.secondary,
    },
    searchIcon: {
        color: colors.primary,
    },
    scrollView: {
        flex: 1,
    },

});
export default WordsScreen;