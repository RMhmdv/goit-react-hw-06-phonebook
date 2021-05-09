import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
// import PropTypes from 'prop-types';
// import actions from '../../redux/contacts/contacts-actions';
// import { connect } from 'react-redux';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.listItem}>
              <span className={s.name}>{name}:</span>
              <span className={s.num}>{number}</span>
              <button
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                {/* onClick={() => onDeleteContact(id)}> */}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items,
//     filter: state.contacts.filter,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
