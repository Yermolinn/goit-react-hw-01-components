import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  const size = (100 / 100 / stats.length) * 1000;
  return (
    <section className={css.statistics}>
      <div className={css.statContainer}>
        {title && <h2 className={css.statTitle}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              style={{ backgroundColor: getRandomHexColor(), width: size }}
              className={css.statItem}
              key={stat.id}
            >
              <span className={css.label}>{stat.label}</span>
              <span class={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
