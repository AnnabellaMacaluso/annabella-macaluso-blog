import React from "react";

import { Link } from "gatsby";

import profilepic from "../../content/assets/profile-pic.jpg";

function Aside() {
  return (
    <div
      css={`
        max-width: 21rem;
        margin-right: 1rem;
        padding: 1rem;
        padding-right: 2rem;
        font-size: ${(props) => props.theme.fontSize.small};
      `}
    >
      <Link to="/">
        <img
          alt="me"
          src={profilepic}
          width={60}
          height={60}
          css={`
            border-radius: 50%;
          `}
        />
        <div
          css={`
            font-weight: 700;
            margin: 0.5em 0em;
          `}
        >
          Gilles Castel
          {(new Date()).getTime() > 1658229387116 ? '\xa0 ✝2022' : ''}
        </div>
      </Link>
      <div>
        Mathematics PhD student at KU Leuven. Interested in mathematics,
        software development, Vim, Unix, design.
      </div>
      <div
        css={`
          margin-top: 0.7em;
          opacity: 0.7;
          display: flex;
          justify-content: space-between;

          span {
            margin-bottom: 0.5em;
            border-bottom: 1px solid transparent;
            text-align: center;
          }

          span + span {
            margin-left: 0.2em;
          }

          a:hover {
            border-bottom: 1px solid ${(props) => props.theme.colors.border};
          }
        `}
      >
        <span>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/gillescastel"
          >
            Github
          </a>{" "}
        </span>
        <span>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://twitter.com/gilles_castel"
          >
            Twitter
          </a>{" "}
        </span>
        <span>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.quora.com/profile/Gilles-Castel-1"
          >
            Quora
          </a>{" "}
        </span>
        <span>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.youtube.com/channel/UCbW6-rTEn6nPj56K_9dLozQ"
          >
            YouTube
          </a>{" "}
        </span>
        <span>
          <a target="_blank" rel="nofollow noopener noreferrer" href="/rss.xml">
            RSS
          </a>{" "}
        </span>
        <span>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="mailto:gilles@castel.dev"
          >
            @
          </a>
        </span>
      </div>
      <div>
        <ul
          css={`
            list-style-type: none;
            padding: 1em 0em;
            li {
              margin-left: -0.5em;
              padding-left: 0em;
              a {
                outline: none;
                border-left: 1px solid transparent;
                :hover {
                  border-left: 1px solid lightgray;
                }
                &.active {
                  border-left: 1px solid ${(props) => props.theme.colors.border};
                }
                padding: 0.5em 0.5em 0.5em 0.5em;
                font-weight: 700;
              }
            }
          `}
        >
          <li>
            <Link activeClassName="active" to={"/"}>
              Articles
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={"/notes"}>
              Lecture Notes
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={"/talks"}>
              Talks
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
