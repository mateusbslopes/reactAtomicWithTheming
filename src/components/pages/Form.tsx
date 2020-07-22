import React, { Component } from 'react'
import { connect, ConnectedProps, } from 'react-redux'
import { setFirstName as setFirstNameAction } from './../../store/ducks/person'
import { setTheme as setThemeAction, setTheme } from './../../store/ducks/theme'
import { CheckBox } from 'react-native-elements'
import styled from '@emotion/native'

const mapStateToProps = (state: any) => ({
    firstName: state.person.firstName,
    theme : state.theme.name
})

const mapDispatchToProps = {
    setFirstName: (firstName: String) => setFirstNameAction(firstName),
    setTheme: (theme: String) => setThemeAction(theme)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type FormProps = ConnectedProps<typeof connector>

const Container = styled.View`
  background-color: ${(props: any) => props.theme.colors.ternary[500]};
`
const Text = styled.Text`
  color: ${(props: any) => props.theme.colors.primary[500]};
`
const TextInput = styled.TextInput`
    border: 2px ${(props: any) => props.theme.colors.primary[500]} solid;
    color: ${(props: any) => props.theme.colors.primary[500]};
`

export class Form extends Component {

    props: FormProps | any

    render() {
        return (
            <Container>
                <Text>First Name: {this.props.firstName}</Text>
                <TextInput onChangeText={(text: String) => this.props.setFirstName(text)} />
                <Text>Acender as luzes?</Text>
                <CheckBox
                    checked={this.props.theme === 'dark'}
                    onPress={() => this.props.setTheme(this.props.theme === 'dark' ? 'base': 'dark')}
                />
            </Container>
        )
    }
}

export default connector(Form)
