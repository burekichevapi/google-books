import React from "react";
import { LinkedInIcon } from "./icons/linkedInIcon";
import { GitHubIcon } from "./icons/gitHubIcon";
import { YouTubeIcon } from "./icons/youTubeIcon";

export const SocialMedia = () => {
  return (
    <div style={{ "textAlign": "left" }} className="ml-4 mt-4">
      <a href="https://www.linkedin.com/in/amerdelic/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2"
        style={{ "textAlign": "center" }}
      >
        <LinkedInIcon height="35" width="35" />
      </a>
      <a href="https://github.com/burekichevapi"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 mr-2"
        style={{ "textAlign": "center" }}
      >
        <GitHubIcon height="35" width="35" />
      </a>
      <a href="https://youtube.com/playlist?list=PLp7UoZymEIc5px506kHl6Pn-8LFrMxF3t"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
        style={{ "textAlign": "center" }}
      >
        <YouTubeIcon height="35" width="35" />
      </a>
    </div>
  );
};