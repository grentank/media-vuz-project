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
import EditPage from './pages/EditPage';

export default function App({ jsonSheet, user: sessionUser, oneLocation }) {
  const [user, setUser] = useState(sessionUser || {});
  console.log(user);
  return (
    <Container maxWidth="lg">
      <NavBar userState={[user, setUser]} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/format" element={<FormatPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/show/:inventory" element={<ShowPage oneLocation={oneLocation} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/edit/:inventory" element={<EditPage />} />
      </Routes>
    </Container>
  );
}
