'use client';
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../components/ProductCard';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          'https://furniture-api.fly.dev/v1/products?limit=16'
        );
        setProducts(data.data || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch furniture products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // الشاشات المتوسطة (مثل التابلت)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768, // شاشات الجوال الكبيرة
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2, // 2 في السطر و2 صفوف = 4 منتجات
        },
      },
      {
        breakpoint: 480, // شاشات الجوال الصغيرة
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2, // 2 في كل سطر
        },
      },
    ],
  };

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <section className="py-10 px-4  mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Furniture Collection
      </h2>
      <Slider ref={sliderRef} {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-2">
            <ProductCard
              image={p.image_path}
              title={p.name}
              price={p.discount_price?.toFixed(2) || p.price.toFixed(2)}
              oldPrice={p.discount_price ? p.price.toFixed(2) : undefined}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-8 ">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
