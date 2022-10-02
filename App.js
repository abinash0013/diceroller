import { useState } from "react";
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    Alert,
} from "react-native";

// importing images
import DiceOne from "./assets/diceOne.png";
import DiceTwo from "./assets/diceTwo.png";
import DiceThree from "./assets/diceThree.png";
import DiceFour from "./assets/diceFour.png";
import DiceFive from "./assets/diceFive.png";
import DiceSix from "./assets/diceSix.png";

const App = () => {
    // const url = DiceTwo;
    const [img, setImg] = useState(DiceOne);

    const PressToPlay = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1;

        switch (randomNumber) {
            case 1:
                setImg(DiceOne);
                break;
            case 2:
                setImg(DiceTwo);
                break;
            case 3:
                setImg(DiceThree);
                break;
            case 4:
                setImg(DiceFour);
                break;
            case 5:
                setImg(DiceFive);
                break;
            case 6:
                setImg(DiceSix);
                break;

            default:
                setImg(DiceOne);
                break;
        }
    };
    return (
        <>
            <View style={styles.mainContainer}>
                <Image source={img} style={styles.images} />
                <TouchableOpacity style={styles.button} onPress={PressToPlay}>
                    <Text style={styles.buttonText}>Play Game</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 4,
        justifyContent: "space-around",
    },
    images: {
        width: 150,
        height: 150,
    },
    button: {
        backgroundColor: "#000",
        margin: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        padding: 10,
    },
});
