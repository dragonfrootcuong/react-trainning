import React, { memo } from 'react';

import styles from './styles.scss';

type Props = {
  info: {
    email: string;
    telephone: string;
    socialList: object;
  };
};

export default memo(({ info }: Props) => (
  <div className={styles.TopHeader}>
    <div id="rb_email_widget-3">
      <a href="{info.email}">
        <i />
        {info.email}
      </a>
    </div>
  </div>
));
