import React, { Component } from 'react'
import { connect, ConnectedProps, } from 'react-redux'
import { setFirstName as setFirstNameAction } from './../../store/ducks/person'
import { setTheme as setThemeAction } from './../../store/ducks/theme'
import { CheckBox } from 'react-native-elements'
import TextInput from '../atoms/TextInput'
import Text from '../atoms/Text'
import styled from '@emotion/native'
import GitUser from '../organisms/GitUser'

const mapStateToProps = (state: any) => ({
    firstName: state.person.firstName,
    theme: state.theme.name
})

const mapDispatchToProps = {
    setFirstName: (firstName: string) => setFirstNameAction(firstName),
    setTheme: (theme: string) => setThemeAction(theme)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type FormProps = ConnectedProps<typeof connector>

export class Form extends Component {

    props: FormProps | any

    render() {
        return (
            <Container>
                <Text>First Name: {this.props.firstName}</Text>
                <TextInput onChangeText={(text: string) => this.props.setFirstName(text)} value={this.props.firstName} style={{ color: 'red' }} />
                <TextInput onChangeText={(text: string) => this.props.setFirstName(text)} value={this.props.firstName} />
                <CheckBoxView>
                    <Text>Apagar as luzes?</Text>
                    <CheckBox
                        checked={this.props.theme === 'dark'}
                        onPress={() => this.props.setTheme(this.props.theme === 'dark' ? 'base' : 'dark')}
                    />
                </CheckBoxView>
                <GitUser />
            </Container>
        )
    }
}

const Container = styled.View`
  background-color: ${(props: any) => props.theme.colors.ternary[500]};
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CheckBoxView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export default connector(Form)
