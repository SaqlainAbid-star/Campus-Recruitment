
import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Icon, Button } from 'native-base';
import { windowHeight, windowWidth } from '../screens/utils/Dimensions';
import database from '@react-native-firebase/database';


const StudentScreen = ({ navigation }) => {

  const [Qualification, setQualification] = useState(null);
  const [studentName, setstudentName] = useState(null);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [address, setaddress] = useState(null);
  const [dob, setdob] = useState(null);
  const [city, setcity] = useState(null);


  const submit_Data = () =>{
    let student = {
      studentName,
      mobileNumber,
      dob,
      address,
      city,
      Qualification,
    }

    database().ref('/students').push(student).then(() => {
      Alert.alert(
        'The Student has been Added Successfully!',
      );
    })

     setstudentName('')
     setmobileNumber('')
     setaddress('')
     setQualification('')
     setcity('')
     setdob('')
  }
  

  return (
    <ScrollView style={styles.container}>

      {/* <View style={styles.heading}>
        <Text style={styles.headingText}>ADD QUALIFICATION STUDENT</Text>
      </View> */}

      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>FULL NAME</Label>
              <Input value={studentName} onChangeText={(value)=>setstudentName(value)} />
            </Item>
            <Item stackedLabel>
              <Label>MOBILE NUMBER</Label>
              <Input value={mobileNumber} onChangeText={(value)=>setmobileNumber(value)}/>
            </Item>
            <Item stackedLabel>
              <Label >DATE OF BIRTH</Label>
              <Input value={dob} onChangeText={(value)=>setdob(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>ADDRESS</Label>
              <Input value={address} onChangeText={(value)=>setaddress(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>CITY</Label>
              <Input value={city} onChangeText={(value)=>setcity(value)}/>
            </Item>


            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={Qualification}
                onValueChange={(value) => setQualification(value)}
              >
                <Picker.Item label="Qualification" value="Qualification" />
                <Picker.Item label="Matric" value="Matric" />
                <Picker.Item label="Intermediate" value="Intermediate" />
                <Picker.Item label="Bachelor" value="Bachelor" />
                <Picker.Item label="Masters" value="Masters" />
                <Picker.Item label="Phd" value="Phd" />
      
              </Picker>
            </Item>

            <TouchableOpacity style={styles.buttonContainer} onPress={submit_Data}>
              <Text style={styles.buttonText}>Add Student</Text>
            </TouchableOpacity>

          </Form>
        </Content>
      </Container>
    </ScrollView>
  );
}

export default StudentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  },
  buttonContainer: {
    marginTop: 25,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#01ab9d',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});