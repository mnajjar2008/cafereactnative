import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

About['navigationOptions'] = screenProps => ({ title: 'About' });

function About() {
    const sendEmail = () => {
        MailComposer.composeAsync({
            recipients: ['sanjosecafesupport@gmail.com'],
            subject: 'Support',
            body: 'Hello, \n',
        });
    };

    return (
        <ScrollView>
            <View style={{ margin: 15 }}>
                <Text style={styles.title}>Our Cafe</Text>
                <Text style={styles.textContent}>
                    San Jose Cafe's mission is to honor our guests' decision to dine with us by providing world-className service, great-tasting food to their order, in a clean comfortable environment. Since our humble beginnings over 6 years ago in
                    San Jose, California, we have been proud to serve our coffee, waffles, and pastries the way they're supposed to be fresh, natural, and cooked to order.
                </Text>
                <Text style={styles.title}>Hours</Text>
                <View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Monday</Text>
                        <Text style={styles.textContent}>Closed</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Tuesday</Text>
                        <Text style={styles.textContent}>7:00 am - 3:00 pm</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Wednesday</Text>
                        <Text style={styles.textContent}>7:00 am - 3:00 pm</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Thursday</Text>
                        <Text style={styles.textContent}>7:00 am - 3:00 pm</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Friday</Text>
                        <Text style={styles.textContent}>7:00 am - 3:00 pm</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Saturday </Text>
                        <Text style={styles.textContent}>7:00 am - 3:00 pm</Text>
                    </View>
                    <View style={styles.hoursText}>
                        <Text style={styles.textContent}>Sunday</Text>
                        <Text style={styles.textContent}> 8:00 am - 3:00 pm</Text>
                    </View>
                </View>
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
                <Button onPress={sendEmail} title="Email"></Button>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    textContent: {
        textAlign: 'left',

        fontSize: 18,
    },
    title: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 24,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hoursText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
export default About;
