"use client";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import ProductCard from "../components/ProductCard";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    const apiURL = "https://fakestoreapi.com/products";

    axios
      .get(apiURL)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching products");
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 2300,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "white",
          border: "2px solid black",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, rows: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2, rows: 4 },
      },
    ],
  };

  if (loading) return <p className="text-center py-20">Loading products...</p>;
  if (error)
    return <p className="text-center py-20 text-red-600">Error: {error}</p>;

  return (
    <section className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">All Product</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, i) => (
            <div key={i} className="p-2">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price.toFixed(2)}
                oldPrice={(product.price * 1.1).toFixed(2)} // زيادة 10% كالسعر القديم
              />
            </div>
          ))}
        </Slider>

        <div className="flex justify-center gap-28 relative -top-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-black p-3 rounded-full hover:bg-gray-50 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            <FiArrowLeft size={15} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-black p-3 rounded-full hover:bg-gray-50 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            <FiArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
