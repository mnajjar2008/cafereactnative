import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

function Home() {
    return (
        <ScrollView>
            <View style={{ margin: 25 }}>
                <Text style={{ marginTop: 70, fontSize: 24, justifyContent: 'center', fontWeight: 'bold', textAlign: 'center', flex: 1 }}>Welcome to San Jose Cafe</Text>
                <Text style={styles.textContent}>
                    We are number one serving cafe in the bay area. our coffee is the best in town. our priority is customers satisfaction. We use the best fresh ingredients to serve our customers. We work hard to focus and improve service that we
                    provide to make sure our customers are happy.
                </Text>
                <View style={{padding:20}}>
                    <Image
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 10,
                        }}
                        source={require('./images/cafe-home.jpg')}
                    />
                </View>

                <Text style={styles.textContent}>
                    Although we offer a wide variety of hot and iced drinks, we also provide savory and sweet food options. So whether you're stopping for your morning coffee, lunch, or an afternoon snack, we've got you covered!
                </Text>

                <Text style={styles.textContent}>We pride ourselves on providing organic, fair trade tea and coffee. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.</Text>
                <View style={{padding:20}}>
                    <Image
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 10,
                        }}
                        source={require('./images/menu-items/breakfast/Stacks.jpeg')}
                    />
                </View>
                <Text style={styles.textContent}>
                    Our classic menu will be sure to please guests of all ages. We offer special quarterly waffles and pastries to please many of our guest who always look forward to visit our cafe and enjoy a great meal.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textContent: {
        textAlign: 'justify',
        margin: 10,
        padding: 10,
    },

    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
});

export default Home;
