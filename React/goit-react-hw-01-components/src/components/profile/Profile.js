import React from 'react';
import T from 'prop-types';

import styles from '../profile/Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}> {stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}> {stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}> {stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  location: 'no location specified',
};

Profile.propTypes = {
  avatar: T.string,
  name: T.string.isRequired,
  location: T.string.isRequired,
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};

export default Profile;
