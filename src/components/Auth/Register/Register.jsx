import React, { Component } from 'react';
import { Form, Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUserName, setEmail, setPassword, setPasswordConfirm } from './actions';

class AuthRegister extends Component {
  componentDidMount = () => {
    const {setEmail, emailOnLogin} = this.props;

    setEmail(emailOnLogin);
  }

  render() {
    const {
      userName,
      email,
      password,
      passwordConfirm,

      setUserName,
      setEmail,
      setPassword,
      setPasswordConfirm
    } = this.props;

    return (
      <div>
        <Header as='h2' color='teal' textAlign='center'>
          Cadastro
        </Header>
        <Segment>
          <Form size='small'>
            <Form.Input label='Nome de usuário:' labelPosition='left' placeholder='Digite seu nome de usuário' type='text'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <Form.Input label='E-mail:' placeholder='Digite seu endereço de e-mail' type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Input label='Senha:' placeholder='Digite sua senha' type='password' 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Input label='Confirme sua senha:' placeholder='Digite sua senha novamente' type='password' 
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
            />
            <Button color='teal'>Cadastrar-se</Button>
          </Form>
        </Segment>
        <Segment textAlign='center'>
          Já é cadastrado? <Link to='/auth/login'>Entre na sua conta</Link>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    emailOnLogin: state.auth.login.email,

    userName: state.auth.register.userName,
    email: state.auth.register.email,
    password: state.auth.register.password,
    passwordConfirm: state.auth.register.passwordConfirm,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setUserName,
    setEmail,
    setPassword,
    setPasswordConfirm
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegister);
