import styled from 'styled-components';

export const Wrap = styled.header`
  svg {
    margin-right: 10px;
    margin-left: 40px;

  }

  form {
    margin-right: 10px;
  }

`;

export const WrapFooter = styled.footer`
  position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 10px;


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

export const Div = styled.div`
  margin-right: 40px;
`;

export const RepositoriesInfo = styled.section`
max-width: 960px;
margin: 0 auto;
padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    display: block;
    text-decoration: none;
    align-items: center;
    display: flex;
    transition: transform 2.0s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }
    svg {
        margin-left: auto;
        color: #A8A8B3;
      }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 20px;
      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      p {
        font-size: 18px;
        margin-top: 4px;
        color: #A8A8B3;
      }
    }
  }
`;
