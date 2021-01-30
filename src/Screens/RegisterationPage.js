import React, {useState}  from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput, CheckBox  } from 'react-native';
import logo from "../components/images/images.jpg";
import DatePicker from 'react-native-datepicker'
import RadioButton from 'react-native-simple-radio-button-input';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/Fontisto';

// this.state = {
//     country: 'uk'
// }

import { ScrollView } from 'react-native-gesture-handler';



export default function Registeration(){

    const [isSelected, setSelection] = useState(false);
    const DATA = ['Male', 'Female'];
    // const BloodData =['O-', 'O+', 'A+','A-','B+', 'B-','AB+','AB-']
    const [date, setDate] = useState('09-10-2020');
    const [value, setData] = useState({selected:null})
    // this.setDate = {
    //   selected:null
    // };
 


    return(
        <View style={styles.container}>

            <View style={styles.FormBody}>
                <Image source={logo} 
                    style={{width:70, height:70, marginBottom:10,}}
                    />
                 <ScrollView style={{  marginBottom:15}}>

                <View style={styles.FormInside}>
                    <View style={{flexDirection:"column"}}>
                        <Text style={{textAlign:'left'}}>First Name:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke", marginLeft:2, marginRight:5,  }}
                        placeholder={"first Name"}
                        />
                        <Text>Last Name:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                        placeholder={"last Name"}
                        />
                        <Text style={{textAlign:'left'}}>Mobile Number:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke", marginLeft:2, marginRight:5,  }}
                        placeholder={"03XX-XXXXXX"}
                        />
                        <Text>Email:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                        placeholder={"abc@gmail.com"}
                        keyboardType={'email-address'}
                        />
                        <Text>Address:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                        placeholder={"Home No., Sector, Town .. etc"}
                        />
                        <Text>City:</Text>
                        <TextInput
                        style={{ height: 25, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                        placeholder={"city"}
                        />  
                        <Text>Date of Birth:</Text>
                        <DatePicker
                          style={styles.datePickerStyle}
                          date={date} // Initial date from state
                          mode="date" // The enum of date, datetime and time
                          placeholder="select date"
                          format="DD-MM-YYYY"
                          minDate="01-01-2016"
                          maxDate="01-01-2019"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                              },
                    dateInput: {
                    marginLeft: 36,
                    },
                 }}
              onDateChange={(date) => {
               setDate(date);
              }}
              />
            <View>
                <Text>
                    Selected Gender 
                </Text>
                {DATA.map(val=>(
        <View style={{flexDirection:'row', marginBottom:15, alignItems:'center'}}>
          <RadioButton 
              color={'red'}
              selected={false}
              // onPress={()=>{this.setState({
              //         selected: val
              //     })
              // }}
          />
            <Text style={{marginLeft:7}}> {val} </Text>
          </View>
        ))}

               

                </View>          
            </View>
                   
            </View>
                  
            <View>
              <Text>
                Select a Blood Group
              </Text>
            <DropDownPicker
    items={[
        {label: 'O-', value: 'O-', icon: () => <Icon name="blood-drop" size={18} color="red" />, hidden: true},
        {label: 'O+', value: 'O+', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'A+', value: 'A+', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'A-', value: 'A-', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'B+', value: 'B+', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'B-', value: 'B-', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'AB+', value: 'AB+', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        {label: 'AB-', value: 'AB-', icon: () => <Icon name="blood-drop" size={18} color="red" />},
        
    
      ]}
        // defaultValue={'S'}
        placeholder="O+,A+,B...etc+"
        containerStyle={{height: 40, marginBottom:10}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    // onChangeItem={item => this.setState({
    //     country: item.value
    // })}
/>    
</View> 
                <View>
                  <Text>
                    Enter your Age:
                  </Text>
                  <TextInput
                  style={{ height: 25, width: 120, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                  placeholder={"Your Age"}
                  ></TextInput>
                </View>
                <View>
                  <Text>
                    Enter Your Weight:
                  </Text>
                  <TextInput
                  style={{ height: 25, width: 180, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5, backgroundColor:"whitesmoke" }}
                  placeholder={"Your Weight in Pound"}
                  ></TextInput>
                </View>
                <Text>Last Date of Donation:</Text>
                        <DatePicker
                          style={styles.datePickerStyle}
                          date={date} // Initial date from state
                          mode="date" // The enum of date, datetime and time
                          placeholder="select date"
                          format="DD-MM-YYYY"
                          minDate="01-01-2016"
                          maxDate="01-01-2019"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                              },
                    dateInput: {
                    marginLeft: 36,
                    },
                 }}
              onDateChange={(date) => {
               setDate(date);
              }}
              />
              
            
                     
                </ScrollView>
                <TouchableOpacity
        // onPress={() => navigation.navigate("Login Page")}
        style={styles.btn}>
        <Text style={{ fontSize: 18, color: '#fff', textAlign:"center" }}>Register</Text>
      </TouchableOpacity> 
          
           </View>
        
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
      
      },
    //   datePickerStyle: {
    //     width: 200,
    //     marginTop: 20,
    //   },
    btn: {
      // flex: 1, 
      width: 250,
      height:40,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: 'red',
  
      
    },
    FormInside:{
      // marginBottom:80,
      
      flex:8

    },  
      FormBody:{ 
        
        height:420,
        width:320,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius:20,
        paddingBottom:35,
        paddingTop:15,
        shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 3,
  },

 
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  
  elevation: 7,
  
    },
    
    
})