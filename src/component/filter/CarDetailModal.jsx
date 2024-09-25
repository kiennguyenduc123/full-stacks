import React from 'react';
import './CarDetailModal.css'; // Tạo file CSS cho modal

const CarDetailModal = ({ isOpen, cars, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <span className="closeButton" onClick={onClose}>×</span>
                {cars.length > 0 ? (
                    cars.map(car => (
                        <div key={car.id} className="carDetail">
                            <img src={car.image} alt={car.name} />
                            <h2>{car.name}</h2>
                            <p>Price: {car.price}</p>
                            <p>Location: {car.place}</p>
                            <p>Year: {car.year}</p>
                            <p>Style: {car.style}</p>
                            <p>Energy: {car.energy}</p>
                            <p>Seats: {car.seat}</p>
                            <p>Brand: {car.brand}</p>
                            <p>Transmission: {car.transmission}</p>
                            <p>Body Type: {car.bodyType}</p>
                            <p>Color: {car.color}</p>
                            <p>Mileage: {car.mileage}</p>
                            <p>Power: {car.power}</p>
                            <p>Dimensions: {car.length} x {car.width} x {car.height}</p>
                            <p>Cargo Volume: {car.cargoVolume}</p>
                            <h3>Features:</h3>
                            <ul>
                                {car.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No cars found.</p>
                )}
            </div>
        </div>
    );
};

export default CarDetailModal;
