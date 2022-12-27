package org.thievent.abimees.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.thievent.abimees.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    public Optional<User> findByEmail(String email);
}
