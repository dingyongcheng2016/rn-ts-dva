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

let IconFanhui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M292.543659 458.274133c13.5168 0 27.0336 5.632 37.819733 16.384l438.749867 453.7344c21.060267 22.016 21.060267 57.002667 0.546133 79.018667a52.053333 52.053333 0 0 1-75.639467 0.580267L255.235925 554.222933c-21.0944-21.435733-21.0944-57.002667-0.546133-79.018666 9.728-11.844267 23.790933-16.930133 37.819733-16.930134zM726.412459 0c13.5168 0 27.0336 5.632 37.853866 16.384 21.060267 21.981867 21.060267 57.002667 0.512 78.984533L330.363392 553.642667a52.053333 52.053333 0 0 1-75.639467 0.580266c-21.060267-21.435733-21.060267-57.002667-0.546133-79.018666L688.592725 16.930133C698.866859 5.666133 712.963925 0 726.412459 0z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconFanhui.defaultProps = {
  size: 18,
};

IconFanhui = React.memo ? React.memo(IconFanhui) : IconFanhui;

export default IconFanhui;
