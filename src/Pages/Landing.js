import React from "react";
import { Link } from "react-router-dom";

const KissMyLashesz = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="text-7xl font-oldlondon drop-shadow-glow text-center md:text-9xl lg:text-10xl">
          kissmylashesz
        </div>
      </section>

      <section id='our-story'className="py-16 ">
        <div className="container m-auto px-4 ">
            <br />
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-lg text-center">
                <h2 className="text-4xl text-center font-bold">Our Story </h2>
              <p>
                <br/>
              Welcome to Kissmylashesz, born from our heartfelt journey and fueled
            by our unwavering dedication. As two sisters, we have wholeheartedly
            devoted ourselves to the art of enhancing natural beauty through the
            exquisite touch of lashes. Our passion for this transformative
            process has flourished over time as we tirelessly pursued our dreams
            and diligently refined our skills. <br />
            <br />
            As longtime lovers of the lash experience, we found ourselves
            constantly drawn to the captivating effect it had on our own
            confidence and appearance. We reveled in how seamlessly it brought
            our looks together and simplified our daily routines. It was during
            these moments that the seed of an idea was planted – why not learn
            to do it ourselves? Driven by curiosity and fueled by our shared
            ambition, we embarked on an exciting adventure of self-discovery and
            skill acquisition. We immersed ourselves in the world of lash
            extensions, determined to master the artistry and bring our vision
            to life. Countless hours of practice, training, and unwavering
            dedication allowed us to unlock the secrets behind achieving
            flawlessly stunning lashes. <br />
            <br />
            At KissMyLashesz, we believe that beauty should be effortless,
            empowering, and deeply personal. We meticulously tailor each lash
            style to suit your unique features, ensuring a seamless blend that
            enhances your natural allure. Our dedication to using only the
            highest quality products and our acute attention to detail guarantee
            a result that surpasses expectations. But beyond providing
            exceptional lash services, we strive to create an extraordinary
            experience for our clients. Step into our studio and discover a
            sanctuary of warmth and connection, where you are valued, cared for,
            and truly understood. We are passionate about building genuine
            relationships and uplifting spirits, leaving you feeling pampered,
            confident, and beautiful inside and out.
                </p>
              </div>

          <div className="flex flex-col items-center justify-end mt-8">
       
            <img
              className="max-w-full h-auto rounded-lg mb-4 custom-height custom-width"
              src="/images/IMG_3516.jpg"
              alt="jenny"
            />
            <br />
            <img
              className="max-w-full h-auto rounded-lg mb-4 custom-height custom-width "
              src="/images/IMG_3517.jpg"
              alt="cindy"
            />
          </div>
        </div>
        </div>
        <br/>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
        <h2 className='text-4xl text-center font-bold'> Our Work </h2>
        <p>Welcome to Kissmylashesz, born from our heartfelt journey and fueled
            by our unwavering dedication. As two sisters, we have wholeheartedly
            devoted ourselves to the art of enhancing natural beauty through the
            exquisite touch of lashes. Our passion for this transformative
            process has flourished over time as we tirelessly pursued our dreams
            and diligently refined our skills. <br />
            <br />
            As longtime lovers of the lash experience, we found ourselves
            constantly drawn to the captivating effect it had on our own
            confidence and appearance. We reveled in how seamlessly it brought
            our looks together and simplified our daily routines. It was during
            these moments that the seed of an idea was planted – why not learn
            to do it ourselves? Driven by curiosity and fueled by our shared
            ambition, we embarked on an exciting adventure of self-discovery and
            skill acquisition. We immersed ourselves in the world of lash
            extensions, determined to master the artistry and bring our vision
            to life. Countless hours of practice, training, and unwavering
            dedication allowed us to unlock the secrets behind achieving
            flawlessly stunning lashes. <br />
            <br />
            At KissMyLashesz, we believe that beauty should be effortless,
            empowering, and deeply personal. We meticulously tailor each lash
            style to suit your unique features, ensuring a seamless blend that
            enhances your natural allure. Our dedication to using only the
            highest quality products and our acute attention to detail guarantee
            a result that surpasses expectations. But beyond providing
            exceptional lash services, we strive to create an extraordinary
            experience for our clients. Step into our studio and discover a
            sanctuary of warmth and connection, where you are valued, cared for,
            and truly understood. We are passionate about building genuine
            relationships and uplifting spirits, leaving you feeling pampered,
            confident, and beautiful inside and out.
            </p>
        </div>
       
      </section>
    </>
  );
};

export default KissMyLashesz;