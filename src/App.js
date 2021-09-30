import "./styles.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && phone) {
      const people = {
        id: new Date().getTime().toString(),
        name,
        address,
        phone,
      };
      setPerson((person) => {
        return [...person, people];
      });
      setName("");
      setAddress("");
      setPhone("");
    } else {
      console.log("nothing happens");
    }
  };
  const removeItem = (id) => {
    let newItem = person.filter((names) => names.id !== id);
    setPerson(newItem);
  };

  return (
    <div className="App">
      <div className="main-heading">
        <h1>Address book</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="address">Adress:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="adress">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      <div>
        {person.map((people, index) => {
          const { id, name, address, phone } = people;
          return (
            <div key={id} className="output">
              <h3>
                {index + 1}. {name}
              </h3>
              <p className="address">{address}</p>
              <p className="phone">{phone}</p>
              <FaTimes className="remove-item" onClick={() => removeItem(id)} />
            </div>
          );
        })}
        <button className="remove-all" onClick={() => setPerson([])}>
          remove all
        </button>
      </div>
    </div>
  );
}
