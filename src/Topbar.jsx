import css from './main.module.css';
import { Link } from 'react-router-dom';

export const Topbar = () => {

  return (
    <div className={css.topbarContainer}>
      <svg style={{ marginTop: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width='80' height='80'>
        <g fill="#2862FF" stroke="#2862FF" stroke-linecap="round" stroke-linejoin="round">
          <path d="m4.5 14.453v7.82h7.365v11.274h7.82v-19.094z"/>
          <path d="m26.202 33.547 8.124-19.094h9.174l-8.124 19.094z"/>
          <circle cx="25.8407" cy="18.3627" r="3.9101"/>
        </g>
      </svg>
      <ul className={css.list}>
        <li><Link to="/vertical">VERTICAL</Link></li>
        <li><Link to="/horizontal">HORIZONTAL</Link></li>
        <li><Link to="/single-s">SINGLE SPOT</Link></li>
        <li><Link to="/single-f">SINGLE FUTURES</Link></li>
      </ul>
    </div>
  )
}