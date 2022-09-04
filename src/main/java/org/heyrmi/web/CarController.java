package org.heyrmi.web;


import org.heyrmi.domain.Car;
import org.heyrmi.domain.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class CarController {
    @Autowired
    private CarRepository carRepository;

    @GetMapping(value="/cars")
    public Iterable<Car> getCars() {
        return carRepository.findAll();
    }
}