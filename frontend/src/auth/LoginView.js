import React, { useState } from 'react';
import { I18n } from 'react-i18nify';
import Pod from 'carbon-react/lib/components/pod';
import Textbox from 'carbon-react/lib/components/textbox';
import Button from 'carbon-react/lib/components/button';
import Loading from './../commons/Loading';
import styled from 'styled-components';
import Message from '../commons/Message';

const StyledLogin = styled.div`
  .container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper { 
    height: 100%;
    width: 100%;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color: #00A376;
  }
  .signin {
      width: 100%;
      margin-top: 15px;
  }
`;

export default function LoginView(props) {
    const [user, setUser] = useState({ email: '', password: '' })

    function handleChange(e){ setUser({...user, [e.target.name]: e.target.value}); }

    async function onSubmit(){ 
        const res = await props.onLogin(user);
        console.log(res)
        if (!!res && !!res.data) {
            props.history.push('/');
        }
    }

    return(
        <StyledLogin>
            <div className="container wrapper">
                <Pod>
                    <Textbox
                        labelInline={ true }
                        value={user.email}
                        label={I18n.t('entity.user.email')}
                        name="email"
                        onChange={handleChange}
                    />
                    <Textbox
                        labelInline={ true }
                        value={user.password}
                        label={I18n.t('entity.user.password')}
                        name="password"
                        onChange={handleChange}
                    />
                    <Button as="primary" theme="blue"
                        size="medium" className="signin"
                        onClick={onSubmit}>
                        { props.loading && <Loading />}{I18n.t('buttons.signin')}
                    </Button>
                </Pod>
                <Message {...props}/> 
            </div>
        </StyledLogin>
    );
}