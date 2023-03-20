import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, curency, amount, id }) => (
        <tbody>
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{curency}</td>
          </tr>
        </tbody>
      ))}
      ;
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
