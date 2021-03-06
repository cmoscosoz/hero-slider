import {
  INavProps,
} from '../../typings/definitions';

/**
 * `MenuNav` component props.
 */
export interface IMenuNavProps extends INavProps {
  justifyContent: string;
  sliderWidth: number;
  mobileThreshold: number;
  isNullAfterThreshold: boolean;
  extraButton: React.ReactElement | React.Component;
  isExtraButtonRight: boolean;
}
