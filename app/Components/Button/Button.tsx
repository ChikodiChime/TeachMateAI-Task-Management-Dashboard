"use client"
import { useGlobalState } from '@/app/context/globalProvider';

import React from 'react'
import styled from 'styled-components';

interface Props {
    icon?: React.ReactNode;
    name?: string;
    background?: string;
    padding?: string;
    borderRad?: string;
    fw?: string;
    fs?: string;
    click?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    border?: string;
    color?: string
}

function Button({ icon, name, background, padding, borderRad, fw, fs, click, type, border, color }: Props) {
    const {theme} = useGlobalState();
   
    return (
        <ButtonStyled
        type={type}
        style={{
            background: background,
            padding: padding || "0.5rem 1rem",
            borderRadius: borderRad || "0.5rem",
            fontWeight: fw || "500",
            fontSize: fs,
            border: border,
            color:color || theme.colorGrey0

        }}
        theme = { theme }
        onClick={click}
        >
            {icon && icon}
            {name}
        </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colorWhite};
    z-index: 5;
    cursor: pointer;
    transition: all .5s ease-in-out;
    i{
        margin-right: 1rem;
        color: ${(props) => props.theme.colorGrey3};
        transition: all .5s ease-in-out;


    }
    &:hover { 
        color: ${(props) => props.theme.colorGrey0};

        i{
        color: ${(props) => props.theme.colorGrey0};

        }
    }
`
export default Button