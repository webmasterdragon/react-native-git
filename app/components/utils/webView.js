import React, { Component, View, WebView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
})

export default class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}></WebView>
      </View>
    )
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired,
}