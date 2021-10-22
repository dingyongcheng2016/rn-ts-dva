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

let IconXialiaJiantouCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M52.337 283.827c-31.269 30.396-31.269 79.721 0 110.194l403.211 391.718c31.325 30.382 82.114 30.382 113.378 0l403.197-391.718c31.325-30.466 31.325-79.793 0-110.194-31.28-30.449-82.058-30.449-113.393 0l-346.497 336.64-346.457-336.639c-31.325-30.448-82.105-30.448-113.445 0v0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXialiaJiantouCopy.defaultProps = {
  size: 18,
};

IconXialiaJiantouCopy = React.memo ? React.memo(IconXialiaJiantouCopy) : IconXialiaJiantouCopy;

export default IconXialiaJiantouCopy;
