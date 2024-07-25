import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import styles from './LoginStyles';

import Icon from "react-native-vector-icons/MaterialIcons";

function Login({ navigation }) {

    function goToMainPage() {
        navigation.navigate("Main");
    }

    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ImageBackground source={require('../../images/loginback.jpg')} style={styles.backgroundImage} resizeMode='cover'>

                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.inputName}>Spor Salonu ID</Text>
                        <View style={styles.inputBox}>
                            <Icon name={"subtitles"} size={18} color={"black"} style={styles.icon} />
                            <TextInput style={styles.input} placeholder='Salon id numaranızı yazınız' />
                        </View>
                        <Text style={styles.inputName}>Sifre</Text>
                        <View style={styles.inputBox}>
                            <Icon name={"lock"} size={18} color={"black"} style={styles.icon} />
                            <TextInput style={styles.input} placeholder='Size verilen şifreyi yazınız' />
                        </View>

                    </View>
                    <TouchableOpacity onPress={goToMainPage} style={styles.button}>
                        <View>
                            <Text style={styles.buttonName}>Giriş Yap</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>


    )
}

export default Login;