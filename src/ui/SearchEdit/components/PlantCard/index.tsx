import { useHistory } from "react-router-dom";
import editIcon from "../../../../assets/images/Global/edit.svg";
import deleteIcon from "../../../../assets/images/Global/delete.svg";

import api from '../../../../services/axios/api';

type PlantCardProps = {
  id: string;
  popularName: string;
  scientificName: string;
  plantImage?: any;
  handleDeletePlant: (id: string) => void;
};

export function PlantCard({
  id,
  popularName,
  scientificName,
  plantImage,
  handleDeletePlant
}: PlantCardProps) {
  const history = useHistory();

  const handleGoEditPlant = (id: string) => {
    history.push(`/edit/${id}`);
  };

  return (
    <div className="searched-plant">
      <img src={plantImage} alt="" />
      <div className="plant-info">
        <strong>{popularName}</strong>
        <span>{scientificName}</span>
      </div>
      <div className="buttons">
        <button className="edit-button" onClick={() => handleGoEditPlant(id)}>
          <img src={editIcon} alt="Botão de editar" />
        </button>
        <button className="delete-button" onClick={() => handleDeletePlant(id)}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6562 6.46875H12.375C12.5297 6.46875 12.6562 6.34219 12.6562 6.1875V6.46875H23.3438V6.1875C23.3438 6.34219 23.4703 6.46875 23.625 6.46875H23.3438V9H25.875V6.1875C25.875 4.94648 24.866 3.9375 23.625 3.9375H12.375C11.134 3.9375 10.125 4.94648 10.125 6.1875V9H12.6562V6.46875ZM30.375 9H5.625C5.00273 9 4.5 9.50273 4.5 10.125V11.25C4.5 11.4047 4.62656 11.5312 4.78125 11.5312H6.90469L7.77305 29.918C7.8293 31.1168 8.8207 32.0625 10.0195 32.0625H25.9805C27.1828 32.0625 28.1707 31.1203 28.227 29.918L29.0953 11.5312H31.2188C31.3734 11.5312 31.5 11.4047 31.5 11.25V10.125C31.5 9.50273 30.9973 9 30.375 9ZM25.7098 29.5312H10.2902L9.43945 11.5312H26.5605L25.7098 29.5312Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
