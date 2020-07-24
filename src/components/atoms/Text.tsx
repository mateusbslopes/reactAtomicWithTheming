import React, { ReactNode } from 'react'
import styled from '@emotion/native'

const StyledText = styled.Text`
  color: ${(props: any) => props.theme.colors.primary[500]};
`

type TextProps = {
    children: ReactNode,
}

const Text = (props: TextProps) => (
    <StyledText {...props}>{props.children}</StyledText>
)

export default Text
