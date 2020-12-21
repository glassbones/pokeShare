import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import { style_ShareButtons } from "./styles";
import FadeIn from "react-fade-in";

const { _facebook_btn, _twitter_btn, _share_btn_div } = style_ShareButtons;

export default ({ url }) => (
  <FadeIn>
    <div style={_share_btn_div}>
      <FacebookShareButton
        url={url}
        hashtag="#INSERT_HASHTAG_HERE"
        style={_facebook_btn}
        className="hvr-grow"
      >
        <FacebookIcon size="30" />
      </FacebookShareButton>

      <TwitterShareButton url={url} style={_twitter_btn} className="hvr-grow">
        <TwitterIcon size="30" />
      </TwitterShareButton>
    </div>
  </FadeIn>
);
