import "./featured.scss";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Info from "@mui/icons-material/Info";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        height="190%"
        src="https://i0.pickpik.com/photos/424/345/85/dark-face-girl-person-preview.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores
          distinctio recusandae accusamus aut quia dolorem harum fugit unde,
          repudiandae saepe doloremque debitis? At, a nisi molestias dolores
          minus maxime?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayCircleFilledIcon /> <span>Play</span>
          </button>
          <button className="more">
            <Info /> <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
