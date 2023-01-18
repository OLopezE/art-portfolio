import styled from 'styled-components';

const AboutMeWrapper = styled.section`
  margin-top: 10rem;
  display: flex;
  background-color: #9B846E;
  padding:6rem 10rem;
  gap: 4rem;
  align-items: center;
`;

const MyImage = styled.div`
  max-width: 200px;
  max-height: 200px;
  aspect-ratio: 1/1;
  background-color: black;
  flex: 1;
`;

const DescriptiveText = styled.p`
  color: #d0cbb5;
  font-size: 1.75rem;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

export {
  AboutMeWrapper,
  DescriptiveText,
  TextWrapper,
  MyImage
}