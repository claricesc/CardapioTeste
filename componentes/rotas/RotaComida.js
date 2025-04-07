import { createStackNavigator } from '@react-navigation/stack';
 
 
import AlMare from '../telas/AlMare'
import Comidas from '../Comidas'
import FiletVe from '../telas/FiletVe'
import CardGold from '../telas/CardGold'
 
 
 
const Stack = createStackNavigator();
 
export default function RotaComida() {
    return (
 
        <Stack.Navigator name='Comidas' component={Comidas}>
            <Stack.Screen   name='Cardapio de comidas' component={Comidas} />
            <Stack.Screen name='AlMare' component={AlMare} />
            <Stack.Screen name='FiletVe' component={FiletVe} />
            <Stack.Screen name='CardGold' component={CardGold} />
        </Stack.Navigator>
 
 
    )
}
 