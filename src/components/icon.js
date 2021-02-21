import * as React from "react";
import saklamaImg from "../images/saklamaImg.png";
import packagingImg from "../images/packagingImg.png";
import recommendUsageImg from "../images/recommendUsageImg.png";
import ingredientsImg from "../images/ingredients.png";

const Icon = ({ icon }) => {
  const selectIcon = () => {
    switch (icon) {
      case "saklamaImg":
        return <img className="icon" src={saklamaImg} alt="icon" />;
        break;
      case "packagingImg":
        return <img className="icon" src={packagingImg} alt="icon" />;
        break;
      case "recommendUsageImg":
        return <img className="icon" src={recommendUsageImg} alt="icon" />;
        break;
      case "ingredientsImg":
        return <img className="icon" src={ingredientsImg} alt="icon" />;
        break;
    }
  };
  return <>{selectIcon(icon)}</>;
};

export default Icon;
