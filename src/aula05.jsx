import React, { Component } from 'react';
import { Checkbox } from 'expo-checkbox';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity,
} from 'react-native';

class Aula05 extends Component {

  // Construtor - forma tradicional de inicializar estados (dados)
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      lembrarSenha: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View>

            <View>
              <Text style={styles.login}>LOGIN</Text>
            </View>

            <Image
                source={ require('../img/logo-barao.png') }
                style={ styles.logo }
            />

            <Text style={ styles.label }>Nome:</Text>
            <TextInput
                style={ styles.input }
                placeholder='Informe seu nome: '
            />

            <Text style={ styles.label }>Email:</Text>
            <TextInput
                style={ styles.input }
                placeholder='Informe seu e-mail: '
            />

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Checkbox
                    value={this.state.lembrarSenha}
                    onValueChange={(valor) => this.setState({lembrarSenha: valor})}
                    color={this.state.lembrarSenha ? '#4630eb': undefined}
                  />
                  <Text style={{color: 'white', marginLeft: 3, fontSize: 12 }}>Lembrar senha</Text>
              </View>
              <Text style={{color: '#39FF14', fontSize: 12}}>Esqueceu a senha?</Text>
            </View>

            <TouchableOpacity style={ styles.botao }>
                <Text style={ styles.textoBotao }>Entrar</Text>
            </TouchableOpacity>

            <Text style={ styles.texto1 }>Não tem conta? 
                <Text style={ styles.texto2 }>Cadastre-se!</Text>
            </Text>
        </View>

      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  login: {
    color: '#12b434', 
    textAlign: 'center', 
    fontSize: 32,
    fontWeight: 'bold', 
  },

  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },

  label: {
    width: 200,
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  
  logo: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  botao: {
    backgroundColor: 'green',
    width: 250,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },

  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },

  texto1: {
    color: 'white',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },

  texto2: {
    color: '#39FF14',
    //marginRight: 20,
    fontSize: 15,
    marginLeft: 10,
    
  },
});
