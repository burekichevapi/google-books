import { LinkedInIcon } from "./linkedInIcon";
import { GitHubIcon } from "./gitHubIcon";
import { YouTubeIcon } from "./youTubeIcon";

export const SocialMedia = () => {
  return (
    <div style={{ "textAlign": "left" }} className="ml-4 mt-4">
      <a href="https://www.linkedin.com/in/amerdelic/"
        className="mr-2"
        style={{ "textAlign": "center" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon height="35" width="35" />
      </a>
      <a href="https://github.com/burekichevapi"
        className="ml-2 mr-2"
        style={{ "textAlign": "center" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon height="35" width="35" />
      </a>
      <a href="https://youtube.com/playlist?list=PLp7UoZymEIc5px506kHl6Pn-8LFrMxF3t"
        className="ml-2"
        style={{ "textAlign": "center" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon height="35" width="35" />
      </a>
    </div>
  );
}