import React, { createContext, useState, useEffect } from 'react';
import SHOP_DATA from './shop.data';

export const ShopContext = createContext({
  collections: SHOP_DATA,
  collectionsForPreview: [],
  directory: [],
});

const ShopProvider = ({ children }) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  const [collectionsForPreview, setCollectionsForPreview] = useState([]); // convert to obj to array
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    setCollectionsForPreview(
      Object.keys(collections).map((key) => collections[key])
    );

    setDirectory(
      Object.keys(collections).map((key) => {
        const section = collections[key];

        console.log(section);

        return {
          title: section.title,
          id: section.id,
          linkUrl: `shop/${section.routeName}`,
          imageUrl: section.imageUrl,
        };
      })
    );
  }, [collections]);

  return (
    <ShopContext.Provider
      value={{
        collections,
        collectionsForPreview,
        directory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export default ShopProvider;
