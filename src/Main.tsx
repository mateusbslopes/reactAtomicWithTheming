import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import themes from './theme'
import Form from './components/pages/Form'
import { connect, ConnectedProps } from 'react-redux'

const mapStateToProps = function (state: any) {
    return { themeName: state.theme.name }
}

const connector = connect(mapStateToProps)

type MainProps = ConnectedProps<typeof connector> & {
    themeName: String
}

class Main extends Component {

    props: MainProps | any

    render() {
        let theme: any = themes[this.props.themeName]
        return (
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        )
    }
}

export default connector(Main);
