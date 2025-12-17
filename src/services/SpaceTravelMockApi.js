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
