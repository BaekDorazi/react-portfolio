import React, { Component } from "react";
import profileImg from "images/profile_img.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="text">
          <h2 className="main-title">
            실패를 두려워하지 않는 자만이
            <br />
            가능성을 열 수 있다.
          </h2>
          <div className="contents">
            <b>연구하고 노력하고 끊임없는 의문을 던지는 디자이너,</b>
            <br />
            문제 해결을 위해 고민하며 그 문제를 해결할 줄 아는 능력을
            키우는 것.
            <br />
            아마 이건 끝없는 노력을 통해서만 이루어질 수 있는 것이라고
            생각합니다.
            <br />
            <br />
            아이디어를 내고 컨셉을 고민하며,
            <br />
            <b>소비자의 need와 want를 제대로 표현할 수 있는 노하우.</b>
            <br />
            그것은 책상에 가만히 앉아 고민만 하지 말고 직접 발로 뛰어야 한다는
            것입니다.
            <br />
            <br />
            학창시절과 사회 현장에서 맺었던 인연들과 촬영, 기획, 편집 등은
            <br />
            앞으로 해 나가야 할 다방면의 디자인 작업들의 좋은 기반이 되었고
            <br />
            그만큼 <b>실수를 줄일 수 있는 한번 더 생각하는 신중함을 배우게
            되었습니다.</b>
            <br />
            <br />
            이러한 경험을 거치면서 디자인 컨셉이 잡히면
            <br />
            모든 프로젝트가 완성되기까지 <b>사람과 소비자 간의 크리에이티브를
            <br />
            최상으로 이끌 수 있는 디자이너가 되겠다</b>는 목표를 가질 수 있었습니다.
          </div>
        </div>
        <div className="profile">
          <div className="profile-frame">
            <div class="profile-image">
              <div class="circle-1"></div>
              <div class="circle-2"></div>
              <div class="picture">
                <img class="img-fluid" src={profileImg} />
              </div>
            </div>

            <div className="profile-button">
              <div class="name">yusunhee</div>
              <div class="job">Web Publisher</div>

              <div class="actions">
                <button class="btn">Follow</button>
                <button class="btn">Message</button>
              </div>
            </div>

            <div class="stats">
              <div class="box">
                <span class="icon-mail value"></span>
                <span class="parameter">mail</span>
              </div>
              <div class="box">
                <i className="icon-instagram value"></i>
                <span class="parameter">instagram</span>
              </div>
              <div class="box">
                <span class="icon-github value"></span>
                <span class="parameter">github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
