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

let IconShoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1065 1024" width={size} height={size} {...rest}>
      <Path
        d="M964.340451 303.311757l-209.677811-30.424833a32.072845 32.072845 0 0 1-24.086326-17.62105l-93.683133-190.155209a116.755298 116.755298 0 0 0-209.424271 0l-93.683133 190.155209a32.199615 32.199615 0 0 1-24.213096 17.494279L100.02164 303.311757a116.755298 116.755298 0 0 0-64.652771 199.155889l152.124167 147.813983a31.946075 31.946075 0 0 1 9.25422 28.396511L160.364226 887.7221A116.501758 116.501758 0 0 0 329.602363 1010.435595l187.619806-98.500398a32.072845 32.072845 0 0 1 29.917753 0l187.366266 98.500398a115.994678 115.994678 0 0 0 122.967036-8.87391 115.994678 115.994678 0 0 0 46.397871-114.093125l-35.74918-208.79042a31.946075 31.946075 0 0 1 9.25422-28.396511l152.124168-147.813983a116.755298 116.755298 0 0 0-64.652771-199.155889z"
        fill={getIconColor(color, 0, '#4D4D4D')}
      />
    </Svg>
  );
};

IconShoucang.defaultProps = {
  size: 18,
};

IconShoucang = React.memo ? React.memo(IconShoucang) : IconShoucang;

export default IconShoucang;
