import React, { Component } from 'react'
import { connect, ConnectedProps,  } from 'react-redux'
import { setFirstName as setFirstNameAction } from './../../store/ducks/person'
import { View, Text, TextInput } from 'react-native'

const mapStateToProps = (state: any) => ({
    firstName: state.person.firstName
})

const mapDispatchToProps = {
    setFirstName: (firstName: String) => setFirstNameAction(firstName)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type FormProps = ConnectedProps<typeof connector>

export class Form extends Component {

    props: FormProps | any

    render() {
        return (
            <View>
                <Text>First Name: {this.props.firstName}</Text>
                <TextInput onChangeText={text => this.props.setFirstName(text)} />
            </View>
        )
    }
}


export default connector(Form)
