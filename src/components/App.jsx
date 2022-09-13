import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import MainPage from './pages/MainPage';
import ContactsPage from './pages/ContactsPage';
import FormatPage from './pages/FormatPage';
import AdminPage from './pages/AdminPage';
import ShowPage from './pages/ShowPage';
import LoginPage from './pages/LoginPage';

export default function App({ jsonSheet, user: sessionUser }) {
  const [user, setUser] = useState(sessionUser || {});
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/format" element={<FormatPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/show/:inventory" element={<ShowPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Container>
  );
}
