import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: '',
    bio: '',
    games: '',
    origin: '',
    steam: '',
    psn: '',
    xbl: '',
    epic: '',
    twitch: '',
    facebook: '',
    youtube: '',
    twitter: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    location,
    bio,
    games,
    origin,
    steam,
    psn,
    xbl,
    epic,
    twitch,
    facebook,
    youtube,
    twitter
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Enter info so other players can see your
        profile
      </p>
      <small>* = required fields</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Los Angeles, CA)
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='* A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Games Played'
            name='games'
            value={games}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. Apex,CSGO,Destiny,COD)
          </small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Gamertags and Social Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fas fa-address-book fa-2x'></i>
              <input
                type='text'
                placeholder='Origin'
                name='origin'
                value={origin}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-steam fa-2x'></i>
              <input
                type='text'
                placeholder='Steam'
                name='steam'
                value={steam}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-playstation fa-2x'></i>
              <input
                type='text'
                placeholder='PSN'
                name='psn'
                value={psn}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-xbox fa-2x'></i>
              <input
                type='text'
                placeholder='Xbox'
                name='xbl'
                value={xbl}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fas fa-keyboard fa-2x'></i>
              <input
                type='text'
                placeholder='Epic Games'
                name='epic'
                value={epic}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-twitch fa-2x'></i>
              <input
                type='text'
                placeholder='Twitch URL'
                name='twitch'
                value={twitch}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
