import React from "react";
import PropTypes from "prop-types";

class UserDetails extends React.Component {
  render() {
    const { user, repositories } = this.props;

    return (
      <div>
        {user && (
          <div>
            <h2>Detalji o {user.login}</h2>
            <p>
              <strong>Ime:</strong> {user.name}
            </p>
            <p>
              <strong>Lokacija:</strong> {user.location}
            </p>
            <p>
              <strong>Biografija:</strong> {user.bio}
            </p>
            <h3>Respositorij:</h3>
            <ul>
              {repositories.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.object,
  repositories: PropTypes.array.isRequired,
};

export default UserDetails;
