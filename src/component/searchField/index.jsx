import React from 'react'
import './searchField-style.css'

export const SearchField = ({onChange}) => (
  <input 
    className='search-box'
    type="search" 
    placeholder='monster list' 
    onChange={onChange}/>
)