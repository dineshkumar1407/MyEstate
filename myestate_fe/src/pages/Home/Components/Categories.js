import React from 'react';
import { Link } from 'react-router-dom';

let CategoriesImages = [
  {
    id: 1,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2020/11/athens-thumb-1.jpg',
    name: 'Appartment',
  },
  {
    id: 2,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2018/09/pallagio1a_compressed.jpg',
    name: 'Villa',
  },
  {
    id: 3,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2018/09/uptown1a_compressed.jpg',
    name: 'Land',
  },
  {
    id: 4,
    image:
      'https://www.casagrand.co.in/wp-content/uploads/2018/09/pallagio1a_compressed.jpg',
    name: 'House',
  },
];
const Categories = ({}) => {
  return (
    <section className="categories">
      <div className="categories__type">
        <div className="categories_types_center">
          {CategoriesImages.map((categories, id) => {
            return (
              <div className="category" key={id}>
                <div className="img_container">
                  <img src={categories.image} alt={categories.name} />
                  <Link
                    to={`/properties/${categories.name}`}
                    className="categories_button"
                    key={id}
                  >
                    View all
                  </Link>
                </div>
                <p className="categories_info">{categories.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
