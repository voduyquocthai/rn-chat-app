import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#DCDCDC",
        borderBottomLeftRadius: 30,
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",
    },
    time: {
        fontSize: 13,
        color: "grey",
    },
    middleContainer: {
        flex: 4,
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    rightContainer: {
        flex: 1,
    }

});

export default styles;