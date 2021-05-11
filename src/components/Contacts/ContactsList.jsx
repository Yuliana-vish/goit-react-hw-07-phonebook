import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import styles from './Contacts.module.css';
import Loader from 'react-loader-spinner';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, onDeleteContact, isLoading } = this.props;
    return (
      <>
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={uuidv4()}>
            <p className={styles.contact}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    {isLoading && (
    <div className={styles.loader}>
            <Loader type="Rings" color="#00BFFF" height={200} width={200} />
          </div>
        )}
      </>
    );
  }
};

export default ContactsList;
