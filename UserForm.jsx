import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='username'
        placeholder='Unesite GitHub korisničko ime'
        required
      />
      <button type='submit'>Traži</button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
