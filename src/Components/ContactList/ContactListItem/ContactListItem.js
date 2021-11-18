import PropTypes from 'prop-types';
import s from './ContactListItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../../redux/contacts/contactsOperations';

export default function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();
    return (
        <>
        <li className={s.listItem}>
            <span className={s.listItemText}>{name}</span>
            <span className={s.listItemText}>{number}</span>
             <button className={s.button} type="button" onClick={() => dispatch(deleteContacts(id))} >Delete</button>    
            </li>
        </>
        )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   
};