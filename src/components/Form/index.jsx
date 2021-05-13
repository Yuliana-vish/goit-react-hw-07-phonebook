import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import FormButton from './FormButton';
import FormName from './FormName';
import FormNumber from './FormNumber'
import styles from './Form.module.css';
import { contactOperations, contactSelectors } from '../../redux/phonebook';

class Form extends Component {
 
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contact);
    this.setState({
      name: '',
      number: '',
    });
  };
  
  render() {
    const {
      name,
      number,
      } = this.state;
    return (
      <>
       <form className={styles.form} onSubmit={this.handleSubmit}>
        <FormName
          handleChange={this.handleChange}
          name={name}
  
        />
        <FormNumber
          handleChange={this.handleChange}
          number={number}
          
        />
        <FormButton />
        </form>
        </>
    );
  };
}


const mapStateToProps = state => ({
  contacts: contactSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactOperations.addContact(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);