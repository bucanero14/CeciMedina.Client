import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { usePasswordVisibility } from '../../common/hooks/useShowPassword';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CGoEye = chakra(GoEye);
const CGoEyeClosed = chakra(GoEyeClosed);

interface LoginFormInput {
  username: string;
  password: string;
}
export const Login = () => {
  const { handlePasswordShow, isPasswordShown } = usePasswordVisibility();

  const validateUsername = (value: string) => {
    let error;
    if (!value) {
      error = 'El usuario es requerido';
    }
    return error;
  };

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = 'La contraseña es obligatoria';
    }
    return error;
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Ceci Medina</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={async (values: any) => {
              await new Promise(() => {
                alert('hola');
              });
            }}
          >
            <Form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <Field name="username" validate={validateUsername}>
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        form.errors.username !== '' &&
                        (form.touched.username as boolean)
                      }
                    >
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <CFaUserAlt color="gray.300" />
                        </InputLeftElement>
                        <Input
                          {...field}
                          id="username"
                          placeholder="username"
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password" validate={validatePassword}>
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        form.errors.password !== '' &&
                        (form.touched.password as boolean)
                      }
                    >
                      <InputGroup>
                        <InputLeftElement pointerEvents="none" color="gray.300">
                          <CFaLock color="gray.300" />
                        </InputLeftElement>
                        <Input
                          {...field}
                          type={isPasswordShown ? 'text' : 'password'}
                          placeholder="Contraseña"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={handlePasswordShow}
                          >
                            {isPasswordShown ? <CGoEyeClosed /> : <CGoEye />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Iniciar Sesión
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};
