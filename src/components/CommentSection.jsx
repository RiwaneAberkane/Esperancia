import { useState } from "react";
import "./CommentSection.css";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";

const CommentSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const comments = [
        "Aristotle maintained the sharp distinction between science and the practical knowledge of artisans, treating theoretical speculation as the highest type of human activity.",
        "Science and everyday craftsmanship are two separate domains, each with its own value and significance.",
        "Knowledge is divided between pure speculation and applied wisdom. Both contribute uniquely to progress, one through understanding, the other through doing."
    ];

    const images = [image1, image2, image3];

    const profiles = [
        { name: "John Doe", profession: "Software Engineer" },
        { name: "Jane Smith", profession: "Graphic Designer" },
        { name: "Michael Brown", profession: "Marketing Specialist" }
    ];

    return (
        <div className="containerComment">
            <h3>What People Say</h3>
            <div className="comment-box selected">
                {comments[selectedIndex]}
                <div className="image-container">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`image-wrapper ${selectedIndex === index ? "active" : ""}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={src} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Profil sous le commentaire */}
            <div className="profile-info">
                <h4>{profiles[selectedIndex].name}</h4>
                <p>{profiles[selectedIndex].profession}</p>
            </div>
        </div>
    );
};

export default CommentSection;
