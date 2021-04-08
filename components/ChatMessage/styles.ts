import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },

    messageBox : {
        borderRadius: 5,
        padding: 10,
    },

    name: {
        color: Colors.light.tint,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    message: {

    },

    time: {
        alignSelf: "flex-end",
        color: "grey",
    }

});

export default styles;