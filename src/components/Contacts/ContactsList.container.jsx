import { connect } from 'react-redux';
import ContactsList from './ContactsList';
import { contactOperations, contactSelectors } from '../../redux/phonebook';


const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

const mapStateToProps = state => ( {
  allContacts: contactSelectors.getVisibleContacts(state),
  isLoading: contactSelectors.getLoading(state),
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);


