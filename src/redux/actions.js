import { v1 as uuidv1 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contact/add',
  (itemsName, itemsNumber) => ({
    payload: {
      id: uuidv1(),
      name: itemsName,
      number: itemsNumber,
    },
  }),
);

export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');

// ***Redux***

// import * as type from './contacts-types';

// export const addContact = (itemsName, itemsNumber) => ({
//   type: type.ADD,
//   payload: {
//     id: uuidv1(),
//     name: itemsName,
//     number: itemsNumber,
//   },
// });

// export const deleteContact = contactId => ({
//   type: type.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: type.CHANGE_FILTER,
//   payload: value,
// });
