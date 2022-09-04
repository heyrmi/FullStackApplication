package org.heyrmi.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ownerid;
    private String firstname, lastname;

    // To allow external instantiation
    public Owner() {}

    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, mappedBy="owner")
    private List<Car> cars;



    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    public Owner(String firstname, String lastname) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
