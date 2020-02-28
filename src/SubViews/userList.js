import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, Button } from "react-native";
import { connect } from 'react-redux';
const userList =  (props) => {
    
    let showList

    useEffect(() => {

    }, props.User.length)

    if(props.User.length !== 0){
        showList = 
            props.User.map((user, index) => {
                
               return(
                   <View style={{ flexDirection: "row", width: "90%", padding: 10, alignItems:"center" }}>
                       <Text>{user.name}</Text>
                       <Text style={{marginLeft: 5}}>{user.address}</Text>
                       <Button 
                        onPress={props.onDelete.bind(null,index)}
                        title="Delete" color="red"/>
                       <Button
                           onPress={props.onUpdate.bind(null, user, index)}
                           title="Update" color="green" />
                   </View>
               )
            })
        
    }
    else{
       showList = <Text>Empty</Text>
    }


    return(
        <View>
            <Text>Todo List</Text>
             {showList}
        </View>
    )
}

const mapStateToProps = state => {
    return {
        User: state.Auth.credentials
    }
}


export default connect(mapStateToProps, null)(userList)