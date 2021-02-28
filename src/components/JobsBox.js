import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { AuthContext } from '../navigation/AuthProvider';

function WorkerBox({ item }) {

    const { user, logout, status } = useContext(AuthContext);

    const onDelete = (id) => {
        Alert.alert(
            'Delete post',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Confirm',
                    onPress: () => deletePost(id),
                },
            ],
            { cancelable: false }
        );
    }

    const deletePost = (id) => {
        let userRef = database().ref('jobs/' + id);
        userRef.remove()
    }

    return (
        <View style={styles.students}>
            <View style={styles.user}>

                <View style={styles.iconWrapper}>
                    <FontAwesome5 name="industry" color='#fff' size={50} />
                </View>

                <View style={styles.userinfo}>

                    <View style={styles.nameWrapper}>
                        <Text style={styles.name}>{item.companyName}</Text>
                    </View>

                    <View style={styles.dobWrapper}>
                        <Text style={styles.dob}>Job Title: {item.jobTitle}</Text>
                    </View>

                    <View style={styles.dobWrapper}>
                        <Text style={styles.dob}>Vaccant Positions: {item.vaccantSeats}</Text>
                    </View>

                </View>



            </View>

            <View style={styles.address}>

                <View style={styles.userAddress}>

                    <View style={styles.home}>

                        <Text style={styles.addressText}>Address: {item.address}</Text>
                    </View>


                    <View style={styles.home}>

                        <Text style={styles.addressText}>Salary: {item.Salary}</Text>
                    </View>

                    <View style={styles.home}>

                        <Text style={styles.addressText}>Working Hours: {item.WorkingHours}</Text>
                    </View>

                    <View style={styles.home}>

                        <View style={styles.qual}>
                            <Text style={styles.addressText}>Qualification: {item.Qualification}</Text>
                        </View>


                        {
                            status == 'Admin' ? (
                                <View style={styles.bin}>
                                    <TouchableOpacity onPress={() => onDelete(item.id)} >
                                        <Ionicons name="md-trash-bin" size={25} />
                                    </TouchableOpacity>
                                </View>
                            ) : null
                        }




                    </View>

                </View>

            </View>


        </View>
    )
}

export default WorkerBox;

const styles = StyleSheet.create({
    students: {
        flex: 1,
        padding: 10,
        width: '100%',
        height: '100%',


    },
    user: {
        backgroundColor: '#01ab9d',
        width: '100%',
        height: 90,
        padding: 10,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,

    },
    iconWrapper: {
        flex: 1,
    },
    userinfo: {
        flex: 3,
    },
    nameWrapper: {

    },

    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    dob: {
        fontSize: 16,
        color: '#fff',
    },
    bloodGroup: {
        fontSize: 23,
        color: '#01ab9d',
    },
    address: {
        marginTop: 2,
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    home: {
        flexDirection: 'row',
        marginTop: 5,

    },
    addressText: {
        marginLeft: 5,
        fontSize: 18,
        color: '#393e46',
    },
    qual: {
        flex: 5,
    },
    bin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})