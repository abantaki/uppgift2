import React, { useEffect, useState } from "react";
import "./fifthPage.css"; // Import the CSS for the fifth page
import quotes from "../../assets/images/fifthPage/quotes.svg";

const FifthPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the API
    fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section id="fifthPageWrapper">
      <section id="fifthPage">
        <div className="fifthPageSection">
          <h1>Clients are Loving Our App</h1>
        </div>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))
        ) : (
          <p>Loading testimonials...</p>
        )}
      </section>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="fifthPageSection review">
      <img className="quote" src={quotes} alt="Quote Icon" />
      <StarRating rating={testimonial.starRating} />
      <p>{testimonial.comment}</p>
      <div className="profile">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.author}
          className="profile-img"
        />
        <div className="info">
          <h3>{testimonial.author}</h3>
          <p>{testimonial.jobRole}</p>
        </div>
      </div>
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "filled-star" : "empty-star"}>
      ★
    </span>
  ));
  return <div className="star-rating">{stars}</div>;
};

export default FifthPage;
