// import react, { Component } from "react";
import { useState } from 'react';
// import shortid from 'shortid';
import s from './Contacts.module.css';
import { addContacts } from '../../redux/contacts/contactsOperations'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSelectors';


export default function InputForm() {

 

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

//  const nameInputId = shortid.generate();
//   const numberInputId = shortid.generate();
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => getContacts(state));


  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

 const handleSubmit = e => {
   e.preventDefault();
   
      if (contacts.map(contact => contact.name).includes(name)) {
      alert(`Sorry,  ${name} is already in contacs.`);
      return;
    }
   
  
   const addContactOnSubmit = {
     name,
     number,
    //  id: shortid.generate(),
   }
   dispatch(addContacts(addContactOnSubmit));
    setName('');
    setNumber('');

    };

   

  return (
     <div className={s.form}>
          <form onSubmit={handleSubmit} >
          <label className={s.label} >
            NAME
            <input className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={handleInputChange}
                        // id={nameInputId}
            />
          </label>

          <label className={s.label} >
            NUMBER
            <input className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
                        onChange={handleInputChange}
                        // id={numberInputId}
            />
          </label>

          <button className={s.button} type="submit">
            <span className={s.btnText}>Add contact</span>
            </button>
        </form>
</div>
   )
}


