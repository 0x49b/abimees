package org.thievent.abimees.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.lang.Nullable;
import org.thievent.abimees.models.ShirtSize;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "abimees_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ToString.Exclude
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;
    private String firstName;

    private String lastName;

    @Nullable
    private ShirtSize shirtSize;
    @Nullable
    private Date plannedArrivalDate;
    @Nullable
    private Date plannedDepartureDate;

}
