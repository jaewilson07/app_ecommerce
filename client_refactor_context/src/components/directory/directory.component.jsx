import React, { useContext } from 'react';

import { ShopContext } from '../../providers/shop/shop.provider';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const { directory } = useContext(ShopContext);

  console.log(directory);
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
