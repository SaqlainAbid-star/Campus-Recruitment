import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Button, List } from 'native-base';
import { windowHeight, windowWidth } from './utils/Dimensions';
import database from '@react-native-firebase/database';
import JobsBox from './../components/JobsBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

const JobsScreen = ({ navigation }) => {

    const [jobs, setjobs] = useState(null);
    const [filterJobs, setfilterJobs] = useState(null);
    const [Qualification, setQualification] = useState(null);
   
    const get_jobs = () => {

        const list = [];

        database().ref('/jobs').on('child_added', (data) => {
            const ref = data.val();
            list.push({
                id: data.key,
                companyName: ref.companyName,
                address: ref.address,
                Qualification: ref.Qualification,
                WorkingHours: ref.WorkingHours,
                Salary : ref.Salary,
                jobTitle : ref.jobTitle,
                vaccantSeats: ref.vaccantSeats
            })

            setjobs(list)
            setfilterJobs(list)

        })

    }

    useEffect(() => {
        get_jobs();
    }, []);




    const searchGroup = (value) =>{
        if(value!==''){
            setfilterJobs(
                filterJobs.filter(i=>i.Qualification.toLowerCase().includes(value.toLowerCase()))
            )
        }else{
            setfilterJobs(jobs)
        }
    }



    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.iconStyle}>
                    <Ionicons name='menu' color='#fff' size={25} onPress={() => navigation.openDrawer()}/>
                </View>

                <View style={styles.input}>

                    <View style={styles.icon}>
                        <Ionicons name='search' color='#fff' size={22} />
                    </View>

                    <View style={styles.searchWrapper}>
                        <TextInput placeholder='Search Qualification' 
                        placeholderTextColor='#fff' 
                        style={styles.search}
                        value={Qualification}
                        onChangeText={(value)=>searchGroup(value)}
                        />
                    </View>

                </View>
            </View>


            <FlatList
                data={filterJobs}
                renderItem={({ item }) => <JobsBox item={item} />}
                keyExtractor={item => item.id}
            />


        </View>

    );
}

export default JobsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#01ab9d',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    iconStyle: {
        flex: 1,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderRadius: 3,
        borderWidth: 1,
    },
    search: {
        fontSize: 15,
        color: '#fff'
    }
})
