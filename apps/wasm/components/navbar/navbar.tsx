import styled from 'styled-components';
import Typography from '@weave-design/typography';
import Surface from '@weave-design/surface';

/* eslint-disable-next-line */
export interface NavbarProps {}

const StyledNavbar = styled(Surface)`
  display: flex;
  gap: 1.5rem;
  background-color: red;
`;

export function Navbar(props: NavbarProps) {
  return (
    <StyledNavbar borderRadius="m" horizontalPadding="m" shadow="high" verticalPadding="s">
      <Typography>File</Typography>
      <Typography>About</Typography>
      <Typography>Help</Typography>
    </StyledNavbar>
  );
}

export default Navbar;
