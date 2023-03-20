import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tabTitle}>Type</th>
          <th className={css.tabTitle}>Amount</th>
          <th className={css.tabTitle}>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, currency, amount, id }) => (
        <tbody>
          <tr className={css.tabLine} key={id}>
            <td className={css.tabText}>{type}</td>
            <td className={css.tabText}>{amount}</td>
            <td className={css.tabText}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
