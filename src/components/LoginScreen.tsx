import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.headerSection}>
          <Text style={styles.logoText}>Pliē</Text>
          <View style={styles.imagePlaceholder}>
             <View style={styles.iconBox} />
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="email@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.notMemberText}>Not a member? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up Here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerSection}>
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or Sign In with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
               <Text>G</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
               <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
               <Text style={styles.fbText}>f</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.guestButton}>
            <Text style={styles.guestText}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  flex: { flex: 1 },
  headerSection: {
    height: '35%',
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: { fontSize: 48, fontWeight: '400', color: '#000', marginBottom: 20 },
  imagePlaceholder: { width: 80, height: 80, justifyContent: 'center', alignItems: 'center' },
  iconBox: { width: 50, height: 50, borderWidth: 2, borderColor: '#555', borderRadius: 4 },
  formSection: { paddingHorizontal: 30, marginTop: 30 },
  label: { fontSize: 14, color: '#333', marginBottom: 8, fontWeight: '500' },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
  input: { padding: 12, fontSize: 14, color: '#000' },
  forgotPassword: { textAlign: 'right', color: '#888', fontSize: 12, marginBottom: 25 },
  signInButton: {
    backgroundColor: '#21D393', // Pliē Brand Green
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '40%',
  },
  signInText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  signUpContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 },
  notMemberText: { color: '#000', fontSize: 12 },
  signUpLink: { color: '#000', fontSize: 12, textDecorationLine: 'underline', fontWeight: 'bold' },
  footerSection: { flex: 1, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 30 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  line: { flex: 1, height: 1, backgroundColor: '#DDD' },
  dividerText: { marginHorizontal: 10, color: '#888', fontSize: 12 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', gap: 20, marginBottom: 30 },
  socialButton: {
    width: 50,
    height: 45,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  fbText: { color: '#3b5998', fontWeight: 'bold', fontSize: 20 },
  guestButton: { alignItems: 'flex-end' },
  guestText: { color: '#888', fontSize: 12 },
});

export default LoginScreen;