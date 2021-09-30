import React from 'react';
import './PokemonForm.css';

const PokemonForm = ({ pokemon, handleSubmit, handleChange }) => (
  <form onSubmit={ handleSubmit }>
    <label htmlFor="name">Name:
      <input 
        placeholder="Pokemon Name"
        value={ pokemon.name }
        name="name"
        onChange={ handleChange }
        required 
        id="name"
      />
    </label>
    <label htmlFor="description">Description:
      <input 
        placeholder="Pokemon Description"
        value={ pokemon.description }
        name="description"
        onChange={ handleChange } 
        id="description"
      />
    </label>
    <label htmlFor="price">Price:
      <input 
        placeholder="Pokemon Price"
        value={ pokemon.price }
        name="price"
        onChange={ handleChange } 
        id="price"
      />
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default PokemonForm;