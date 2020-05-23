import styled from 'styled-components';

export const ProfileAndBody = styled.section`
max-width: 960px;
margin: 0 auto;

a {
  text-decoration: none;
}

  ul {
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    list-style: none;

    li {
      flex: 1;

      strong {
        display: block;
        font-size: 15px;

      }
    }
  }

  div {
    display: flex;
    padding: 30px;

    aside {
      margin-left: 24px;
      margin-top: 0px;
    }

    strong {
      font-size: 30px;
    }

    p {
      font-size: 16px;
      color: #737380;
      margin-top: 5px;
    }
  }

  img {
    width: 200px;
    height: 200px;
    margin-left: 10px;
    margin-bottom:-10%;
  }

`;
