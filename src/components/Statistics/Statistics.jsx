import PropTypes from 'prop-types';
import style from './statistics.module.css';
import getRandomHexColor from './randomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={style.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
