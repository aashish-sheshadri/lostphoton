/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { Lightbox } from "react-modal-image";
import useGalleryDefault  from "../hooks/useGalleryDefault";
import useGalleryGalaxy  from "../hooks/useGalleryGalaxy";
import useGalleryLandscapes  from "../hooks/useGalleryLandscapes";
import useGalleryMilkyway  from "../hooks/useGalleryMilkyway";
import useGalleryNebulae  from "../hooks/useGalleryNebulae";
import useGallerySolarSystem  from "../hooks/useGallerySolarSystem";
import useGalleryStarClusters  from "../hooks/useGalleryStarClusters";
import Grid from "../elements/Grid";
import Tile from "../elements/Tile";

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
};

export const GalleryDefault = () => {
  const images = useGalleryDefault();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};


export const GalleryGalaxy = () => {
  const images = useGalleryGalaxy();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export const GalleryMilkyway = () => {
  const images = useGalleryMilkyway();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export const GalleryLandscapes = () => {
  const images = useGalleryLandscapes();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export const GalleryNebulae = () => {
  const images = useGalleryNebulae();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export const GallerySolarSystem = () => {
  const images = useGallerySolarSystem();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export const GalleryStarClusters = () => {
  const images = useGalleryStarClusters();
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};
