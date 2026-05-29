import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Linking, TouchableOpacity, TextInput, Alert } from 'react-native';
import { estilos } from '../styleSheet/estilos';

const contactItems = [
  { id: '1', title: 'Celular', value: '(41) 99999-9999', action: 'tel:41999999999' },
  { id: '2', title: 'Email', value: 'brezendelima@gmail.com', action: 'brezendelima@gmail.com' },
  { id: '3', title: 'LinkedIn', value: 'https://www.linkedin.com/in/Bruno-Rezende-de-Lima/', action: 'https://www.linkedin.com/in/Bruno-Rezende-de-Lima/' },
  { id: '4', title: 'Instagram', value: 'https://www.instagram.com/brezendelima', action: 'https://www.instagram.com/brezendelima' },
  { id: '6', title: 'Localidade', value: 'Curitiba - PR', action: '' },
];

export default function ContatoScreen() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      Alert.alert('Aviso', 'Digite sua mensagem antes de enviar.');
      return;
    }

    const to = contactItems[1].value;
    const subject = encodeURIComponent('Mensagem via app');
    const body = encodeURIComponent(`Nome: ${name}\n\nMensagem:\n${message}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    Linking.openURL(mailto)
      .then(() => Alert.alert('Pronto', 'Seu email foi aberto para envio.'))
      .catch(() => Alert.alert('Erro', 'Não foi possível abrir o app de email.'));
  };

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView style={estilos.body} contentContainerStyle={estilos.bodyContent}>
        <View style={estilos.profileSection}>
          <Text style={estilos.mainTitle}>Entre em Contato</Text>
        </View>

        <View style={estilos.card}>
          <Text style={estilos.contactCardTitle}>Informações de Contato</Text>
          <Text style={estilos.contactInfoText}>
            {contactItems.map((c) => `${c.title}: ${c.value}`).join('\n')}
          </Text>
        </View>

        <Text style={estilos.formSectionTitle}>Enviar Mensagem</Text>

        <Text style={{marginBottom:6}}>Digite seu nome</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          style={estilos.input}
        />

        <Text style={{marginBottom:6}}>Digite sua mensagem</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem"
          style={estilos.textArea}
          multiline
        />

        <TouchableOpacity style={estilos.sendButton} onPress={handleSend}>
          <Text style={estilos.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}