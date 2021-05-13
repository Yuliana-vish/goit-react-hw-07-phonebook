import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import { actions, contactSelectors } from '../../redux/phonebook';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <label className={styles.label} htmlFor={uuidv4()}>
      Find contacts by name
      <input
        className={styles.input}
        id={uuidv4()}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={value}
      />
    </label>
  );
};
const mapStateToProps = state => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: event => dispatch(actions.changeFilter(event.target.value)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Filter);