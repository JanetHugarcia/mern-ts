import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
`;


export interface Props { compiler: string; framework: string; }

export const Hello: React.FC<Props> = ({compiler, framework}) => <Title>Hello from {compiler} and {framework}!</Title>;