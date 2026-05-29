import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { estilos } from '../styleSheet/estilos';

const academicItems = [
  {
    id: '1',
    title: 'Análise e Desenvolvimento de Sistemas',
    subtitle: 'Unicesumar',
    date: '29/05/2026 - Em andamento',
  },
];

const professionalItems = [
  {
    id: '1',
    title: 'Analista de Redes',
    subtitle: 'Teletex',
    date: '1 ano e meio',
  },
];

const hobbyItems = [
  {
    id: '1',
    title: 'Motoclube',
    subtitle: 'Integrante de Motoclube',
  },
];

const personalItems = [
  {
    id: '1',
    title: 'INFORMAÇÃO PESSOAL',
    subtitle: 'Bruno Rezende de Lima, 21 anos, solteiro, sem filhos, residente em Curitiba - PR.',
  },
];

export default function PortfolioScreen() {
  const renderSection = (title, items) => (
    <>
      <Text style={estilos.sectionTitle}>{title}</Text>

      {items.map((item) => (
        <View key={item.id} style={estilos.card}>
          <Text style={estilos.cardTitle}>{item.title}</Text>

          {item.subtitle && (
            <Text style={estilos.cardText}>- {item.subtitle}</Text>
          )}

          {item.date && (
            <Text style={estilos.cardText}>- {item.date}</Text>
          )}
        </View>
      ))}
    </>
  );

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView
        style={estilos.body}
        contentContainerStyle={estilos.bodyContent}
      >
        <View style={estilos.profileSection}>
          <View style={estilos.avatarWrap}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
              }}
              style={estilos.avatar}
            />
          </View>

          <Text style={estilos.mainTitle}>Meu Portfólio</Text>
        </View>

        {renderSection('Pessoal', personalItems)}

        {renderSection('Acadêmico', academicItems)}

        {renderSection('Profissional', professionalItems)}

        {renderSection('Hobbies', hobbyItems)}
      </ScrollView>
    </SafeAreaView>
  );
}