-- V1.0.0 add a User Table

CREATE TABLE abimees_user
(
    id                   int SERIAL PRIMARY KEY NOT NULL,
    email                VARCHAR(255) NOT NULL,
    password             VARCHAR(999) NOT NULL,
    firstName            VARCHAR(256),
    lastName             VARCHAR(256),
    shirtSize            VARCHAR(2),
    plannedArrivalDate   DATE,
    plannedDepartureDate DATE
        UNIQUE(email)
);

CREATE TABLE client
(
    id    int SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    name  VARCHAR(256),
)