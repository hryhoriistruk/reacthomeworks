import { useEffect, useState } from "react";
import { ICarWithAuthModel } from "../../models/ICarWithAuthModel";
import { carService } from "../../services/api.service";
import CarComponent from "./CarComponent";
import "./CarsComponent.css";

const CarsComponent = () => {
  const [cars, setCars] = useState<ICarWithAuthModel[]>([]);
  useEffect(() => {
    carService.getCars().then((val) => {
      setCars(val?.items || []);
    });
  }, []);

  return (
    <div>
      <ul className="carsList">
        {cars.map((car) => (
          <li key={car.id} className="carsItem">
            <CarComponent car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsComponent;
