import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../styleSheet/estilos';

export default function Home() {
    return (
        <View style={estilos.homeContainer}>

            <View style={estilos.homeCard}>

                <Text style={estilos.titulo}>
                    Bruno Rezende de Lima
                </Text>

                <Text style={estilos.subtitulo}>
                    Página Home
                </Text>

                <Text style={estilos.texto}>
                    RA: 24081546-2
                </Text>

                <Text style={estilos.destaque}>
                    ADS - Análise e Desenvolvimento de Sistemas
                </Text>

            </View>

            <View style={estilos.rodape}>
                <Text style={estilos.textoRodape}>
                    Bruno Rezende • 29/05/2026
                </Text>
            </View>

        </View>
    );
}