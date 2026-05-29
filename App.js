import { StatusBar } from 'react-native';
import Home from './src/Telas/Home';
import Portfolio from './src/Telas/Portfolio';
import Contato from './src/Telas/Contato';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

function App() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#ffffff"
            />

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#1e6bff',
                    tabBarInactiveTintColor: '#6b7280',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 4,
                    },
                    tabBarStyle: {
                        backgroundColor: '#ffffff',
                        borderTopColor: '#d1d5db',
                        borderTopWidth: 1,
                        height: 64,
                        paddingTop: 4,
                        elevation: 8,
                        shadowColor: '#000',
                        shadowOpacity: 0.05,
                        shadowOffset: { width: 0, height: -2 },
                        shadowRadius: 8,
                    },
                    tabBarIcon: ({ color }) => {
                        let iconName = 'home';

                        if (route.name === 'Portfolio') {
                            iconName = 'work';
                        } else if (route.name === 'Contato') {
                            iconName = 'contacts';
                        }

                        return <MaterialIcons name={iconName} size={24} color={color} />;
                    },
                })}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name='Portfolio'
                    component={Portfolio}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name='Contato'
                    component={Contato}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default App;