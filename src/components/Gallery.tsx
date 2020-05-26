/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { chunk, sum } from 'lodash';
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
import { Box } from 'rebass';

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      // transform: "scale(1.5)",
      filter: "saturate(1.2)",
      opacity: 0.7 
    },
  },
};

type Props = {
  images: {
    id: string;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    originalImg: string;
    caption: string;
  }[];
  itemsPerRow?: number[];
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
  const itemsPerRowByBreakpoints = [1, 2, 3, 4, 5, 6, 7, 8];
  const images = useGalleryGalaxy();
  const aspectRatios = images.map(image => image.fluid.aspectRatio);
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);
  
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        // Sum aspect ratios of images in the given row
        sum(rowAspectRatios),
      ),
  );
  return (
    <div>
      {images.map((image, index) => (
        <Box
          width={rowAspectRatioSumsByBreakpoints.map(
            // Return a value for each breakpoint
            (rowAspectRatioSums, j) => {
              // Find out which row the image is in and get its aspect ratio sum
              const rowIndex = Math.floor(index / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
              return `${(image.fluid.aspectRatio / rowAspectRatioSum) * 100}%`;
            },
          )}
          onClick={() => {
            setShowImageIndex(index);
          }}
          css={{ display: 'inline-block' }}
        >
          <Img alt={image.name} fluid={image.fluid} {...imgStyles}/>
        </Box>
      ))}
      
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          alt={images[showImageIndex].name}
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
