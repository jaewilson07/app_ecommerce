import React from 'react';

import './homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default Homepage;
