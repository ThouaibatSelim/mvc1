-- Base de données
CREATE DATABASE chainetv;

-- Equipe
CREATE TABLE equipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom VARCHAR(200), prenom VARCHAR(200), poste VARCHAR(255));

ALTER TABLE equipe RENAME COLUMN nom to prenom_;

ALTER TABLE equipe RENAME COLUMN prenom to nom;

ALTER TABLE equipe RENAME COLUMN prenom_ to prenom;

INSERT INTO equipe (prenom, nom, poste) VALUES ("Thouaïbat", "Sélim", "Directrice de la chaîne");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Abdourahim", "Madi", "Chef d’émission");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Salimati", "Anfani", "Programmeuse d’émission");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Djamila", "Saïd Ali", "Caméraman");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Ahmed", "Baco", "Caméraman");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Bacar", "Soidri", "Ingénieur du son");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Youssouf", "Chamsudine", "Réalisateur");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Ramatou", "Soufiani", "Présentatrice d’émission");

INSERT INTO equipe (prenom, nom, poste) VALUES ("Malik", "Issa", "Présentateur d’émission");

-- Programme
CREATE TABLE programmediffusion (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nom_programme VARCHAR(200), genre VARCHAR(200), heure_diffusion TIME);

ALTER TABLE programmediffusion ADD jour_diffusion VARCHAR(200);

ALTER TABLE programmediffusion ADD frequence_diffusion VARCHAR(255);

ALTER TABLE programmediffusion ADD description VARCHAR(255);

ALTER TABLE programmediffusion ADD nouveaute BOOLEAN;

ALTER TABLE programmediffusion ADD lien_video VARCHAR(255);

--Lundi

ALTER TABLE programmediffusion RENAME COLUMN genre to type_programme;

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Halé Halélé", "Emission Culturelle", "Lundi", "08:00:00", "1 fois par semaine", "Contes & Légendes : Les anciens racontent les histoires qui ont bercé Mayotte.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Maoré Ya Jana Na Ya Lewo", "Documentaire", "Lundi et Vendredi", "10:00:00", "2 fois par semaine", "Un documentaire sur l’évolution des traditions et des modes de vie", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Narilé", "Emission Culinaire", "5/7", "12:00:00", "Du Lundi au Vendredi", "Préparons ensemble des plats traditionnels mahorais qui vont vous ravir", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("M'maoré", "Emission Culturelle", "Lundi", "15:00:00", "1 fois par mois", "Poésie & Chants traditionnels Les plus beaux poèmes et chants mahorais récités par des artistes locaux.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Le Grand Débat Culturel", "Débat", "Lundi et Jeudi", "20:30:00", "2 fois par semaine", "Discussion sur la préservation du patrimoine culturel mahorais.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

--Mardi

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Kawéni Art", "Emission Culturelle", "Mardi", "07:30:00", "1 fois par semaine", "Le Tressage en Feuilles de Cocotier: Les techniques ancestrales pour fabriquer paniers et chapeaux.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Marashi ya Maoré", "Emission Culturelle", "Mardi", "11:00:00", "1 fois par semaine", " Secrets de Fabrication: Découverte des plantes aromatiques et du processus de distillation du Ylang-Ylang.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Artisans de l'île", "Emission Culturelle", "Mardi", "16:30:00", "1 fois par semaine", "Portraits d’artisans locaux mettant en valeur leur savoir-faire et leur passion.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Histoires de Mélodies:", "Musique/Danse", "Mardi", "20:00:00", "1 fois par semaine", "Analyse des origines et des influences de la musique mahoraise.", TRUE, "https://www.youtube.com/watch?v=RxekCz-CwQg");


--Mercredi
INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Apprentis M'biwi", "Musique/Danse", "Mercredi et Samedi", "08:00:00", "2 fois par semaine", "Portraits d’artisans locaux mettant en valeur leur savoir-faire et leur passion.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");

INSERT INTO programmediffusion (nom_programme, type_programme, jour_diffusion, heure_diffusion, frequence_diffusion, description, nouveaute, lien_video) VALUES ("Battle de Chigoma", "Musique/Danse", "Mercredi", "14:00:00", "1 fois par semaine", "Portraits d’artisans locaux mettant en valeur leur savoir-faire et leur passion.", FALSE, "https://www.youtube.com/watch?v=RxekCz-CwQg");













-- Utilisateur 
CREATE TABLE utilisateur (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, prenom_utilisateur VARCHAR(200), nom_utilisateur VARCHAR(200), adressemail VARCHAR(200), motdepasse VARCHAR(200));

ALTER TABLE utilisateur RENAME COLUMN adressemail to email;
