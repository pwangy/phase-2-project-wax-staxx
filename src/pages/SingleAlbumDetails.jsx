import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumsContext } from "../AlbumsProvider";

const SingleAlbumDetails = () => {
  const { id } = useParams();
  const { albums, handlePatchInCollection } = useContext(AlbumsContext);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const selectedAlbum = albums.find(album => album.id === id);
    setAlbum(selectedAlbum);
  }, [id, albums]);

  if (!album) {
    return <div>Loading...</div>;
  }

  const { artist, title, released, label, inCollection, albumCover } = album;
  const displayButton = inCollection ? "Remove from Collection" : "Add to Collection";

  return (
    <>
      <div>
        <br />
        <div>
          <img
            src={albumCover}
            alt={title}
            style={{ width: "300px", height: "300px", borderRadius: "10px" }}
          />
        </div>
      </div>
      <div id="singlealbumdetails">
        <br />
        <div>
          <mark className="singleMark">Artist:</mark> {artist}
        </div>
        <br />
        <div>
          <mark className="singleMark">Album:</mark> {title}
        </div>
        <br />
        <div>
          <mark className="singleMark">Released:</mark> {released}
        </div>
        <br />
        <div>
          <mark className="singleMark">Label:</mark> {label}
        </div>
        <br />
        <div>{inCollection}</div>
        <br />
        <button onClick={() => handlePatchInCollection(id, inCollection)}>{displayButton}</button>
      </div>
    </>
  );
}

export default SingleAlbumDetails;