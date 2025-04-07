import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';


export default function FiletVe() {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.titulo2}>FiletVe</Text>
                <Image
                    style={styles.img}
                    source={require('../fotos/prato2.jpg')}
                />
                <Text>Uma suculenta carne grelhada, envolvida em delicada folha de ouro comestível, servida com um molho aromático de redução de vinho tinto, ervas frescas e manteiga trufada. O sabor robusto e macio da carne é realçado pela suavidade do molho, enquanto o brilho e a leveza do ouro adicionam um toque de luxo. Complementada por um purê de batata aveludado e legumes salteados, essa criação oferece uma fusão de sabores sofisticados e uma apresentação deslumbrante.</Text>
                <View style={styles.card3}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#700707',
        height: '100%'
    },
    titulo: {
        alignItems: 'center',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto Slab',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 15,
        color: '#FFD700',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        letterSpacing: 1.5
    },

    card: {
        textAlign: 'center',
        width: '85%',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        height: 450,
        marginTop:100,
    },
    img: {
        height: 180,
        width: 210,
        borderRadius: 10,
        marginBottom:20,
        alignItems: 'center',
        marginTop: -80
    },
    img2: {
        height: 30,
        width: 155,
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 14,
        marginTop: 18,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: '#777',
        marginVertical: 5,
    },
    titulo2: {
        padding: 5,
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 90,
        fontWeight: 'bold',
    },
    valor: {
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 15,

    },
    card2: {
        width: 90,
        backgroundColor: '#FFC02E',
        borderRadius: 10,
        marginTop: -5,
        height: 30,
        marginLeft: -90,
    },
    card3: {
        width: 90,
        borderRadius: 10,
        marginTop: 50,
        height: 30,
        marginLeft: -100,
    },
});
