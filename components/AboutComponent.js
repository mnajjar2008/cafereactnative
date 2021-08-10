import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Button } from 'react-native-elements';

About['navigationOptions'] = screenProps => ({ title: 'About' });

function About() {
    return (
        <ScrollView>
            <View style={{ margin: 15 }}>
                <Text style={styles.title}>Our Cafe</Text>
                <Text style={styles.textContent}>
                    San Jose Cafe's mission is to honor our guests' decision to dine with us by providing world-className service, great-tasting food to their order, in a clean comfortable environment. Since our humble beginnings over 6 years ago in
                    San Jose, California, we have been proud to serve our coffee, waffles, and pastries the way they're supposed to be — fresh, natural, and cooked to order.
                </Text>
                <Text style={styles.title}>Hours</Text>

                <Text style={styles.textContent}>
                    {'\n'}
                    Monday Closed
                    {'\n'}
                    Tuesday 7:00 am - 3:00 pm
                    {'\n'}
                    Wednesday 7:00 am - 3:00 pm
                    {'\n'}
                    Thursday 7:00 am - 3:00 pm
                    {'\n'}
                    Friday 7:00 am - 3:00 pm
                    {'\n'}
                    Saturday 7:00 am - 3:00 pm
                    {'\n'}
                    Sunday 8:00 am - 3:00 pm
                    {'\n'}
                </Text>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.textContent}>
                    1141 Ringwood Ct {'\n'}
                    San Jose, CA 95131
                </Text>
                <Button
                    onPress={() =>
                        Linking.openURL('https://www.google.com/maps/place/1141+Ringwood+Ct,+San+Jose,+CA+95131/@37.3944727,-121.8700569,14z/data=!4m5!3m4!1s0x808fcc03b0824993:0x1eadae59bcdf95d7!8m2!3d37.3927107!4d-121.8941903?hl=en&authuser=0')
                    }
                    title="Directions"
                ></Button>
                <Text style={styles.title}>Email Us</Text>
                <Text style={styles.textContent}>sanjosecafesupport@gmail.com</Text>
                <Button title="Email"></Button>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    textContent: {
        textAlign: 'left',
        margin: 10,
        fontSize: 18,
    },
    title: {
        margin: 15,
        fontSize: 24,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default About;
