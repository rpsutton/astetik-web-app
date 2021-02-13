import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./Section.scss";

function DisplaySection(props) {
  const {
    bg,
    textColor,
    bgImage,
    bgImageOpacity,
    bgImageRepeat,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <section
        style={{height: props.height}}
        className={
        "SectionComponent py-5 position-relative d-flex justify-content-center align-items-center" +
        (props.bg ? ` bg-${props.bg}` : "") +
        (props.textColor ? ` text-${props.textColor}` : "") +
        (className ? ` ${className}` : "")}
      {...otherProps}
    >
      {bgImage && (
        <BackgroundImage
          image={bgImage}
          opacity={bgImageOpacity}
          repeat={bgImageRepeat}
        />
      )}

      <div
        className={
          "" +
          (["md", "lg"].includes(props.size) ? " py-md-5" : "") +
          (props.size === "lg" ? " my-md-5" : "")
        }
      >
        {props.children}
      </div>
    </section>
  );
}

export default DisplaySection;
