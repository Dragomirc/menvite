BEGIN;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS places CASCADE;
DROP TABLE IF EXISTS venues CASCADE;

CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
  );
  
CREATE TABLE venues(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  date VARCHAR(10) NOT NULL,
  place_id INT REFERENCES places(id) ON DELETE CASCADE,
  host VARCHAR(20) NOT NULL,
  venue_id INT REFERENCES venues(id) ON DELETE CASCADE
);


INSERT INTO places (name) VALUES ('London');
INSERT INTO places (name) VALUES ('Birmingham');

INSERT INTO venues (name) VALUES ('O2');
INSERT INTO venues (name) VALUES ('ROYAL ALBERT HALL');

INSERT INTO events (name, date, place_id, host, venue_id) VALUES ('EMINEM SHOW','2017-12-08',(SELECT id FROM places WHERE name = 'London'),'DR DRE',(SELECT id FROM venues WHERE name = 'O2'));
INSERT INTO events (name, date, place_id, host, venue_id) VALUES ('SNOOP DOG','2018-12-08',(SELECT id FROM places WHERE name = 'BIRMINGHAM'),'XZHIBIT',(SELECT id FROM venues WHERE name = 'ROYAL ALBERT HALL'));

COMMIT;
