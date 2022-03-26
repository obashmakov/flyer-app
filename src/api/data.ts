import categories from 'api/categories.json';
import flyers from 'api/flyers.json';
import retailers from 'api/retailers.json';

export const data = flyers.data.map((flyer) => {
  const category = categories.data.find((item) => item.id === flyer.category_id);
  const retailer = retailers.data.find((item) => item.id === flyer.retailer_id);

  return {
    ...flyer,
    category_name: category?.name,
    retailer_name: retailer?.name,
  };
});

export const filters = [
  {
    name: 'Category',
    isOpen: false,
    filters: categories.data,
  },
  {
    name: 'Retailer',
    isOpen: false,
    filters: retailers.data,
  },
  {
    name: 'Exp. date',
    isOpen: false,
    filters: [],
  },
];
