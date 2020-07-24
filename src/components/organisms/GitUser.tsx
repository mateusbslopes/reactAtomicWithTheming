import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styled from '@emotion/native'
import Text from '../atoms/Text'
import TextInput from '../atoms/TextInput'
import { fetchUser as fetchUserAction } from "../../store/ducks/git-user"
import { Button } from 'react-native'

const Container = styled.View`
    border: 1px ${(props: any) => props.theme.colors.primary[500]} solid;
    padding: ${(props: any) => props.theme.sizes[200]};
    border-radius: ${(props: any) => props.theme.sizes[200]};
`

const ButtonView = styled.View`
    margin-top: ${(props: any) => props.theme.sizes[100]};
`

export class GitUser extends Component {

    props: GitUserProps | any
    state: any


    constructor(props: GitUserProps | any) {
        super(props)
        this.state = {
            ...props.user
        }
    }

    setUsername(username: string) {
        this.setState({ username })
    }

    render() {
        return (
            <Container>
                <Text>Search for the username!</Text>
                <TextInput value={this.state.username} onChangeText={(text: string) => this.setUsername(text)} />
                <ButtonView>
                    <Button title={"Search"} onPress={() => this.props.fetchUser(this.state.username)} />
                </ButtonView>
                <Text> Name: {this.props.user.name}</Text>
            </Container >
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.gitUser
})

const mapDispatchToProps = {
    fetchUser: (username: string) => fetchUserAction(username)
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type GitUserProps = ConnectedProps<typeof connector>

export default connector(GitUser)
