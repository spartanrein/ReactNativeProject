import React from 'react'
import {StyleSheet, View} from "react-native";
import {Avatar, Text} from 'react-native-paper'
import PropTypes from 'prop-types'


export const MessageComponent = (props) => {

    const ChatAvatar =  (props) => {
        return (
            <View style={{
                display:"flex",
                flexDirection: "column",
                alignSelf: "flex-end",
            }}>
                <Avatar.Text style={{
                    backgroundColor: props.color
                }}
                             size={36} label={props.label}/>
            </View>
        );
    }

    return (

        <View style={props.incoming === true ? styles.leftJustify : styles.rightJustify}>
            {props.showAvatar === true && props.incoming === true ? <ChatAvatar color={"blue"} label={props.label}/> : null}
            <View style={props.incoming === true ? styles.inContainer : styles.outContainer}>
                <Text>{props.message}</Text>
            </View>
            {props.showAvatar === true && props.incoming === false ? <ChatAvatar color={"teal"} label={props.label}/> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    leftJustify:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginRight: 132,
        marginBottom: 6,
    },
    rightJustify: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: 132,
        marginBottom: 6,
    },
    inContainer: {
        padding: 12,
        borderRadius: 50,
        backgroundColor: "lightgray",
        marginLeft: 6,
    },
    outContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 12,
        borderRadius: 50,
        backgroundColor: "lightpink",
        marginRight: 6,
    },
})

MessageComponent.propTypes = {
    incoming: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}