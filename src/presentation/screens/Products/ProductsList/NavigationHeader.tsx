import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import addIcon from '../../../../../assets/plus-button.png';
import styles from './styles';
import useUsersListViewController from './ViewController';

type TProps = {};

export const NavigationHeader: FC<TProps> = () => {
  const {onPressAdd} = useUsersListViewController();

  return (
    <TouchableOpacity onPress={onPressAdd}>
      <Image source={addIcon} style={styles.addIcon} />
    </TouchableOpacity>
  );
};
