import styled from 'styled-components';
import { Box } from 'native-base';
import { theme } from './theme';

/*Add the needed reusable components here*/
interface UIContainerProps {
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingX?: string | number;
  backgroundColor?: string;
}

export const UIContainer = styled(Box)`
  flex: 1;
  background-color: ${(props: UIContainerProps) =>
    props.backgroundColor || theme.colors.lightBlue};
  padding-top: ${(props: UIContainerProps) => props.paddingTop || '20px'};
  padding-bottom: ${(props: UIContainerProps) => props.paddingBottom || '20px'};
  padding-horizontal: ${(props: UIContainerProps) => props.paddingX || '20px'};
`;

interface UICardProps {
  backgroundColor?: string;
  borderRadius?: string;
  paddingX?: string | number;
  paddingY?: string | number;
}

export const UICard = styled(Box)`
  background-color: ${(props: UICardProps) =>
    props.backgroundColor || theme.colors.white};
  border-radius: ${(props: UICardProps) => props.borderRadius || '8px'};
  padding-vertical: ${(props: UICardProps) => props.paddingY || '20px'};
  padding-horizontal: ${(props: UICardProps) => props.paddingX || '20px'};
`;
