import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [tickedCheckbox, setTickedCheckbox] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
  }

  // const checkCountry = () => {
  //   if(e.target.value === 'Select Your Country') {
  //     alert('Please select a country')
  //   }
  // }

  return (
  <main>
    <form onSubmit={handleSubmit}>
      <h1>Profile page</h1>
      <p>please enter your details</p>
      <label></label>
      <input type='test' placeholder='username' value= {userName} onChange={e => setUserName(e.target.value)}/>
      <input type='test' placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
      <input type='test' placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/><br></br>

      <select onChange ={e => setSelectedCountry(e.target.value)}>
        <option>Select Country</option>
        <option value='England'>England</option>
        <option value='Scotland'>Scotland</option>
        <option value='Ireland'>Ireland</option>
        <option value='Wales'>Wales</option>
        <option value='Isle of Man'>Isle of Man</option>
      </select><br></br>
      
      <label>
        I agree to the terms and conditions
        <input type='checkbox' value= {tickedCheckbox} onChange ={e => setTickedCheckbox(true)}/><br></br>
      </label>

      <div className='radioGroup'>
        <label>
          I want to receive emails
          <input type='radio'/>
        </label>
        <label>
          I would not like to receive emails
          <input type='radio'/>
        </label>
      </div>

      <button type='submit'>Submit</button>
    </form>
      <p>My first name is: {firstName}</p>
      <p>My last name is: {lastName}</p>
      <p>My location is: {selectedCountry}</p>
      <p>My checkbox is: {tickedCheckbox}</p>
  </main>
  );
}

export default App;
