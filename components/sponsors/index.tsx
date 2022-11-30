import Sponsor from "./sponsor";

const Sponsors = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
      <Sponsor
        bgImage="/images/sponsors/disney-plus.png"
        videoLink="/videos/sponsors/disney-video.mp4"
        alt="disney"
      />
      <Sponsor
        bgImage="/images/sponsors/pixar.png"
        videoLink="/videos/sponsors/pixar-video.mp4"
        alt="pixar"
      />
      <Sponsor
        bgImage="/images/sponsors/marvel.jpg"
        videoLink="/videos/sponsors/marvel-video.mp4"
        alt="marvel"
      />
      <Sponsor
        bgImage="/images/sponsors/star-wars.png"
        videoLink="/videos/sponsors/star-wars-video.mp4"
        alt="star-wars"
      />
      <Sponsor
        bgImage="/images/sponsors/national-geographic.png"
        videoLink="/videos/sponsors/national-geographic-video.mp4"
        alt="national-geographic"
      />
      <Sponsor
        bgImage="/images/sponsors/star.png"
        videoLink="/videos/sponsors/star-video.mp4"
        alt="star"
      />
    </div>
  );
};

export default Sponsors;
