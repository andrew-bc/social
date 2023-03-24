import React from "react";

import s from "./SocialLinksElements.module.css";
import normalizeUrl from "normalize-url";

const SocialLinksElements = (props) => {
  let result = [];
  for (let key in props.data) {
    if (props.data[key]) {
      result.push(
        <div key={key} className={s.bio__socialLink}>
          <a key={key} href={normalizeUrl(props.data[key])} target="_blank" rel="noreferrer">
            <img key={key} title={key} alt={key} src={require(`./../../../../img/social/${key}.png`)} width="25" />
          </a>
        </div>
      );
    }
  }
  return result;
};

export default SocialLinksElements;
