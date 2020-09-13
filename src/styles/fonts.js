import { colors } from './theme';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 71px;
  line-height: 79px;
  letter-spacing: -1px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const H2 = styled.h2`
  font-size: 40px;
  line-height: 46px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const H3 = styled.h3`
  font-size: 25px;
  line-height: 32px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const H4 = styled.h4`
  font-size: 24px;
  line-height: 28px;
  color: ${({ color }) => color ? color : colors.black};
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const P2 = styled.p`
  font-size: 10px;
  line-height: 12px;
`;