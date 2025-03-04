import { useState } from "react";
import "./CommentSection.css";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";

const CommentSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const comments = [
        "Aristotle maintained the sharp distinction between science and the practical knowledge of artisans, treating theoretical speculation as the highest type of human activity, practical thinking about good living as something less lofty, and the",
        "Aristotle maintained the sharp distinction between science and the practical knowledge of artisans, treating theoretical speculation as the highest type of human activity, practical thinking about good living as something less lofty, and the",
        "Aristotle maintained the sharp distinction between science and the practical knowledge of artisans, treating theoretical speculation as the highest type of human activity, practical thinking about good living as something less lofty, and the"
    ];

    const images = [image1, image2, image3];

    return (
        <div className="containerComment">
            <h3 >What People Say</h3>
            <div className={`comment-box ${selectedIndex !== null ? "selected" : ""}`}>
                {selectedIndex !== null ? comments[selectedIndex] : "Cliquez sur une image pour voir le commentaire."}
                <div className="image-container">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className={selectedIndex === index ? "active" : ""}
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentSection;