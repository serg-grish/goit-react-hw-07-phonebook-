import shortid from "shortid";
// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";

export default function Filter() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filteredID = shortid.generate();
    return (
        <>
            <label htmlFor={filteredID} className={s.filterLabel}>Find contacts by name
                <input type="text"
                    id={filteredID}
                    value={filter}
                    onChange={e => dispatch(filterContacts(e.target.value))}
                    className={s.filterInput}
                
                />
            
            </label>
        </>
    );
};

// Filter.propTypes = {
//     value: PropTypes.string,
//     onchange: PropTypes.func,
// }