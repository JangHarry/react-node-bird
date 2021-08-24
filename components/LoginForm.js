import React, { useCallback, useState } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';
const ButtonWrapper = styled.div`
    margin-Top : 10px;
`

const LoginForm = ({setIsLoggedIn}) => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');   

    const onSubmitForm  = useCallback((e)=>{        
        console.log(id, password);
        dispatch(loginAction({id, password}));
        setIsLoggedIn(true);
    },[id , password]);

    //보통 form 전송 시 e.preventDefault 사용 하지만 onFinish 에는 적용 되어 있다.

    return(
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    )
}

export default LoginForm;