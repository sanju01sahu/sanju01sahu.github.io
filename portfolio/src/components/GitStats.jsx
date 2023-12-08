import styled from "@emotion/styled";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitStats = () => {
  return (
    <DIV>
      <div>
        <GitHubCalendar username="sanju01sahu" />

        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=sanju01sahu&theme=transparent&hide_border=true&card_width=497"
          alt="GitHub Streak"
        />

        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanju01sahu&langs_count=8&show_icons=true&theme=transparent&hide_border=true"
          alt=""
        />

        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=sanju01sahu&show_icons=true&theme=transparent&hide_border=true"
          alt=""
        />
      </div>
    </DIV>
  );
};

const DIV = styled.div``;

export default GitStats;
