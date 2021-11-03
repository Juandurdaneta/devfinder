import React from "react";
import { Content, Grid, Header, Item } from "../UserInfo/UserInfo.styles";

// styles
import { Wrapper } from "../UserInfo/UserInfo.styles";

const UserInfo = ({ user }) => {
  const options = { day: "numeric", year: "numeric", month: "short" };
  var date = new Date(user.created_at);

  date = date.toLocaleDateString("en-US", options);

  return (
    <Wrapper>
      <Content>
        <Header>
          <img src={user.avatar_url} />
          {user.name ? <h2> {user.name} </h2> : <h2>null</h2>}
          <p>Joined {date}</p>
        </Header>

        <p style={{color:"#1b79e4"}}>@{user.login}</p>
        {user.bio ? <p>{user.bio}</p> : <p>This profile has no bio.</p>}

        <Grid>
          <Item><p>Repos</p> <h4> {user.public_repos}</h4> </Item>
          <Item><p>Followers</p> <h4> {user.followers}</h4> </Item>
          <Item><p>Following</p> <h4> {user.following}</h4> </Item>

        </Grid>

      </Content>
    </Wrapper>
  );
};

export default UserInfo;
