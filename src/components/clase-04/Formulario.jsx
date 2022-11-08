import React, { useEffect, useRef, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Button,
  Heading,
} from '@chakra-ui/react'
import styled from 'styled-components'

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 75vh;
`

const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  border-radius: 8px;
  background-color: ${props => props.bColor ? '#252525' : 'red'};
  color: #fff;
  outline: none;
  border: none;
  width: 350px;

`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`

const StyledButton = styled(Button)`
  font-size: 0.9rem;
  background: linear-gradient(90deg, #ffa100, #ff005c);
  color: white;
  transition: all 0.3s ease;
  padding: 15px 25px;
  border-radius: 1rem;
  cursor: pointer;
`


export const Formulario = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
  })
  const inputRef = useRef();
  const formRef = useRef();


  const { username, email } = form;

  const handleInputChange = ({target}) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  }

  useEffect(() => {
    // ejecutar la accion que quiera
    console.log(email);
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!re.test(email) && email !== ''){
      inputRef.current.style.border = '1px solid red';
      setError(true);
    } else {
      inputRef.current.style.border = '1px solid green'
      setError(false);
    }
  }, [email])
  

  const onClick = () => {
    // document.querySelector('input').select()
    console.log(inputRef.current);
    console.log(formRef.current);
    inputRef.current.select()
    // inputRef.current.style.border = '1px solid red'
    setForm({ username: '', email: 'Ingrese un email' })
  }

  const onBlur = () => {
    inputRef.current.style.border = 'none'
    setForm({ username: '', email: '' })
  }

  return (
    <>
      <StyledFormControl ref={formRef} isInvalid={ error }>
        <Heading as='h2'>
          Form Clase 4
        </Heading>
        <FormField>
          <FormLabel>Username</FormLabel>
          <StyledInput 
          type='text' 
          name='username'
          value={username}
          bColor
          onChange={ handleInputChange }/>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormField>
        <FormField>
          <FormLabel>Email</FormLabel>
          <StyledInput 
          type='email'
          name='email'
          value={email}
          bColor
          onChange={ handleInputChange }
          ref={ inputRef }
          onBlur={ onBlur } />
          { !error &&
            <FormHelperText> * We'll never share your email.</FormHelperText>}
          { error &&
            <FormErrorMessage color='red'> * El email no es valido.</FormErrorMessage>}
        </FormField>
        <StyledButton onClick={ onClick }> Enviar </StyledButton>
      </StyledFormControl>
    </>
  )
}
