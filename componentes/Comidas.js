import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';

export default function Comidas(props) {

    const Clicar = () => {
        console.log('Voce selecionou Cafe americano!')
        props.navigation.navigate('AlMare');
    }

    const Clicar2 = () => {
        console.log('Voce selecionou Cafe americano!')
        props.navigation.navigate('FiletVe');
    }

    const Clicar3 = () => {
        console.log('Voce selecionou Cafe americano!')
        props.navigation.navigate('CardGold');
    }

    return (
       
            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Pratos</Text>
                </View>
                <TouchableOpacity onPress={Clicar2}>
                    <View style={styles.card}>
                        <StatusBar style="auto" />
                        <Image
                            style={styles.img}
                            source={require('../assets/prato2.jpg')}
                        />
                        <Text style={styles.titulo2}>Filet ve</Text>

                        <View style={styles.card2}>
                            <Text style={styles.valor}>R$ 29,99</Text>
                        </View>
                        <View style={styles.card3}>
                            <Image
                                style={styles.img2}
                                source={require('../assets/estrela5.png')}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={Clicar}>
                    <View style={styles.card}>
                        <StatusBar style="auto" />
                        <Image
                            style={styles.img}
                            source={require('../assets/prato1.png')}
                        />
                        <Text style={styles.titulo2}>Al Mare</Text>
                        <View style={styles.card2}>
                            <Text style={styles.valor}>R$ 39,99</Text>
                        </View>
                        <View style={styles.card3}>
                            <Image
                                style={styles.img2}
                                source={require('../assets/estrela4.png')}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={Clicar3}>
                    <View style={styles.card}>
                        <StatusBar style="auto" />
                        <Image
                            style={styles.img}
                            source={require('../assets/prato4.jpg')}
                        />
                        <Text style={styles.titulo2}>Cargold</Text>
                        <View style={styles.card2}>
                            <Text style={styles.valor}>R$ 39,99</Text>
                        </View>
                        <View style={styles.card3}>
                            <Image
                                style={styles.img2}
                                source={require('../assets/estrela4.png')}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

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
        width: '85%',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
    },
    img: {
        height: 125,
        width: 150,
        borderRadius: 10,
        marginRight: 15,
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
