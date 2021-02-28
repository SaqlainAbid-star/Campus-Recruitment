
import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Icon, Button } from 'native-base';
import { windowHeight, windowWidth } from '../screens/utils/Dimensions';
import database from '@react-native-firebase/database';


const CompanyScreen = ({ navigation }) => {

  const [Qualification, setQualification] = useState(null);
  const [Salary, setSalary] = useState(null);
  const [WorkingHours, setWorkingHours] = useState(null);
  const [companyName, setcompanyName] = useState(null);
  const [jobTitle, setjobTitle] = useState(null);
  const [address, setaddress] = useState(null);
  const [vaccantSeats, setvaccantSeats] = useState(null);



  const submit_Data = () =>{
    let job = {
      companyName,
      jobTitle,
      vaccantSeats,
      address,
      WorkingHours,
      Salary,
      Qualification,
    }

    database().ref('/jobs').push(job).then(() => {
      Alert.alert(
        'The Job has been Added Successfully!',
      );
    })

     setcompanyName('')
     setjobTitle('')
     setaddress('')
     setQualification('')
     setvaccantSeats('')
     setSalary('')
     setWorkingHours('')
  }
  

  return (
    <ScrollView style={styles.container}>

      {/* <View style={styles.heading}>
        <Text style={styles.headingText}>ADD QUALIFICATION JOB</Text>
      </View> */}

      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>COMPANY NAME</Label>
              <Input value={companyName} onChangeText={(value)=>setcompanyName(value)} />
            </Item>
            <Item stackedLabel>
              <Label>JOB TITLE</Label>
              <Input value={jobTitle} onChangeText={(value)=>setjobTitle(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>VACCANT SEATS</Label>
              <Input value={vaccantSeats} onChangeText={(value)=>setvaccantSeats(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>ADDRESS</Label>
              <Input value={address} onChangeText={(value)=>setaddress(value)}/>
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
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={Salary}
                onValueChange={(value) => setSalary(value)}
              >
                <Picker.Item label="Salary" value="Salary" />
                <Picker.Item label="15000" value="15000" />
                <Picker.Item label="20000" value="20000" />
                <Picker.Item label="35000" value="35000" />
                <Picker.Item label="50000" value="50000" />
      
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={WorkingHours}
                onValueChange={(value) => setWorkingHours(value)}
              >
                <Picker.Item label="Working Hours" value="Working Hours" />
                <Picker.Item label="8 hours" value="8 hours" />
                <Picker.Item label="16 hours" value="16 hours" />
                <Picker.Item label="24 hours" value="24 hours" />

      
              </Picker>
            </Item>

            

            <TouchableOpacity style={styles.buttonContainer} onPress={submit_Data}>
              <Text style={styles.buttonText}>Add Job</Text>
            </TouchableOpacity>

          </Form>
        </Content>
      </Container>
    </ScrollView>
  );
}

export default CompanyScreen;

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