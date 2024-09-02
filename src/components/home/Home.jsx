import "../../style/font.css";
import pic1 from "../../image/hall_image/img1.jpg";
import pic2 from "../../image/hall_image/img2.jpg";
import pic3 from "../../image/hall_image/img3.jpg";
import pic4 from "../../image/hall_image/img4.jpg";
import pic5 from "../../image/hall_image/img5.jpg";
import pic6 from "../../image/hall_image/img6.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideshow = [pic1, pic2, pic3, pic4, pic5, pic6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshow.length);
    }, 10000); // 10 seconds per image

    return () => clearInterval(interval);
  }, [slideshow.length]);

  return (
    <>
      <section className="border-t-4 border-[#effa56] relative w-full h-screen overflow-hidden">
        {slideshow.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </section>

      <section className="px-5 border-t-4  border-[#effa56] bg-[#262e7c]">
        <div className="container mx-auto flex flex-col w-full justify-between gap-10 py-10 md:flex-row">
          {/* card-1  */}
          <div className="w-full card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://im.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Hall Provost</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          {/* card-2  */}
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Assistant Provost</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          {/* card-3  */}
          <div className="card bg-base-100  shadow-xl w-full">
            <figure className="px-10 pt-10">
              <img
                src="https://im.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Hall Manager</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
