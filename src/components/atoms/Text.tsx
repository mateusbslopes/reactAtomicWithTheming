import React, { Component } from 'react'
import styled from '@emotion/native'
import PropTypes from 'prop-types'

const StyledText = styled.Text`
  color: ${(props: any) => props.theme.colors.primary[500]};
`

export class Text extends Component {

    static propTypes = {
        children: PropTypes.node,
        style: PropTypes.any
    }

    props: any

    render() {
        return (
            <StyledText style={this.props.style}>{this.props.children}</StyledText>
        )
    }
}

export default Text
