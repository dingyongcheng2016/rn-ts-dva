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

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M562.805 80.698a72.135 72.135 0 0 0-96.93 0L73.925 452.87a36.157 36.157 0 0 0 48.42 53.707l6.233-5.917V889.1a72.315 72.315 0 0 0 72.315 72.405h210.442v-217.71a50.918 50.918 0 0 1 50.94-50.985h99.023a50.918 50.918 0 0 1 50.94 50.985v217.71h215.437a72.315 72.315 0 0 0 72.338-72.405V505.408c16.064 14.535 38.857 13.432 52.222-1.463a36.157 36.157 0 0 0-2.61-51.075L562.805 80.72z"
        fill={getIconColor(color, 0, '#D81E06')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
