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

let IconTing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M272.1 832.6H212c-83.8 0-151.4-68.7-151.4-154.6S128.2 523.4 212 523.4c0-170.7 135.3-309.2 302.8-309.2s302.8 138.5 302.8 309.2c83.8 0 151.4 68.7 151.4 154.6s-67.6 154.6-151.4 154.6h-60.1V523.4c0-136.4-108.4-247-242.7-247S272.1 387 272.1 523.4v309.2z m545.5-62.2c50.5 0 91.3-41.9 91.3-92.3 0-50.5-40.8-92.3-91.3-92.3v184.6zM210.9 584.6c-50.5 0-91.3 41.9-91.3 92.3 0 50.5 40.8 92.3 91.3 92.3V584.6z m151.4 0c17.2 0 30.1 14 30.1 31.1v123.5c0 17.2-14 31.1-30.1 31.1-17.2 0-30.1-14-30.1-31.1V615.7c0.1-17.1 14-31.1 30.1-31.1z m152.5 31.1c17.2 0 30.1 14 30.1 31.1v62.3c0 17.2-14 31.1-30.1 31.1s-30.1-14-30.1-31.1v-62.3c-1-17.1 12.9-31.1 30.1-31.1z m151.4-31.1c17.2 0 30.1 14 30.1 31.1v123.5c0 17.2-14 31.1-30.1 31.1-17.2 0-30.1-14-30.1-31.1V615.7c0-17.1 12.9-31.1 30.1-31.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTing.defaultProps = {
  size: 18,
};

IconTing = React.memo ? React.memo(IconTing) : IconTing;

export default IconTing;
