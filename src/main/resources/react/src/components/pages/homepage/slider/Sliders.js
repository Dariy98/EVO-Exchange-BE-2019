import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  toySlider,
  clothesSlider,
  childSlider,
  furnitureSlider,
  shoesSlider,
  strollersSlider,
  booksSlider
} from "../../../../img/all_images_export/sliderImages";

import "./slider.scss";

const Sliders = () => {
  const DELAY = 3000;
  const PLAY_SPEED = 2000;
  const MARGIN = 22;
  const [x, setX] = useState(0);
  const [changeImage, setChangeImage] = useState(false);
  const [startMove, setStartMove] = useState(false);
  const [isImg, setIsImg] = useState([
    {
      src: toySlider,
      subtitle: "Огромный выбор",
      title: "Игрушек",
      href: "#",
      width: 290
    },
    {
      src: clothesSlider,
      subtitle: "Разнообразие детской и подростковой",
      title: "Одежды",
      href: "#",
      width: 600
    },
    {
      src: childSlider,
      subtitle: "Всё для",
      title: "Малышей",
      href: "#",
      width: 290
    },
    {
      src: furnitureSlider,
      subtitle: "Множество детской",
      title: "Мебели",
      href: "#",
      width: 290
    },
    {
      src: shoesSlider,
      subtitle: "Разнообразие детской и подростковой",
      title: "Обуви",
      href: "#",
      width: 600
    },

    {
      src: strollersSlider,
      subtitle: "Детский",
      title: "Транспорт",
      href: "#",
      width: 290
    },

    {
      src: booksSlider,
      subtitle: "Развивающие и детские",
      title: "Книги",
      href: "#",
      width: 290
    },
    {
      src: shoesSlider,
      subtitle: "Разнообразие детской и подростковой",
      title: "Обуви",
      href: "#",
      width: 600
    },
    {
      src: booksSlider,
      subtitle: "Развивающие и детские",
      title: "Книги",
      href: "#",
      width: 290
    }
  ]);

  useEffect(() => {
    if (x < 0) {
      return;
    }
    const autoPlaySpeed = setTimeout(() => {
      setX(x - (isImg[0].width + MARGIN));
      setStartMove(true);
    }, DELAY);
    return () => clearTimeout(autoPlaySpeed);
  }, [x, isImg]);

  useEffect(() => {
    if (!startMove) {
      return;
    }
    const playSpeed = setTimeout(() => {
      setStartMove(false);
      setChangeImage(true);
    }, PLAY_SPEED);
    return () => clearTimeout(playSpeed);
  }, [startMove]);

  useEffect(() => {
    if (!changeImage) {
      return;
    }

    setX(0);
    setChangeImage(false);
    const arr = [...isImg];
    const el = arr.shift();
    arr.push(el);
    setIsImg(() => arr);
  }, [changeImage, isImg, setX]);

  return (
    <div className="Home-page-slider">
      <div className="Home-page-slider__element">
        {isImg.map((image, idx) => (
          <Link
            to={image.href}
            className={"Home-page-slider__element__box"}
            style={{
              transform: `translateX(${x}px)`,
              transition: `${PLAY_SPEED}ms ease`
            }}
            key={idx + image.title}
          >
            <img
              style={{ width: image.width }}
              src={image.src}
              alt={image.title}
            />
            <span className={"Home-page-slider__element__box-subTitle"}>
              {image.subtitle}
              <br />
              <b>{image.title}</b>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
