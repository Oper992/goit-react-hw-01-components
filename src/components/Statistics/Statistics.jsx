import PropTypes from 'prop-types';
import style from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={style.statlist}>
        {stats.map(stat => {
          return (
            <li className={style.item} key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className={style.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
