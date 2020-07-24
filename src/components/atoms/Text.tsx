import React, { ReactNode, Component } from 'react'
import styled from '@emotion/native'

const StyledText = styled.Text`
  color: ${(props: any) => props.theme.colors.primary[500]};
`

type TextProps = {
    children: ReactNode,
}

export function Text(props: TextProps) {

    return (
        <StyledText {...props}>{props.children}</StyledText>
    )

}

export default Text
