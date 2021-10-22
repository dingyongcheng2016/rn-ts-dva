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

let IconIconfontbofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.42473 0C228.970664 0 0 229.135679 0 511.793286 0 794.450894 228.970664 1023.587815 511.42473 1023.587815 793.87502 1023.587815 1022.850703 794.450894 1022.850703 511.793286 1022.850703 229.140681 793.87502 0 511.42473 0L511.42473 0ZM511.42473 972.403477C257.214195 972.403477 51.142471 766.178254 51.142471 511.789526 51.142471 257.399556 257.214195 51.179335 511.42473 51.179335 765.631505 51.179335 971.706972 257.399556 971.706972 511.789526 971.706972 766.178254 765.631505 972.403477 511.42473 972.403477L511.42473 972.403477ZM743.576626 475.523005C663.989298 421.326579 519.670448 340.211511 437.494599 289.955706 403.805201 268.692094 375.474126 277.231582 372.753072 314.783274 370.784793 415.36371 372.753072 609.426701 372.753072 711.747802 374.467483 749.87013 408.049345 754.895721 437.196985 739.591218 519.280287 689.823459 660.355391 604.293489 742.85385 554.272953 742.311147 553.945088 805.490806 519.175235 743.576626 475.523005L743.576626 475.523005Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconfontbofang.defaultProps = {
  size: 18,
};

IconIconfontbofang = React.memo ? React.memo(IconIconfontbofang) : IconIconfontbofang;

export default IconIconfontbofang;