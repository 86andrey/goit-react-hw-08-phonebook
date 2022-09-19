import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import MyPhonesPage from '../MyPhonePage/MyPhonesPage';

import { Loader } from '../../components/Loader/loader';
import { addContact, deleteContact, fetchContacts } from '../../redux/contacts/contacts-operation';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilter, visibleContacts, getLoaderStatus } from '../../redux/selectors';
import useAuth from '../../shared/hooks/useAuth';



const Contacts = () => {
  const contacts = useSelector(visibleContacts);  
  const filter = useSelector(getFilter);
  const isLoaderActive = useSelector(getLoaderStatus);
const dispatch = useDispatch();
    const isLogin = useAuth();
      
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (payload) => {
     const isContact = contacts.find(
       item => item.name.toLowerCase() === payload.name.toLowerCase());
    if(isContact){
        toast.error(`${payload.name} is already in contact`);
        return;
    };
    const action = addContact(payload);
    dispatch(action)
  };

  const onRemoveContact = (payload) => {
    dispatch(deleteContact(payload))
  };

  const onSetFilter = (event) => {
    dispatch(setFilter(event.target.value))
  };
  
  return (
    <div>
      {!isLogin && <MyPhonesPage />}
      {isLogin && (
        <div>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={onAddContact}/>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={onSetFilter} />
          {isLoaderActive && <Loader />}
          <ContactList contacts={contacts} onDeleteContact={onRemoveContact}/>
          <Toaster /> 
           </div>
      )}
    </div>
  );
};

export default Contacts;