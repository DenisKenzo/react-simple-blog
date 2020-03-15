import React from "react";
import { Button } from 'react-materialize';
import { NavLink } from "react-router-dom";

//styles
import style from './header.module.scss'

export default class Header extends React.PureComponent {

  render() {
    return (
      <div className={style.header}>
        <div>
          <Button>
            <NavLink className={style.nav_link} to={'/posts'}>View Latest Posts</NavLink>
          </Button>
        </div>
        <div className={style.welcome_text}>Welcome to my blog!</div>
      </div>
    )
  }
}
