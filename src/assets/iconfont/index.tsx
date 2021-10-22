/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShanchu from './IconShanchu';
import IconIconfontbofang from './IconIconfontbofang';
import IconBofangcopy from './IconBofangcopy';
import IconShangyishou from './IconShangyishou';
import IconXiayishou from './IconXiayishou';
import IconXialiaJiantouCopy from './IconXialiaJiantouCopy';
import IconZantingtingzhi from './IconZantingtingzhi';
import IconBofang from './IconBofang';
import IconFanhui from './IconFanhui';
import IconIosShijian from './IconIosShijian';
import IconShengyin from './IconShengyin';
import IconTing from './IconTing';
import IconZiyuan from './IconZiyuan';
import IconGengduo from './IconGengduo';
import IconQunfengcainixihuanxian from './IconQunfengcainixihuanxian';
import IconFaxian from './IconFaxian';
import IconWode from './IconWode';
import IconShoucang from './IconShoucang';
import IconFavoritesFill from './IconFavoritesFill';
import IconBiaoqianA01Shouye01 from './IconBiaoqianA01Shouye01';
import IconBiaoqiankuozhanShouye111 from './IconBiaoqiankuozhanShouye111';
import IconShouye from './IconShouye';

export type IconNames = 'icon-shanchu' | 'icon-iconfontbofang' | 'icon-bofangcopy' | 'icon-shangyishou' | 'icon-xiayishou' | 'icon-xialia-jiantou-copy' | 'icon-zantingtingzhi' | 'icon-bofang' | 'icon-fanhui' | 'icon-ios-shijian' | 'icon-shengyin' | 'icon-ting' | 'icon-ziyuan' | 'icon-gengduo' | 'icon-qunfengcainixihuanxian' | 'icon-faxian' | 'icon-wode' | 'icon-shoucang' | 'icon-favorites-fill' | 'icon-biaoqianA01_shouye-01' | 'icon-biaoqiankuozhan_shouye-111' | 'icon-shouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-shanchu':
      return <IconShanchu key="1" {...rest} />;
    case 'icon-iconfontbofang':
      return <IconIconfontbofang key="2" {...rest} />;
    case 'icon-bofangcopy':
      return <IconBofangcopy key="3" {...rest} />;
    case 'icon-shangyishou':
      return <IconShangyishou key="4" {...rest} />;
    case 'icon-xiayishou':
      return <IconXiayishou key="5" {...rest} />;
    case 'icon-xialia-jiantou-copy':
      return <IconXialiaJiantouCopy key="6" {...rest} />;
    case 'icon-zantingtingzhi':
      return <IconZantingtingzhi key="7" {...rest} />;
    case 'icon-bofang':
      return <IconBofang key="8" {...rest} />;
    case 'icon-fanhui':
      return <IconFanhui key="9" {...rest} />;
    case 'icon-ios-shijian':
      return <IconIosShijian key="10" {...rest} />;
    case 'icon-shengyin':
      return <IconShengyin key="11" {...rest} />;
    case 'icon-ting':
      return <IconTing key="12" {...rest} />;
    case 'icon-ziyuan':
      return <IconZiyuan key="13" {...rest} />;
    case 'icon-gengduo':
      return <IconGengduo key="14" {...rest} />;
    case 'icon-qunfengcainixihuanxian':
      return <IconQunfengcainixihuanxian key="15" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="16" {...rest} />;
    case 'icon-wode':
      return <IconWode key="17" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="18" {...rest} />;
    case 'icon-favorites-fill':
      return <IconFavoritesFill key="19" {...rest} />;
    case 'icon-biaoqianA01_shouye-01':
      return <IconBiaoqianA01Shouye01 key="20" {...rest} />;
    case 'icon-biaoqiankuozhan_shouye-111':
      return <IconBiaoqiankuozhanShouye111 key="21" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="22" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
