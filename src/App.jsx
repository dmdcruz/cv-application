//import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import PersonalDataForm from './components/PersonalDataForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  return (
    <>
      <Header />
      <PersonalDataForm />
      <EducationForm />
      <ExperienceForm />
    </>
  )
}

export default App
