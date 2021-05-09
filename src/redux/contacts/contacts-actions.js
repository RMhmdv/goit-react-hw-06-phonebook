import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');

// import shortid from 'shortid';
// import types from './contacts-types';

// const addContact = data => ({
//   type: types.ADD,
// payload: {
//   id: shortid.generate(),
//   name: data.name,
//   number: data.number,
// },
// });
// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const actions = { addContact, deleteContact, changeFilter };

// export default actions;
