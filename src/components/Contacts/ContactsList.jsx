import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import styles from './Contacts.module.css';
import Loader from 'react-loader-spinner';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { allContacts, onDeleteContact, isLoading } = this.props;
    return (
      <>
        <ul className={styles.list}>
          {allContacts.length > 0 && (
            <h2> Contacts </h2>
          )}
          {allContacts.map(contact => (
            <li className={styles.item} key={uuidv4()}>
              <p className={styles.contact}>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                className={styles.btn}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
            </button>
            </li>
          ))}
        </ul>
        {isLoading && (
          <div className={styles.loader}>
            {''}
            <Loader type="Rings" color="#00BFFF" height={200} width={200} />
          </div>
        )}
      </>
    );
  }
}

export default ContactsList;
