import React from 'react';
import { ShipStyles } from '~/types/ship-styles';
import { translateShipStyles } from '~/util/translator';

export type ExProps<P> = P & {
  ss?: ShipStyles;
};

const withSs = <P extends { style?: any }>(
  Component: React.ComponentType<P>
): React.ComponentType<ExProps<P>> => {
  return (props: ExProps<P>) => {
    const { ss, style, ...rest } = props;
    const smashedStyles = ss ? translateShipStyles(ss) : {};
    return <Component {...rest as P} style={[style, smashedStyles]} />;
  };
};

export default withSs;