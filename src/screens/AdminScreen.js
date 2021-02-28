import React,{useContext} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

function AdminScreen({navigation}) {

  const {logout} = useContext(AuthContext);
    

    return (
      <View>
          <Text>AdminScreen</Text>
          <TouchableOpacity
          onPress={()=>logout()}>
            <Text>Logout</Text>
          </TouchableOpacity>
      </View>
      );
       
  }

export default AdminScreen;