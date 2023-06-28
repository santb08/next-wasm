'use client';

import styled from 'styled-components';
import Surface from '@weave-design/surface';
import Navbar from '../components/navbar/navbar';


const StyledPage = styled(Surface)`
  height: 100vh;
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Navbar />
    </StyledPage>
  );
}
