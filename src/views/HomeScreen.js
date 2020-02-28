import React, { useState, useEffect } from 'react'

import { View, Text, TextInput, SafeAreaView, Button } from 'react-native'
import { addUser, deleteUser, updateUser } from "../redux/actions/Auth";
import { connect } from "react-redux";
import UserList from "../SubViews/userList";

const HomeScreen = (props) => {

  const [username, setUserName] = useState(null)
  const [userAddress, setUserAddress] = useState(null)
  const [showUpdate, setShowUpdate] = useState(false)
  const [index, setIndex] = useState(null)
  useEffect(() => {
    
  }, [props.User.length, showUpdate])


  const _addSome = () => {
    let userInfo = {
      name: username,
      address: userAddress
    }
    let collectionUser = []
    collectionUser.push(userInfo)
    let Merge = collectionUser.concat(props.User)

   
    props.AddUser(Merge)
    setUserAddress("")
    setUserName("")
  }

  const _deleteSome = (index) => {
    

    props.DeleteUser(index)
  }

  const _updateSome = (val, index) => {

    setShowUpdate(true)
    setUserName(val.name)
    setUserAddress(val.address)
    setIndex(index)

    
  }

  const _submitUpdate = () => {
    let userInfo = {
      name: username,
      address: userAddress
    }
    let collectionUser = []
    collectionUser.push(userInfo)
    // let Merge = collectionUser.concat(props.User)
    // props.User.splice(index, 1, action.credentials)
    props.UpdateUser(userInfo, index)
    setIndex(null)
    setShowUpdate(false)
    setUserAddress("")
    setUserName("")
  }
  
  return (
    <SafeAreaView stye={{ flex: 1 }}>
      <View>
        <Text>

          Add something
            </Text>

        <View style={{ padding: 10 }}>
          <TextInput
            value={username}
            onChangeText={(val) => setUserName(val)}
            style={{ backgroundColor: "#c5c5c5", padding: 10, width: "100%", height: 40, borderRadius: 5 }}
            placeholderTextColor="#fff"
            placeholder="Task"
          />

          <TextInput
            value={userAddress}
            onChangeText={(val) => setUserAddress(val)}
            style={{ backgroundColor: "#c5c5c5", padding: 10, width: "100%", height: 40, marginTop: 5, borderRadius: 5 }}
            placeholderTextColor="#fff"
            placeholder="Description    "
          />

          {showUpdate == true ? <Button
            onPress={() => _submitUpdate()}
            title="Update" /> :
            
            <Button
              onPress={() => _addSome()}
              title="Add" />
            }

        </View>

        <View>
          <UserList
            onUpdate={_updateSome}
            onDelete={_deleteSome}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}


const mapStateToProps = state => {
  return {
    User: state.Auth.credentials
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddUser: (val) => dispatch(addUser(val)),
    DeleteUser: (index) => dispatch(deleteUser(index)),
    UpdateUser: (val,index) => dispatch(updateUser(val,index)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)