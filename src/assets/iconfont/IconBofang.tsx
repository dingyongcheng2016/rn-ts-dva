/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconBofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M897.143 597.052L432.495 908.578c-46.976 31.488-110.592 18.944-142.08-28.023a102.4 102.4 0 0 1-17.348-57.029V200.474c0-56.55 45.85-102.4 102.4-102.4a102.4 102.4 0 0 1 57.028 17.348l464.64 311.526c46.976 31.488 59.528 95.104 28.032 142.08a102.4 102.4 0 0 1-28.024 28.024z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBofang.defaultProps = {
  size: 18,
};

IconBofang = React.memo ? React.memo(IconBofang) : IconBofang;

export default IconBofang;
