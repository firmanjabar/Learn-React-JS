import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { totalMovies, pageSize } = props;

  const pageCount = Math.ceil(totalMovies / pageSize);
  if (pageCount === 1) return null;
  const page = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className='pagination'>
        {page.map((numb) => (
          <li key={numb} className='page-item'>
            <a className='page-link'>{numb}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
