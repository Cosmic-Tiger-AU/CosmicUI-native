import React from 'react';
import { CosmicStyles } from '~/types/cosmic-styles';
import { translateCosmicStyles } from '~/util/translator';

export type ExProps<P> = P & {
  cs?: CosmicStyles;
};

const withCs = <P extends { style?: any }>(
  Component: React.ComponentType<P>
): React.ComponentType<ExProps<P>> => {
  return (props: ExProps<P>) => {
    const { cs, style, ...rest } = props;
    const smashedStyles = cs ? translateCosmicStyles(cs) : {};
    return <Component {...(rest as P)} style={[style, smashedStyles]} />;
  };
};

export default withCs;
