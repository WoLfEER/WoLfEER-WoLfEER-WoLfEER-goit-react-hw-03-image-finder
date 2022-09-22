import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 96px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;