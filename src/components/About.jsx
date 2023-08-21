import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>How Can Vega Help You Achieve Your Fitness Goals with Healthy and Delicious Meals?</h3>
            <p>
            If you are looking for a fitness restaurant that combines great food with great service, look no further than Vega. We are a family-owned business that has been serving New York for over 20 years. We specialize in creating meals that are satisfying and healthy, using only natural and organic ingredients. You can enjoy our dishes in our cozy and inviting restaurant, or order online and have them delivered to your door. Whatever you choose, we guarantee that you will love Vega
            </p>
            <p>
            At Vega, we believe that eating well should not be boring or difficult. That’s why we created a fitness restaurant that offers a variety of dishes that are fresh, tasty, and nutritious. You can choose from our ready-made meals, or create your own customized menu based on your preferences and needs. No matter what you order, you can be sure that it is made with high-quality ingredients and prepared with care. Try Vega today and see how good food can make you feel.
            </p>
            <a href="#" className="btn">
              Explore your food
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
