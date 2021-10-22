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

let IconZiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M230.684444 230.684444a398.222222 398.222222 0 0 1 589.937778 28.444445L682.666667 398.222222h341.333333V56.888889l-122.595556 122.595555A512 512 0 0 0 13.084444 398.222222h116.906667a391.68 391.68 0 0 1 100.693333-167.537778zM793.315556 793.315556a398.222222 398.222222 0 0 1-589.937778-28.444445L341.333333 625.777778H0v341.333333l122.595556-122.595555A512 512 0 0 0 1010.915556 625.777778h-117.475556a395.093333 395.093333 0 0 1-100.124444 167.537778z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZiyuan.defaultProps = {
  size: 18,
};

IconZiyuan = React.memo ? React.memo(IconZiyuan) : IconZiyuan;

export default IconZiyuan;
