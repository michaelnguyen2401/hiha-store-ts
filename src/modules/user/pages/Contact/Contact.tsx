import React from 'react';

function Contact(): React.ReactElement {
  return (
    <div className="c-contact">
      <h1 className="c-contact__title">Contact information</h1>
      <p className="bold">Contact with me via:</p>
      <ul>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/nvdai2401/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/nvdai2401/
          </a>
        </li>
        <li>
          Github:{' '}
          <a
            href="https://github.com/nvdai2401"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/nvdai2401
          </a>
        </li>
        <li>
          Stackoverflow:{' '}
          <a
            href="https://stackoverflow.com/users/9548285/michael"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://stackoverflow.com/users/9548285
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
