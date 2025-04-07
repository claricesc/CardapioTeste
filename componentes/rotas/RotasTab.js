import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RotaComida from'../rotas/RotaComida'
import Home from '../Home';


const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: "#00ff00", }}>
            <Tab.Screen name="Cardapio" component={RotaComida} options={{
                tabBarLabel: 'Pratos',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }} />

            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }} />
        </Tab.Navigator>
       


    );
}
