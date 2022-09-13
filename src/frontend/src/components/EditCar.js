import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        fuel: '',
        price: ''
    });

    // Open the modal form and update the car state
    const handleClickOpen = () => {
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            fuel: props.data.row.fuel,
            price: props.data.row.price
        })
        setOpen(true);
    }

    // Close the modal form 
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({
            ...car,
            [event.target.name]: event.target.value
        });
    }

    // Update car and close modal form 
    const handleSave = () => {
        props.updateCar(car, props.data.id);
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <input placeholder="Brand" name="brand"
                        value={car.brand} onChange={handleChange} /><br />
                    <input placeholder="Model" name="model"
                        value={car.model} onChange={handleChange} /><br />
                    <input placeholder="Color" name="color"
                        value={car.color} onChange={handleChange} /><br />
                    <input placeholder="Year" name="year"
                        value={car.year} onChange={handleChange} /><br />
                    <input placeholder="Price" name="price"
                        value={car.price} onChange={handleChange} /><br />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;
