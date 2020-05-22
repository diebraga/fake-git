import styled from 'styled-components';

export const Wrap = styled.header`
  svg {
    margin-right: 10px;
  }

  form {
    margin-right: 10px;
  }

`;

export const WrapFooter = styled.header`
  align-items: center;
  justify-content: space-between;
  position: fixed;
    bottom: 0;
    width: 100%;


  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

  }
`;
