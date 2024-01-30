import { View, Text, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React from 'react';
import Menu from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
const Header = ({ navigation }) => {
    const User = require('../../assets/images/profile.png');
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.menuStyle} >
                    <Menu name='menu' color={'#000'} size={26} />
                </TouchableOpacity>
                <View style={styles.walletConatainer}>
                    <TouchableOpacity>
                        <Text style={styles.headertxt}>Wallet  <Down name='caretdown' color={'#000'} size={16} /></Text>
                    </TouchableOpacity>
                    <Text style={styles.wallettxt}>+ $12,500.00</Text>
                </View>
                <TouchableOpacity style={styles.imgConatainer}>
                    {/* <User name='user-circle-o' color={'#000'} size={30} /> */}
                    <Image source={User} style={styles.imgstyle} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>


    )
}

export default Header;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    menuStyle: {
        paddingLeft: 10
    },
    headertxt: {
        color: '#000',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 20
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey',
    },
    wallettxt: {
        color: '#F37F1A',
        fontSize: 18
    },
    walletConatainer: {
        // backgroundColor: "#3a3185",
        // borderRadius: 11,
    },
    imgConatainer: {
        paddingRight: 10
    },
    imgstyle: {
        height: 35,
        width: 35
    }


});