import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  max-width: 100%;
  padding: 10px 50px;
  background-color: #fff;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .icon {
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
  }

  input {
    padding: 5px 80px;
    border-radius: 8px;
    border: 1px solid rgb(0, 0, 0, 0.1);
    color: #333;
    text-align: center;
    justify-content: center;
  }

  .option {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-left: 150px;
`;

export const Icons = styled.div`
  display: flex;
  margin-left: 60px;

  svg {
    margin: 0px 15px;

    &:hover {
      cursor: pointer;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: red;
    border-radius: 50%;
    margin: 27px -5px 0 -30px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  img {
    border-radius: 50%;
    padding: 1px;
    border: 1px solid #222;
    max-width: 35px;
    max-height: 35px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Account = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SideBar = styled.div`
  height: 600px;
  max-width: 350px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 30px 40px;

  img {
    border-radius: 50%;
    margin-bottom: 15px;
    padding: 3px;
    border: 3px solid #FD0044;
  }

  h1 {
    font-size: 26px;
    font-weight: 600;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #000;
  }

  span {
    font-size: 14px;
    color: #888;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .bio {
    font-size: 15px;
    color: #000;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .account {
    font-size: 15px;
    color: #000;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    background: #fff;
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 4px;
    align-self: center;
  }

  > button {
    margin-right: 6px;
  }

  .follow {
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    background: #0080ff;
    color: #fff;
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;

export const Stories = styled.div`
  max-width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
`;

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 30px 0 30px 20px;

  img {
    border-radius: 50%;
    padding: 2px;
    border: 2px solid rgb(0, 0, 0, 0.1);
  }

  span {
    align-self: center;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;

  max-width: 890px;
  max-height: 50px;

  margin: 30px 0 10px 0;

  border-bottom: 1.4px solid #999;
  color: #999;

  svg {
    align-self: flex-start;
    margin-bottom: -5px;
    margin-right: 4px;
  }

  h1 {
    font-size: 14px;
    align-self: center;

    margin-bottom: 12px;

    &:hover {
      cursor: pointer;
    }
  }

  .selected {
    color: #000;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: 100%;
  flex: 1;
`;

export const Post = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  list-style: none;

  margin: 0px 0px 20px 0px;

  li {
    display: flex;
    flex-direction: column;

    img {
      max-width: 283px;
      height: 270px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;