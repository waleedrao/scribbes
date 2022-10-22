import React from "react";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import profile from "../../Asstes/Images/profile.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import homeV from "../../Asstes/Images/homeV.png";
import vedioV from "../../Asstes/Images/vedioV.png";
import com from "../../Asstes/Images/com.png";
import fireV from "../../Asstes/Images/fireV.png";
import noti from "../../Asstes/Images/noti.png";
import explor from "../../Asstes/Images/explor.png";
import userV from "../../Asstes/Images/userV.png";
import msgV from "../../Asstes/Images/msgV.png";
import setV from "../../Asstes/Images/setV.png";
import Image from "next/image";

const HomeLeftMenu = () => {
  return (
    <>
      <div className={lbar.home_left_bar}>
        <div className={lbar.left_bar_logo}>Scribbes</div>
        <div className={lbar.left_bar_content_box}>
          <div className={lbar.left_bar_profile}>
            <div className={lbar.left_bar_p}>
              <div>
                <Image src={profile} />
              </div>
              <div>
                <div className={lbar.profile_name}>John Doe</div>
                <div className={lbar.profile_email}>@JohnDoeuser</div>
                <div className={lbar.profile_folowers}>
                  190 Followers{" "}
                  <div className={lbar.profile_toggle}>
                    <Image src={arrowUp} /> 256
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={lbar.menu_content_wrap}>
          <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={homeV} />
            </div>
            <div className={lbar.menu_item_active}>
              Home
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={vedioV} />
            </div>
			<div className={lbar.menu_item}>
              Videos
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={com} />
            </div>
			<div className={lbar.menu_item}>
              Communities
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={fireV} />
            </div>
			<div className={lbar.menu_item}>
              Trending
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={noti} />
            </div>
			<div className={lbar.menu_item}>
              Notifications
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={explor} />
            </div>
			<div className={lbar.menu_item}>
              Explore
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={userV} />
            </div>
            <div className={lbar.menu_item}>
              Profile
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={msgV} />
            </div>
			<div className={lbar.menu_item}>
              Messages
            </div>
          </div>
		  <div className={lbar.menu_opt_wrap}>
            <div>
              <Image src={setV} />
            </div>
            <div className={lbar.menu_item}>
              Settings
            </div>
          </div>
        </div>
        <div className={lbar.post_btn_wrap}>
          <div className={lbar.post_btn}>
            Make a post
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLeftMenu;
