import Slider from "react-slick";
import "./Home.css";

import angels from "../img/angels.jpg";
import asc from "../img/Asc.jpg";
import carry from "../img/Carry.jpg";
import follow from "../img/Follow.jpg";
import gravity from "../img/Gravity.jpg";
import hold from "../img/Hold.jpg";
import something from "../img/Something.jpg";
import wherever from "../img/Wherever.jpg";

const songs = [
  { id: 1, title: "Angels", cover: angels },
  { id: 2, title: "Asc", cover: asc },
  { id: 3, title: "Carry", cover: carry },
  { id: 4, title: "Follow", cover: follow },
  { id: 5, title: "Gravity", cover: gravity },
  { id: 6, title: "Hold", cover: hold },
  { id: 7, title: "Something", cover: something },
  { id: 8, title: "Wherever", cover: wherever },
];

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="home">

      <section className="home__content">
        <aside className="sidebar">
          <button className="sidebar__item">Crear tu primera lista</button>
          <button className="sidebar__item">Explorar Podcast</button>

          <ul className="sidebar__legal">
            <li>Legal</li>
            <li>Políticas de seguridad</li>
            <li>Accesibilidad</li>
            <li>Cookies</li>
            <li>Idioma</li>
          </ul>
        </aside>

        <section className="carousel">
          <h2 className="carousel__title">Escucha algo nuevo</h2>
          <Slider {...settings}>
            {songs.map((s) => (
              <article key={s.id} className="song-card">
                <img src={s.cover} alt={s.title} className="song-card__img" />
                <p className="song-card__title">{s.title}</p>
              </article>
            ))}
          </Slider>
        </section>
      </section>
    </main>
  );
}
