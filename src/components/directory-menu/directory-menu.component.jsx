import React, { Component } from 'react';

import './directory-menu.style.scss';
import MenuItem from '../menu-item/menu-item.component';

import { sections } from './constants';

class DirectoryMenu extends Component {
  constructor() {
    super();
    this.state = { sections };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map((section) => (
          <MenuItem section={section} key={section.id} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
