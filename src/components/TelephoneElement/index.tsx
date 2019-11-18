import React, { memo } from 'react';

import styles from './styles.scss';

type Props = {
  info: {
    telephoneNumber: string;
    icon: string;
  };
};

export default memo(({ info }: Props) => (
    <div id="rb_phone_widget-3" className={styles.TelephoneElement}>
        <a href={"tel:" + info.telephoneNumber}><i></i>
{info.telephoneNumber}</a></div>
));
