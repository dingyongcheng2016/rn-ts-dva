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

let IconFaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514 101.5c-226.3 0-409.8 183.5-409.8 409.8 0.1 226.2 183.5 409.7 409.8 409.7s409.8-183.5 409.8-409.8S740.3 101.5 514 101.5z m203.5 252.3L643 614.6c-3.5 12.4-13.2 22-25.6 25.6l-260.8 74.5c-28.1 8-54.1-18-46.1-46.1L385 407.8c3.5-12.4 13.2-22 25.6-25.6l260.8-74.5c28.1-8 54.1 18 46.1 46.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 512m-76 0a76 76 0 1 0 152 0 76 76 0 1 0-152 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

IconFaxian = React.memo ? React.memo(IconFaxian) : IconFaxian;

export default IconFaxian;
