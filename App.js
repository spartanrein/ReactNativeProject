import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ChatAppBar from "./components/AppBar";
import {MessageComponent} from "./components/MessageComponent";

export default function App() {
  return (
    <View style={styles.root}>
      <ChatAppBar
        label={"R"}
        title={"Reiner"}
      />
        <View style={{
            padding: 6
        }}>
            <MessageComponent
                incoming = {false}
                message = {"afdjskfdhs kfjhkj sdfsdjkfh sdjkf sd sdfjkh ksdfk sdjkfhjjdf"}
                label={"T"}
                showAvatar={true}
            />
            <MessageComponent
                incoming = {true}
                showAvatar={true}
                label={"R"}
                message = {"af,sd ndskf sdjkfh sdkjf  sdjkfh dsk jfhsdfdsfkjhsd  dfsdjkfh sdjjdf"}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        marginTop: StatusBar.currentHeight
    },
});
