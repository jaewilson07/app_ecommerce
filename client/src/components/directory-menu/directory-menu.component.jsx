import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory-menu.style.scss';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <MenuItem section={section} key={section.id} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
