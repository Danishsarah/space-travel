import { nanoid } from "nanoid";

class SpaceTravelMockApi {
  static MOCK_DB = {
    planets: [
      {
        id: 0,
        name: "Mercury",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Reprocessed_Mariner_10_image_of_Mercury.jpg"
      },
      {
        id: 1,
        name: "Venus",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/800px-Venus_globe.jpg"
      },
      {
        id: 2,
        name: "Earth",
        currentPopulation: 100000,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg"
      },
      {
        id: 3,
        name: "Mars",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg"
      },
      {
        id: 4,
        name: "Jupiter",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png"
      },
      {
        id: 5,
        name: "Saturn",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/8423_20181_1saturn2016.jpg/1920px-8423_20181_1saturn2016.jpg"
      },
      {
        id: 6,
        name: "Uranus",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/800px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"
      },
      {
        id: 7,
        name: "Neptune",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg"
      },
      {
        id: 8,
        name: "Tatooine",
        currentPopulation: 200000,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
      },
      {
        id: 9,
        name: "Naboo",
        currentPopulation: 4500000000,
        pictureUrl:
          "https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png"
      },
      {
        id: 10,
        name: "Coruscant",
        currentPopulation: 1000000000000,
        pictureUrl:
          "https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg"
      },
      {
        id: 11,
        name: "Hoth",
        currentPopulation: 0,
        pictureUrl:
          "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png"
      },
      {
        id: 12,
        name: "Endor",
        currentPopulation: 30000000,
        pictureUrl:
          "https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_FFGRebellion.png"
      },
      {
        id: 13,
        name: "Mustafar",
        currentPopulation: 20000,
        pictureUrl:
          "https://static.wikia.nocookie.net/starwars/images/3/32/Mustafar.jpg"
      }
    ],
    spacecrafts: [
      {
        id: "prispax",
        name: "Prispax",
        capacity: 10000,
        description:
          "Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
          "Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
          "Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
        pictureUrl: null,
        currentLocation: 2
      },
      {
        id: "falcon-mk1",
        name: "Millennium Falcon",
        capacity: 6,
        description:
          "The legendary Millennium Falcon is a modified Corellian freighter that has made a name for itself across the galaxy. Don't judge her by her appearance—this ship has the heart of a champion. Capable of hyperdrive speeds that rival military cruisers, the Falcon is equipped with quad laser cannons, a deflector shield generator, and an advanced AI-assisted navigation system. Her quick reflexes and incredible maneuverability make her the perfect escape vessel, and she's proven her worth in countless dangerous missions. The captain's seat has seen pilots of legendary skill, and she remains one of the most iconic ships ever built.",
        pictureUrl: null,
        currentLocation: 1
      },
      {
        id: "enterprise-d",
        name: "USS Enterprise-D",
        capacity: 1014,
        description:
          "The USS Enterprise-D is the flagship of the United Federation of Planets. This Galaxy-class starship represents the pinnacle of Starfleet engineering and diplomatic innovation. Equipped with state-of-the-art warp drives capable of Warp 9.6, advanced sensor arrays, and a comprehensive arsenal of photon torpedoes and phaser banks, the Enterprise-D is built for both exploration and defense. The ship features sophisticated computer systems, holodeck technology for recreation and training, and luxurious facilities that make deep space exploration comfortable for its diverse crew of over 1,000. The Enterprise-D has participated in countless historic first contacts and diplomatic missions, serving as a beacon of hope and unity across the galaxy.",
        pictureUrl: null,
        currentLocation: 3
      },
      {
        id: "xwing-red5",
        name: "X-Wing Starfighter (Red Five)",
        capacity: 1,
        description:
          "The T-65 X-wing starfighter is the backbone of the Rebel Alliance fleet. Famous for its distinctive S-foils that split into an 'X' formation during combat, this versatile fighter is equipped with four powerful laser cannons, proton torpedo launchers, and deflector shields. The iconic Red Five was piloted by Luke Skywalker during the Battle of Yavin, where it delivered the critical shot that destroyed the Death Star. With its reliable hyperdrive, astromech droid socket, and perfect balance of speed and firepower, the X-wing represents hope and freedom across the galaxy.",
        pictureUrl: null,
        currentLocation: 4
      },
      {
        id: "awing-green",
        name: "A-Wing Interceptor",
        capacity: 1,
        description:
          "The RZ-1 A-wing interceptor is the fastest starfighter in the Rebel Alliance arsenal. Built for speed and maneuverability, this sleek wedge-shaped craft can outrun almost any Imperial fighter. Armed with twin rotating laser cannons and concussion missiles, the A-wing excels at hit-and-run tactics and reconnaissance missions. Despite its light armor, skilled pilots use its incredible agility to evade enemy fire. The A-wing played a crucial role in the Battle of Endor, proving that speed and precision can overcome brute force.",
        pictureUrl: null,
        currentLocation: 6
      },
      {
        id: "ywing-gold",
        name: "Y-Wing Bomber",
        capacity: 2,
        description:
          "The BTL Y-wing starfighter is a rugged workhorse that has served the Republic and Rebel Alliance for decades. This ion cannon and proton bomb-equipped bomber is built for sustained assaults on capital ships and ground installations. While not as fast or agile as other fighters, the Y-wing's heavy shielding, dual ion cannons, and massive payload make it devastatingly effective in the right hands. Its exposed engine systems and battle-worn appearance mask a vessel that has won countless victories through sheer determination and firepower.",
        pictureUrl: null,
        currentLocation: 5
      },
      {
        id: "tie-fighter-sith",
        name: "TIE Fighter",
        capacity: 1,
        description:
          "The Twin Ion Engine (TIE) fighter is the Empire's signature starfighter, recognized by its distinctive hexagonal wings and spine-chilling engine scream. Mass-produced for overwhelming numerical superiority, TIE fighters sacrifice shields and hyperdrive for raw speed and maneuverability. Armed with twin laser cannons, these fighters rely on Imperial doctrine: swarm tactics and expendable pilots. The absence of life support systems keeps them lightweight and fast, embodying the Empire's ruthless efficiency and disregard for individual life.",
        pictureUrl: null,
        currentLocation: 7
      },
      {
        id: "tie-interceptor",
        name: "TIE Interceptor",
        capacity: 1,
        description:
          "The TIE/IN Interceptor represents the Empire's answer to Rebel starfighter superiority. Faster and more maneuverable than the standard TIE fighter, the Interceptor features bent solar collection panels and four laser cannons for increased firepower. Reserved for elite Imperial pilots, these deadly craft combine the TIE's signature speed with enhanced combat capability. The Interceptor's aggressive design and superior performance make it a feared opponent, capable of hunting down and eliminating even the most skilled Rebel pilots.",
        pictureUrl: null,
        currentLocation: 0
      },
      {
        id: "tie-advanced-vader",
        name: "TIE Advanced x1 (Darth Vader)",
        capacity: 1,
        description:
          "Darth Vader's personal TIE Advanced x1 represents the pinnacle of Imperial fighter technology. Unlike standard TIE fighters, this prototype features deflector shields, a hyperdrive, and reinforced hull plating. Armed with heavy laser cannons and cluster missiles, the Advanced x1 combines overwhelming firepower with the protection and range that standard TIEs lack. Vader's mastery of the Force combined with this superior craft makes him an unstoppable force in space combat, capable of single-handedly turning the tide of battle.",
        pictureUrl: null,
        currentLocation: 7
      }
    ]
  };
  static MOCK_DB_KEY = "MOCK_DB";

