import React, { FC, memo } from 'react';
import Icon from '@components/atom/Icon';

interface TabIconProps {
  color: string;
  size: number;
  focused: boolean;
}

export const HomeIcon: FC<TabIconProps> = memo(({ focused, size, color }) => {
  return (
    <Icon
      name={focused ? 'home' : 'home-outline'}
      size={size}
      iconFamily="Ionicons"
      color={color}
    ></Icon>
  );
});

export const CategoriesIcon: FC<TabIconProps> = memo(
  ({ focused, size, color }) => {
    return (
      <Icon
        name={focused ? 'grid' : 'grid-outline'}
        size={size}
        iconFamily="Ionicons"
        color={color}
      ></Icon>
    );
  },
);
export const CartIcon: FC<TabIconProps> = memo(({ focused, size, color }) => {
  return (
    <Icon
      name={focused ? 'cart' : 'cart-outline'}
      size={size}
      iconFamily="Ionicons"
      color={color}
    ></Icon>
  );
});
export const AccountIcon: FC<TabIconProps> = memo(
  ({ focused, size, color }) => {
    return (
      <Icon
        name={focused ? 'person' : 'person-outline'}
        size={size}
        iconFamily="Ionicons"
        color={color}
      ></Icon>
    );
  },
);
