import styled from "@emotion/styled";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitStats = () => {
  return (
    <DIV>
      <h2>Git Stats</h2>
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

const DIV = styled.div`

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom:100px;
}

#github-streak-stats,
#github-top-langs,
#github-stats-card {
  width: 100%;
  max-width: 497px;
  margin-bottom: 20px;
}
@media screen and (max-width: 600px) {
  
}


`;

export default GitStats;
