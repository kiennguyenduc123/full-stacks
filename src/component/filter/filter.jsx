import './filter.css';
import Year from './year.jsx';
import Brand from './brand.jsx';
import Body from './body.jsx';
import Transmission from './transmission.jsx';
import Fuel from './fuel.jsx';
import Drivetrain from './drivetrain.jsx';
import Capacity from './capacity.jsx';
import Color from './color.jsx';
import FilterRange from './filterRange/filterRange.jsx';
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import Data from '../../data'; // Import dữ liệu
import CarDetailModal from './CarDetailModal.jsx';

const Filter = () => {
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [body, setBody] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuel, setFuel] = useState('');
    const [drivetrain, setDrivetrain] = useState('');
    const [capacity, setCapacity] = useState('');
    const [color, setColor] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [foundCars, setFoundCars] = useState(null);

    const handleSearch = () => {
        // Tìm kiếm xe dựa trên tất cả các bộ lọc
        const results = Data.filter(car => {
            return (
                (year ? car.year === year : true) &&
                (brand ? car.brand === brand : true) &&
                (body ? car.bodyType === body : true) &&
                (transmission ? car.transmission === transmission : true) &&
                (fuel ? car.energy === fuel : true) &&
                (drivetrain ? car.style === drivetrain : true) &&
                (capacity ? car.seat === capacity : true) &&
                (color ? car.color === color : true) &&
                (searchTerm ? car.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
            );
        });
        console.log('Results:', results); // Kiểm tra kết quả

        setFoundCars(results);
        setIsModalOpen(true);
    };

    const handleReset = () => {
        setYear('');
        setBrand('');
        setBody('');
        setTransmission('');
        setFuel('');
        setDrivetrain('');
        setCapacity('');
        setColor('');
        setSearchTerm('');
        setFoundCars(null);
        setIsModalOpen(false);
        console.log('Filters reset'); // Kiểm tra

    };
    return (
        <>
            <div className="filterContainer">
                <h3>Filter</h3>
                <div className="filters">
                    <div className="filterLine"></div>
                    <div className="filterSearch">
                        <CiSearch
                            style={{ fontSize: "25px", fontWeight: "bold", position: "absolute", paddingLeft: "3%" }}
                            onClick={handleSearch}
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Year setYear={setYear} />
                    <Brand setBrand={setBrand} />
                    <Body setBody={setBody} />
                    <Transmission setTransmission={setTransmission} />
                    <Fuel setFuel={setFuel} />
                    <Drivetrain setDrivetrain={setDrivetrain} />
                    <Capacity setCapacity={setCapacity} />
                    <Color setColor={setColor} />
                </div>
                <div className="filterClass">
                    <FilterRange />
                </div>
                <div className="filtersBtn">
                    <button type="button" onClick={handleReset}><p>Reset filter</p></button>
                </div>
            </div>

            <CarDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cars={foundCars}/>
        </>
    );
};

export default Filter;
