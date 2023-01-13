import React,{useState} from 'react'
import pattern from './../../Assets/pattern2.png'
const BakeryEnquire = ({cakes})=>{

    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCake, setSelectedCake] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCakeSelection(event) {
    setSelectedCake(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add code here to process the order
    // alert(`Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nCake: ${selectedCake}`);
  }

  return (
    <div className="order-form" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="form-box" style={{ width: '60%', margin: '0 auto' }}>
        <h1>Order Online</h1>
        <form onSubmit={handleSubmit}>
          <select value={selectedCake} onChange={handleCakeSelection}>
            <option value="">Select a Cake</option>
            {cakes.map(cake => 
                <option value={cake.name}>{cake.name}</option>
            )}
          </select>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressChange}
            required
          />
          <button type="submit">Order Online</button>
        </form>
      </div>
    </div>
  );
}


export default BakeryEnquire