import { connect } from 'react-redux';
import ContactsList from './ContactsList';
import { contactOperations, contactSelectors } from '../../redux/contacts';


const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

const mapStateToProps = state => ( {
  contacts: contactSelectors.getVisibleContacts(state),
  isLoading: contactSelectors.getLoading(state),
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);


