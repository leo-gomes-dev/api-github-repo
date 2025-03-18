import React from 'react';
import { useParams } from 'react-router-dom';

export default function Repositorio(){
  const { repositorio } = useParams();
  return (
    <h1 style={{color: '#fff'}}>
      {decodeURIComponent(repositorio) } 
    </h1>
  );
}