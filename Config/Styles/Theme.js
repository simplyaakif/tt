import {DefaultTheme} from "@react-navigation/native";
import colors from './Colors';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
    },
};