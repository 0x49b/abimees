package org.thievent.abimees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.thievent.abimees.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
