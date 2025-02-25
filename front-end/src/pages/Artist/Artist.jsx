import React from "react";
import { Link, useParams } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Artist.css";
import SongList from "../../components/SongList/SongList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj) => currentSongsObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom,var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </div>
  );
};

export default Artist;
