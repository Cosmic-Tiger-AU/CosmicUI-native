import React, {
  ComponentType,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { CosmicStyles } from "~/types/cosmic-styles";
import { translateCosmicStyles } from "~/util/translator";

export type CosmicProps<P> = P & {
  cs?: CosmicStyles;
};

const withCs = <P extends { style?: any }>(
  Component: ComponentType<P>
): React.ForwardRefExoticComponent<
  PropsWithoutRef<CosmicProps<P>> & RefAttributes<any>
> => {
  return forwardRef((props: CosmicProps<P>, ref: React.Ref<any>) => {
    const { cs, style, ...rest } = props;
    const smashedStyles = cs ? translateCosmicStyles(cs) : {};
    return (
      <Component {...(rest as P)} style={[style, smashedStyles]} ref={ref} />
    );
  });
};

export default withCs;
