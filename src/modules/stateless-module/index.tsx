import * as React from 'react';
import ReactPlayer from 'react-player';
import * as styles from './styles.scss';
import { Title } from '@khanhnguyen234/react-components';
import { YOUTUBE_URL } from './mock';

const StatelessModule = () => {
  return (
    <div>
      <Title className={styles.title}>@khanhnguyen234/micro-react-admin StatelessModule Title Green</Title>
    </div>
  );
};

export default React.memo(StatelessModule);
