import React from 'react'

export default function MainForm({handleSubmit,handleChange,isDisabled }) {
  return (
    <form onSubmit={handleSubmit}>
    <input type="text"  id="username" onChange={handleChange} placeholder="name" required/>
    <input type="password"  id="password"  onChange={handleChange} placeholder="password" required/>
    <input type="email"  id="email"  onChange={handleChange} placeholder="email" required/>
    <input type="tel"  id="phoneNumber"  onChange={handleChange} placeholder="tel"  required/>
    <button type='submit' disabled={isDisabled}>submit</button>
    </form>
  )
}
