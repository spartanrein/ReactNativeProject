import React from 'react';
import {StyleSheet, View} from 'react-native'
import {Appbar, Avatar} from "react-native-paper";
import PropTypes from 'prop-types'
import {MessageComponent} from "./MessageComponent";

const ChatAppBar = (props) => {
    return (
        <Appbar style={styles.root}>
            <Appbar.BackAction onPress={() => console.log("back pressed")}/>
            <Avatar.Text size={36} label={props.label}/>
            <Appbar.Content
                title={props.title}
            />
        </Appbar>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white"
    }
})

ChatAppBar.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ChatAppBar