  static prepareResponse() {
    return {
      isError: false,
      data: null
    };
  }

  static wait(duration = 1000) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  static getMockDb() {
    let mockDb = localStorage.getItem(SpaceTravelMockApi.MOCK_DB_KEY);

    if (!mockDb) {
      localStorage.setItem(
        SpaceTravelMockApi.MOCK_DB_KEY,
        JSON.stringify(SpaceTravelMockApi.MOCK_DB)
      );
      mockDb = SpaceTravelMockApi.MOCK_DB;
    } else {
      mockDb = JSON.parse(mockDb);
    }

    return mockDb;
  }

  static setMockDb(mockDb) {
    localStorage.setItem(
      SpaceTravelMockApi.MOCK_DB_KEY,
      JSON.stringify(mockDb)
    );
  }

  static async getPlanets() {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();
      response.data = mockDb.planets;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getSpacecrafts() {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();
      response.data = mockDb.spacecrafts;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getSpacecraftById({ id }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === id) {
          response.data = spacecraft;
          break;
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async buildSpacecraft({
    name,
    capacity,
    description,
    pictureUrl = undefined
  }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const spacecraft = {
        id: nanoid(),
        name,
        capacity,
        description,
        pictureUrl,
        currentLocation: 2
      };

      const mockDb = SpaceTravelMockApi.getMockDb();
      mockDb.spacecrafts.push(spacecraft);
      SpaceTravelMockApi.setMockDb(mockDb);
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async destroySpacecraftById({ id }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === id) {
          mockDb.spacecrafts.splice(i, 1);
          SpaceTravelMockApi.setMockDb(mockDb);
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async sendSpacecraftToPlanet({ spacecraftId, targetPlanetId }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === spacecraftId) {
          if (spacecraft.currentLocation === targetPlanetId) {
            throw new Error("The spacecraft is already on this planet!");
          }

          let transferredCapacity = spacecraft.capacity;

          for (const planet of mockDb.planets) {
            if (planet.id === spacecraft.currentLocation) {
              if (planet.currentPopulation < transferredCapacity) {
                transferredCapacity = planet.currentPopulation;
              }

              planet.currentPopulation -= transferredCapacity;
            }
          }

          for (const planet of mockDb.planets) {
            if (planet.id === targetPlanetId) {
              planet.currentPopulation += transferredCapacity;
            }
          }

          spacecraft.currentLocation = targetPlanetId;
          SpaceTravelMockApi.setMockDb(mockDb);
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }
}

export default SpaceTravelMockApi;
