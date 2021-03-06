import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    location,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {social && social.twitch && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-twitch fa-2x'></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-youtube fa-2x'></i>
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
