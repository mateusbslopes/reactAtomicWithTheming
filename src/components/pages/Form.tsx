import React, { Component } from 'react'
import { connect, ConnectedProps, } from 'react-redux'
import { setFirstName as setFirstNameAction } from './../../store/ducks/person'
import { setTheme as setThemeAction } from './../../store/ducks/theme'
import { CheckBox } from 'react-native-elements'
import TextInput from '../atoms/TextInput'
import styled from '@emotion/native'

const mapStateToProps = (state: any) => ({
    firstName: state.person.firstName,
    theme: state.theme.name
})

const mapDispatchToProps = {
    setFirstName: (firstName: String) => setFirstNameAction(firstName),
    setTheme: (theme: String) => setThemeAction(theme)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type FormProps = ConnectedProps<typeof connector>

export class Form extends Component {

    props: FormProps | any

    render() {
        return (
            <Container>
                <Text>First Name: {this.props.firstName}</Text>
                <TextInputView>
                    <TextInput onChangeText={(text: String) => this.props.setFirstName(text)} value={this.props.firstName} style={{color: 'red'}} />
                </TextInputView>
                <TextInputView>
                    <TextInput onChangeText={(text: String) => this.props.setFirstName(text)} value={this.props.firstName} />
                </TextInputView>
                <CheckBoxView>
                    <Text>Apagar as luzes?</Text>
                    <CheckBox
                        checked={this.props.theme === 'dark'}
                        onPress={() => this.props.setTheme(this.props.theme === 'dark' ? 'base' : 'dark')}
                    />
                </CheckBoxView>

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
const Text = styled.Text`
  color: ${(props: any) => props.theme.colors.primary[500]};
`

const CheckBoxView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const TextInputView = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${(props: any) => props.theme.colors.primary[500]};
`

export default connector(Form)
