import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CompanyProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header/Cover Image */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/company/800/400' }}
          style={styles.coverImage}
        />
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/logo/200/200' }}
            style={styles.logo}
          />
        </View>
      </View>

      <ThemedView style={styles.content}>
        {/* Company Name and Bio */}
        <View style={styles.infoSection}>
          <ThemedText type="title" style={styles.companyName}>EntreTelas Corp</ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.industry}>Tecnologia & Entretenimento</ThemedText>
          <ThemedText style={styles.description}>
            Líder em soluções digitais para o mercado audiovisual. Transformando a maneira como o mundo consome conteúdo através de inovação e criatividade.
          </ThemedText>
        </View>

        {/* Contact Info Cards */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Contato</ThemedText>
          
          <View style={styles.contactItem}>
            <IconSymbol name="paperplane.fill" size={20} color="#f4511e" />
            <ThemedText style={styles.contactText}>contato@entretelas.com.br</ThemedText>
          </View>

          <View style={styles.contactItem}>
            <IconSymbol name="house.fill" size={20} color="#f4511e" />
            <ThemedText style={styles.contactText}>Av. Paulista, 1000 - São Paulo, SP</ThemedText>
          </View>
        </View>

        {/* Action Button */}
        <Link href="/editar-perfil" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </Link>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 200,
    position: 'relative',
    marginBottom: 60,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    bottom: -50,
    left: 20,
    borderRadius: 75,
    padding: 5,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  infoSection: {
    marginBottom: 24,
  },
  companyName: {
    fontSize: 28,
    fontFamily: Fonts.rounded,
  },
  industry: {
    color: '#f4511e',
    marginBottom: 12,
  },
  description: {
    lineHeight: 22,
    opacity: 0.8,
  },
  section: {
    marginTop: 10,
    gap: 12,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
