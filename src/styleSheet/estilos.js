import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff0ff',
  },

  header: {
    height: 58,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  headerTitle: {
    fontSize: 18,
    color: '#222222',
  },

  body: {
    flex: 1,
  },

  bodyContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 18,
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 18,
  },

  avatarWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#cfe1ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#24428f',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },

  bottomBar: {
    height: 56,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    flexDirection: 'row',
  },

  bottomItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomLabel: {
    fontSize: 12,
    color: '#9b9b9b',
    marginTop: -4,
  },

  bottomLabelActive: {
    color: '#2e78ff',
  },
  /* Home specific styles */
  homeContainer: {
    flex: 1,
    backgroundColor: '#0d1622',
    padding: 12,
  },

  homeCard: {
    flex: 1,
    backgroundColor: '#e9eef4',
    borderRadius: 18,
    padding: 40,
    marginTop: 24,
    marginBottom: 72,
    borderWidth: 6,
    borderColor: '#0b1220',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0b2b4a',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: '#6f7b86',
    textAlign: 'center',
    marginBottom: 18,
  },

  texto: {
    fontSize: 12,
    color: '#8a9399',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 6,
  },

  destaque: {
    fontSize: 16,
    color: '#1e6bff',
    fontWeight: '700',
    textAlign: 'center',
  },

  rodape: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 12,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#172236',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRodape: {
    color: '#bfc9d5',
    fontSize: 12,
  },
  /* Contato specific styles */
  contactCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },

  contactInfoText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },

  formSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0b2b4a',
    marginTop: 18,
    marginBottom: 10,
  },

  input: {
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e6eef9',
  },

  textArea: {
    height: 110,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e6eef9',
  },

  sendButton: {
    height: 44,
    backgroundColor: '#1e6bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },

  sendButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
});