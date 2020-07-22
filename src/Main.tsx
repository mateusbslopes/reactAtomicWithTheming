import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeProvider } from 'emotion-theming'
import themes from './theme'
import Form from './components/pages/Form'
import { connect } from 'react-redux'

const mapStateToProps = function (state: any) {
    return { themeName: state.theme.name }
}

const connector = connect(mapStateToProps)

class Main extends Component {

    render() {
        return (
            <ThemeProvider theme={themes[this.props.themeName]}>
                <View style={styles.container}>
                    <Form />
                </View>
            </ThemeProvider>
        )
    }
}

export default connector(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
