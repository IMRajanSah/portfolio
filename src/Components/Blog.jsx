import "./Blog.css"
import { Travel } from "./comp/Travel";
export default function GetInTouch(){
  return (
    <div className="Blog-head">
      <div className="Intrest">
        <div className="music-title">MUSIC</div> <hr/>
        <div className="spotify-list">
          <iframe src="https://open.spotify.com/embed/track/6YNl1rXbhKvmbMrw9cp3RQ?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/05MiCwjurj3W0u8872CRiw?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/2r32XiAWtZbT3eLUvf4pag?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/3CV247i47dzbOrrn4DXzUg?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/0pYMa1j9R24qW50J4yc0X3?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe src="https://open.spotify.com/embed/track/1NfNC8BKQSbWyhwZgLvrfY?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className="Travelling">
        <div className="travelling-title">Travelling</div><hr/>
        <Travel/>
      </div>
    </div>
  );
}
