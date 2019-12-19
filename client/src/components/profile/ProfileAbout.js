import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    games,
    user: { name }
  }
}) => (
  <div class='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 class='text-primary'>Bio</h2>
        <p>{bio}</p>
        <div class='line'></div>
      </Fragment>
    )}
    <h2 class='text-primary'>Games</h2>
    <div class='skills'>
      {games.map((game, index) => (
        <div key={index} className='p-1'>
          {game}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
