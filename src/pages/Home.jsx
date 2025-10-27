// src/pages/Home.jsx - DOPO
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Main from '../components/sections/Main';

export default function Home() {
  return (
    <Layout className="home-page">
      <Hero />
      <About />
      <Team />
      <Main />
    </Layout>
  );
}