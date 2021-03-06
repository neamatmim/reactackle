import styled, { css } from 'styled-components';
import { extractThemeOrDefault, getValueString } from 'reactackle-core';

const style = ({ theme: themeFromProvider }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const {
    itemSpacingX,
    itemSpacingY,
  } = theme.reactackle.components.alertsArea.item.actions;

  return css`
    margin: -${getValueString(itemSpacingY)} -${getValueString(itemSpacingX)};
    
    & > * {
      margin: ${getValueString(itemSpacingY)} ${getValueString(itemSpacingX)};
    }
  `;
};

export const ActionsWrapperStyled = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  text-align: right;
  ${style}
`;
