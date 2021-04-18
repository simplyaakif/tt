import React from 'react';
import {View, StyleSheet, Text, FlatList} from "react-native";
import colors from "../../Config/Styles/Colors";
import Ar_DefinitionPill from "./Ar_DefinitionPill";

const ArDefinitionBlock = ({definition}) => {
    return (
        <>
            <View style={styles.panel}>
                <Text style={{color: 'gray', marginTop: 4}}>Definition</Text>
                <Text style={{textTransform: 'capitalize'}}>
                    {definition.item.definition}
                </Text>

                <Text style={{color: 'gray', marginTop: 10}}>Parts of Speech</Text>
                <Text style={{textTransform: 'capitalize'}}>
                    {definition.item.partOfSpeech}
                </Text>

                <Text style={{color: 'gray', marginTop: 10}}>Synonyms</Text>
                <FlatList
                    style={{flexDirection: 'row'}}
                    keyExtractor={(item, index) => index.toString()}
                    data={definition.item.synonyms}
                    renderItem={(synonym) => <Ar_DefinitionPill synonym={synonym}/>}
                />

                {definition.item.examples ?
                <>
                    <Text style={{color: 'gray', marginTop: 10}}>Use in Sentence</Text>
                    <Text style={{textTransform: 'capitalize'}}>
                        {definition.item.examples}
                    </Text>
                </>
                :null }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    panel: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        paddingVertical: 15,
        margin: 10,
        marginBottom: 0,
    },

});

export default ArDefinitionBlock;