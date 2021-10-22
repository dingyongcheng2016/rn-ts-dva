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

let IconBiaoqiankuozhanShouye111: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M914.176 467.0976L548.352 121.856c-19.712-18.5856-50.5856-18.5856-70.2976 0L112.2304 467.0976c-15.36 14.4896-20.224 36.5056-12.4416 56.1664a50.944 50.944 0 0 0 47.5648 32.3072h48.5888v310.8352c0 28.2112 22.9888 51.2 51.2 51.2h173.4144c16.9472 0 30.72-13.7728 30.72-30.72v-225.4848h123.7504v225.4848c0 16.9472 13.7728 30.72 30.72 30.72h173.4144c28.2112 0 51.2-22.9888 51.2-51.2V555.52h48.64a50.944 50.944 0 0 0 47.5648-32.3072c7.8336-19.6096 2.9696-41.6256-12.3904-56.1152z"
        fill={getIconColor(color, 0, '#9fc6ff')}
      />
    </Svg>
  );
};

IconBiaoqiankuozhanShouye111.defaultProps = {
  size: 18,
};

IconBiaoqiankuozhanShouye111 = React.memo ? React.memo(IconBiaoqiankuozhanShouye111) : IconBiaoqiankuozhanShouye111;

export default IconBiaoqiankuozhanShouye111;
