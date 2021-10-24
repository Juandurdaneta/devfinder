import React from "react";
import { Content } from "../UserInfo/UserInfo.styles";

// styles
import { Wrapper } from "../UserInfo/UserInfo.styles";

const UserInfo = ({ user }) => {
    const options = {day: 'numeric' , year: 'numeric', month: 'short'}
    var date = new Date(user.created_at);

    date = date.toLocaleDateString('en-US', options);


    console.log(date)

  return (
    <Wrapper>
      <Content>
        <h2>{user.name}</h2>
        <p>Joined {date}</p>
      </Content>
    </Wrapper>
  );
};

export default UserInfo;
