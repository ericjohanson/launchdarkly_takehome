import React, {useEffect} from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Launch from "./Launch"
import { withLDProvider, LDProvider, withLDConsumer, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

const Gallery = props => {

  const ldClient = useLDClient();
  
  if (!ldClient) {
    return <p>Loading...</p>;
  }

  const myFlagValue = ldClient.variation('react_gallery_flag', false);

  console.log("Our first feature flag is: " + myFlagValue);
  

  

  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0 && myFlagValue === true) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
