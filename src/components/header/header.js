import React from 'react'
import styles from './header.module.css'
import { Link } from 'gatsby'
import '../../assets/css/font-awesome.min.css'

export default function header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <a href="https://github.com/moabdi" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/abdimostapha">Twitter</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
