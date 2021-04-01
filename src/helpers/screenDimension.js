import { Dimensions } from 'react-native';

function getWidth() {
    return Dimensions.get('window').width;
}

function getHeight() {
    return Dimensions.get('window').height;
}

export default { getWidth, getHeight };