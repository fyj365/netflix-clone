import React from 'react';
import PropTypes from 'prop-types';
import './LandNav.module.less';

const LandNav = () => (
  <div className="LandNav">
          <img
              className="Logo"
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="Netflix Logo"
          />
  </div>
);


LandNav.propTypes = {};

LandNav.defaultProps = {};

export default LandNav;
