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

let IconBofangcopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M605.952 316.16c-20.928 0-37.888 14.592-37.888 32.672v326.88c0 18.016 16.864 32.64 37.888 32.64 20.992 0 37.952-14.624 37.952-32.64V348.8c0-18.08-17.024-32.64-37.952-32.64m-188.416 0c-20.928 0-37.984 14.56-37.984 32.64v326.88c0 18.016 16.96 32.64 37.984 32.64 20.928 0 37.888-14.624 37.888-32.64V348.8c0-18.08-17.056-32.64-37.888-32.64"
        fill={getIconColor(color, 0, '#171E2C')}
      />
      <Path
        d="M511.744 949.344c-241.664 0-438.304-196.096-438.304-437.088 0-240.96 196.64-437.056 438.304-437.056 241.632 0 438.304 196.096 438.304 437.056 0 240.992-196.672 437.12-438.304 437.12m0-947.424C229.536 1.952 0 230.88 0 512.256c0 281.408 229.536 510.304 511.744 510.304 282.176 0 511.712-228.896 511.712-510.304C1023.456 230.88 793.92 1.952 511.744 1.952"
        fill={getIconColor(color, 1, '#171E2C')}
      />
    </Svg>
  );
};

IconBofangcopy.defaultProps = {
  size: 18,
};

IconBofangcopy = React.memo ? React.memo(IconBofangcopy) : IconBofangcopy;

export default IconBofangcopy;
