import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'

const StyledTextInput = styled.TextInput`
    color: ${(props: any) => props.theme.colors.primary[500]};
    width: 200px;
    text-align: center;
`

const TextInputView = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${(props: any) => props.theme.colors.primary[500]};
`

export default class TextInput extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChangeText: PropTypes.func,
        style: PropTypes.any
    }

    props: any

    render() {
        return (
            <TextInputView >
                <StyledTextInput value={this.props.value} onChangeText={this.props.onChangeText} style={this.props.style} />
            </TextInputView>
        )
    }
}
