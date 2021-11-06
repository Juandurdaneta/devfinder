import React from "react";
import { ContactGrid, Content, Grid, Header, Item, Contact} from "../UserInfo/UserInfo.styles";

// styles
import { Wrapper } from "../UserInfo/UserInfo.styles";
// icon
import LocationImg from "../../images/icon-location.svg";
import TwitterImg from "../../images/icon-twitter.svg";
import WebsiteImg from "../../images/icon-website.svg";
import CompanyImg from "../../images/icon-company.svg";



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

        <ContactGrid>
          <Contact >
            <img src={LocationImg} /> { user.location ? user.location :"Not available"}
          </Contact>
          <Contact >
            <img src={TwitterImg} /> { user.twitter ? user.twitter :"Not available"}
          </Contact>
          <Contact >
            <img src={WebsiteImg} /> { user.blog ? user.blog :"Not available"}
          </Contact>
          <Contact >
            <img src={CompanyImg} /> { user.company ? user.company :"Not available"}
          </Contact>
        </ContactGrid>

      </Content>
    </Wrapper>
  );
};

export default UserInfo;
