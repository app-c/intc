/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Box, BoxContainer, Container, Icon, Title } from './styles';
import { cor } from '../../theme';

interface Props extends TextInputProps {
   name: string;
   icon: string;
   label: string;
}

interface Reference {
   value: string;
}

export function Input({ name, icon, ...rest }: Props) {
   const [isFocused, setsFocused] = useState(false);
   const [isFilled, setsFilled] = useState(false);
   const [text, setText] = useState('');

   const handleInput = useCallback(() => {
      setsFocused(true);
   }, []);

   const handleBlur = useCallback(() => {
      setsFocused(false);
      setsFilled(!!inpuValueRef.current.value);
   }, []);

   const inputElementRef = useRef<any>(null);

   const {
      registerField,
      defaultValue = '',
      fieldName,
      error,
   } = useField(name);
   const inpuValueRef = useRef<Reference>({ value: defaultValue });

   useEffect(() => {
      registerField<string>({
         name: fieldName,
         ref: inpuValueRef.current,
         path: 'value',
         setValue(ref: any, value) {
            inpuValueRef.current.value = value;
            inputElementRef.current.setNativeProps({ text: value });
         },
         clearValue() {
            inpuValueRef.current.value = '';
            inputElementRef.current.clear();
         },
      });
   }, [fieldName, registerField]);

   return (
      <BoxContainer>
         <Box isFocus={isFocused} isError={!!error}>
            <Icon
               name={icon}
               size={20}
               color={isFocused || isFilled ? cor.gray[1] : cor.gray[3]}
            />
            <Container
               name={name}
               ref={inputElementRef}
               onFocus={handleInput}
               onBlur={handleBlur}
               defaultValue={defaultValue}
               onChangeText={form => {
                  inpuValueRef.current.value = form;
               }}
               {...rest}
            />
         </Box>
      </BoxContainer>
   );
}
