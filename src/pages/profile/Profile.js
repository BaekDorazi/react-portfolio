import React, { Component } from "react";
import profileImg from "../../images/profile_sh.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="left-contents">
          <img className="profile-img" src={profileImg} />
        </div>
        <div className="right-contents">
          <div className="main-title">Yusunhee_Portfolio.</div>
          <div className="contents-text">
            <span>
              연구하고 노력하고 끊임없는 의문을 던지는 디자이너, 문제 해결을
              위해 고민할 줄 알고 그 문제를 해결할 줄 아는 능력을 키우는 것.
              아마 이건 끝없는 노력을 통해서만 이루어질 수 있는 것이라고
              생각합니다.
              <br />
              <br />
              연구하고 노력하고 끊임없는 의문을 던지는 디자이너, 문제 해결을
              위해 고민할 줄 알고 그 문제를 해결할 줄 아는 능력을 키우는 것.
              아마 이건 끝없는 노력을 통해서만 이루어질 수 있는 아이디어를 내고
              컨셉을 고민하며, 소비자의 need와 want를 제대로 표현할 수 있는
              노하우. 그것은 책상에 가만히 앉아 고민만 하지 말고 직접 발로
              뛰어야 한다는 것입니다.
              <br />
              <br />
              자신의 단점을 알기에 최선을 다하는 삶의 자세와 사람들과 쉽고
              편하게 어울릴 수 있는 장점과 모르는 건 끝까지 알아내고야 마는
              집요함. 계획한 일을 끝까지 추진해 가는 적극성, 포기를 모르는 삶에
              대한 거침없는 호기심과 꾸준한 자기계발에 대한 짐념이 바로 저의
              장점입니다.
              <br />
              <br />
              주말에는 웹서핑을 즐길 줄 알며 인터넷과 갖가지 컴퓨터 활용능력을
              가지고 있고 때로는 서점에서 책 서핑을 하고 정보를 얻습니다.
            </span>
            <div className="stats">
              <div>
                <i className="icon-mail box"> mail</i>
              </div>
              <div>
                <i className="icon-instagram box"> instagram</i>
              </div>
              <div>
                <i className="icon-github box"> github</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
