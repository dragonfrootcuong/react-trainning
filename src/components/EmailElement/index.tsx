import React, { memo } from 'react';

import styles from './styles.scss';

type Props = {
  info: {
    email: string;
    icon: string;
  };
};

export default memo(({ info }: Props) => (
  <div id="rb_email_widget-3" className={styles.EmailElement}>
    <a href={info.email}>
      <i />
      {info.email}
    </a>
  </div>
));
