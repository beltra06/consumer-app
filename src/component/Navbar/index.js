import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../../hook/useLanguage'
import LangToggler from '../LangToggler'

function Navbar() {
  const text = useLanguage('app')

  return (
    <header>
      <h1>
        <Link to="/">Super Health APP</Link>
      </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">{text.nav.home}</Link>
                </li>
                <li>
                    <Link to="/break">{text.nav.break}</Link>
                </li>
                <li>
                    <Link to="/bmi">{text.nav.bmi}</Link>
                </li>
                <li>
                    <Link to="/calorie">{text.nav.calorie}</Link>
                </li>
                <li>
                    <Link to="/article">{text.nav.article}</Link>
                </li>
                <li>
                    <Link to="/about">{text.nav.about}</Link>
                </li>
                <li>
                    <LangToggler />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

