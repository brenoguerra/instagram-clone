import React from 'react';
import { AiOutlineInstagram, AiOutlineHome, AiOutlineSend, AiOutlineCompass, AiOutlineHeart, AiFillCheckCircle, AiOutlineTable, AiOutlineTag, AiOutlineContacts, AiOutlineFundProjectionScreen } from 'react-icons/ai';

import { Content, Header, Icon, Control, Icons, Avatar, Account, SideBar, Profile, Buttons, Stories, Story, Feed, Posts, Post, Selection } from './styles';

export default function Home() {
  return (
    <>
      <Content>
        <Header>

          <Icon>
            <AiOutlineInstagram size="36" class="icon" />
          </Icon>

          <Control>
            <input placeholder="Search" />
            
            <Icons>
              <AiOutlineHome size="26" />
              <AiOutlineSend size="26" />
              <AiOutlineCompass size="26" />
              <AiOutlineHeart class="notification" size="26" />
            </Icons>
          </Control>

          <Avatar>
            <img src="https://api.adorable.io/avatars/35/abott@adorable.png" alt="Avatar"/>
          </Avatar>          

        </Header>

        <Account>
          <SideBar>
            <Profile>
              <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt="Avatar"/>
              <h1>Bill Gates <AiFillCheckCircle color="#0080ff" size="16" /></h1>
              <p>@bill</p>
              <span>CEO at Microsoft</span>

              <Buttons>
                <button class="follow">Follow</button>
                <button>Message</button>
                <button>Contact</button>
              </Buttons>

              <span class="bio">This is description of the user. Here, the user put what you want other people know about he.</span>

              <span class="account"><b>1.475</b> posts</span>
              <span class="account"><b>1,5m</b> followers</span>
              <span class="account"><b>19k</b> following</span>
            </Profile>
          </SideBar>

          <Feed>
            <Stories>

              <Story>
                <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="Story" />
                <span>test</span>
              </Story>


              <Story>
                <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="Story" />
                <span>test</span>
              </Story>


              <Story>
                <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="Story" />
                <span>test</span>
              </Story>

            </Stories>

            <Selection>
              <h1 class="selected"><AiOutlineTable size="22" />POSTS</h1>
              <h1><AiOutlineFundProjectionScreen size="22" />IGTV</h1>
              <h1><AiOutlineTag size="22" />SAVED ELEMENTS</h1>
              <h1><AiOutlineContacts size="22" />TAGGED IN</h1>
            </Selection>

            
            <Posts>

              <Post>
                <li>
                  <img src="https://pix10.agoda.net/hotelImages/12161/-1/c39600ba904e4cc546901583f4fddcfb.jpg?s=1024x768" alt=""/>
                </li>

                <li>
                  <img src="https://pix10.agoda.net/hotelImages/12161/-1/c39600ba904e4cc546901583f4fddcfb.jpg?s=1024x768" alt=""/>
                </li>

                <li>
                  <img src="https://pix10.agoda.net/hotelImages/12161/-1/c39600ba904e4cc546901583f4fddcfb.jpg?s=1024x768" alt=""/>
                </li>

                <li>
                  <img src="https://pix10.agoda.net/hotelImages/12161/-1/c39600ba904e4cc546901583f4fddcfb.jpg?s=1024x768" alt=""/>
                </li>
              </Post>

            </Posts>

          </Feed>

        </Account>
      </Content>
    </>
  );
}