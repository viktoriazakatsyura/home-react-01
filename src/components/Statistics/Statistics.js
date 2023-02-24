import css from '../Statistics/Statistics.module.css';

import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map((statistic, index) => (
          <li key={statistic.id} className={css.item}>
            <span className={css.label}>{statistic.label}</span>
            <span className={css.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
