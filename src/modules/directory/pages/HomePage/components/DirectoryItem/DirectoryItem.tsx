import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const DirectoryItem: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const { title, imageUrl, size, linkUrl } = props;

  return (
    <div
      className={`c-directory-item pointer ${size || ''}`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div
        className="c-directory-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="c-directory-item__content p-l-r-24">
        <h3 className="c-directory-item__content__title bold m-b-6">{title}</h3>
        <p className="c-directory-item__content__sub-title">Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
