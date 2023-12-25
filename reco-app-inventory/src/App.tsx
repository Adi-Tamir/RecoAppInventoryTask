import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationHeader } from './Components/HeaderNavigation';
import { AppInventory } from './AppInventory/AppInventory';
import { styled } from '@stitches/react';

function App() {
  return (
    <PageContainer>
    <NavigationHeader />
    <AppInventory />
  </PageContainer>
  );
}

export default App;

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});