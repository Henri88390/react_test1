import React, { FC } from 'react';
import styles from './buttonTest.module.scss';

interface ButtonTestProps {}

const ButtonTest: FC<ButtonTestProps> = () => (
  <div className={styles.ButtonTest}>
    ButtonTest Component
  </div>
);

export default ButtonTest;
