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

let IconBiaoqianA01Shouye01: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M923.9552 529.3568l-60.5184-62.1056-326.8096-333.824c-8.3968-8.2432-27.9552-8.4992-35.8912 0L169.8816 471.1936l-56.6784 58.1632a19.07712 19.07712 0 0 0 0 26.4704 17.92512 17.92512 0 0 0 25.2928 0.512c0.1536-0.1536 0.3584-0.3072 0.512-0.512L203.1104 489.984v354.6112c-0.256 19.8144 15.5648 36.1472 35.4304 36.4032h186.2656a35.90656 35.90656 0 0 0 35.4304-36.352v-128l118.4768-0.8192v128.8192c-0.256 19.8144 15.5648 36.1472 35.4304 36.4032H798.5152a35.90656 35.90656 0 0 0 35.4304-36.352V490.0352l64.1024 65.792a17.92512 17.92512 0 0 0 25.2928 0.512c0.1536-0.1536 0.3584-0.3072 0.512-0.512a18.97984 18.97984 0 0 0 0.1024-26.4704z"
        fill={getIconColor(color, 0, '#9fc6ff')}
      />
    </Svg>
  );
};

IconBiaoqianA01Shouye01.defaultProps = {
  size: 18,
};

IconBiaoqianA01Shouye01 = React.memo ? React.memo(IconBiaoqianA01Shouye01) : IconBiaoqianA01Shouye01;

export default IconBiaoqianA01Shouye01;
