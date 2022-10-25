import React, { useState } from 'react';
import { FlatList, ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

const dummyArray = [
    { id: '1', value: 'Flamengo', image: require("../assets/flamengo.png"), imageBanckground: require("../assets/flamengo-maracana.jpg") },
    { id: '2', value: 'Vasco', image: require("../assets/vasco.png"), imageBanckground: require("../assets/vasco-maracana.jpg") },
    { id: '3', value: 'Fluminense', image: require("../assets/fluminense.png"), imageBanckground: require("../assets/fluminense-maracana.jpg") },
    { id: '4', value: 'Botafogo', image: require("../assets/botafogo.png"), imageBanckground: require("../assets/botafogo-maracana.jpg") },
    { id: '5', value: 'Sampaio Corrêa', image: require("../assets/sampaio-correa.png"), imageBanckground: require("../assets/sampaio-correa-estadio.webp") },
];

export default function CampeonatoBrasileiroRJ() {
    const [listItems, setListItems] = useState(dummyArray);

    const ItemView = ({ item }) => {
        return (
            // FlatList Item
            <View>
                <ImageBackground source={item.imageBanckground} resizeMode="cover" style={styles.imageBanckground}>
                    <Image
                        source={item.image}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text
                        style={styles.item}
                        onPress={() => getItem(item)}>
                        {item.value}
                    </Text>
                </ImageBackground>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                }}
            />
        );
    };

    const getItem = (item) => {
        if (item.id == '1')
            alert('Campeonato Brasileiro (8 títulos) \n\n 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020');
        if (item.id == '2')
            alert('Campeonato Brasileiro (4 títulos) \n\n 1974, 1989, 1997 e 2000');
        if (item.id == '3')
            alert('Campeonato Brasileiro (4 títulos) \n\n 1970, 1984, 2010 e 2012');
        if (item.id == '4')
            alert('Campeonato Brasileiro (1 título) \n\n 1995.');
        if (item.id == '5')
            alert('Campeonato Brasileiro (0 título) \n\n ----');
    };

    return (
        <View style={styles.container}>

            <FlatList
                data={listItems}
                //data defined in constructor
                ItemSeparatorComponent={ItemSeparatorView}
                //Item Separator View
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    item: {
        padding: 10,
        fontSize: 25,
        // marginVertical: 18,
        // marginHorizontal: 26,
        height: 44,
        color: '#ff0',
        width: 200,
    },
    imageBanckground: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 5,
        padding: 20,
    }
});

