import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
// import PropTypes from 'prop-types';
// import actions from '../../redux/contacts/contacts-actions';
// import { connect } from 'react-redux';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(changeFilter(target.value.trim()));
    // onChange(target.value);
  };

  return <input type="text" value={filter} onChange={handleChange} />;
}

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: value => dispatch(actions.changeFilter(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
