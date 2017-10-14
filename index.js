"use strict";

// raw data source: https://data.boroofnewyork.us/Recreation/Directory-of-Dog-Runs-and-Off-Leash-Areas/ipbu-mtcs/data

// converted to geoJSON using Google GeoCoding API and Mapbox Studio
// https://developers.google.com/maps/documentation/geocoding/start
// https://www.mapbox.com/mapbox-studio/

var runs = {
  features: [
    {
      type: "Feature",
      properties: {
        Notes: "68 Road & Yellowstone Boulevard; Hours: 6am to 9am only",
        city: "Forest Hills",
        boro: "Queens",
        name: "Yellowstone Park Off-Leash Area",
        state: "NY",
        address: "106-2168th Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q425",
        postalCode: "11375"
      },
      geometry: {
        coordinates: [
          -73.847939,
          40.726737
        ],
        type: "Point"
      },
      id: "0114ea3801c5eb9114e297355d7daf08"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        name: "Forest Park Dog Run",
        state: "NY",
        address: "Park Lane South &85th Street ",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q015",
        postalCode: ""
      },
      geometry: {
        coordinates: [
          -73.860162,
          40.6964
        ],
        type: "Point"
      },
      id: "01cda7d5aa2f6e3921a1d40ad587b0d1"
    },
    {
      type: "Feature",
      properties: {
        Notes: "All areas excluding the playgrounds, ballfields, and Natural Areas.",
        boro: "Brooklyn",
        name: "Marine Park Dog Run",
        state: "NY",
        address: "Fillmore Ave & Marine Parkway",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B057",
        postalCode: "11234"
      },
      geometry: {
        coordinates: [
          -73.937529,
          40.60856
        ],
        type: "Point"
      },
      id: "042f33388524d8966e1900bdae65afeb"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Springfield Gardens",
        boro: "Queens",
        name: "Springfield Park Off-Leash Area",
        state: "NY",
        address: "Springfield Blvd &147th Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q107",
        postalCode: "11413"
      },
      geometry: {
        coordinates: [
          -73.761227,
          40.659458
        ],
        type: "Point"
      },
      id: "074db3bbc87b44f64656fcbb3fd1c9fc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Alley Pond Park Off-Leash Area",
        state: "NY",
        address: "Grand Central Parkway & Kingsbury Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q001",
        postalCode: "11364"
      },
      geometry: {
        coordinates: [
          -73.740807,
          40.738591
        ],
        type: "Point"
      },
      id: "0802e97ed6636f387d3080cb618644de"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Marcy Avenue & Lafayette Avenue",
        boro: "Brooklyn",
        name: "Herbert Von King Park Off-Leash Area",
        state: "NY",
        address: "670 Lafayette Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B088",
        postalCode: "11216"
      },
      geometry: {
        coordinates: [
          -73.946515,
          40.689831
        ],
        type: "Point"
      },
      id: "09af24637c174014dcb4159d2cf60598"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Bayside",
        boro: "Queens",
        name: "Crocheron Park Off-Leash Area",
        state: "NY",
        address: "214-4134th Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q012",
        postalCode: "11361"
      },
      geometry: {
        coordinates: [
          -73.769339,
          40.771941
        ],
        type: "Point"
      },
      id: "0a87d50694f04c4fcbb94db6a1f0ce29"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Staten Island",
        name: "Ocean Breeze Park Off-Leash Area",
        state: "NY",
        address: "Nugent Ave & Quintard St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R149",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.080535,
          40.590383
        ],
        type: "Point"
      },
      id: "0d852cf56c7e8c208bca78a9db35d65a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Dyckman Fields",
        state: "NY",
        address: "Dyckman Street & Hudson River",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "M042",
        postalCode: "10452"
      },
      geometry: {
        coordinates: [
          -73.931486,
          40.870724
        ],
        type: "Point"
      },
      id: "0e120486e131340a51b293041e2cfd78"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Long Island",
        name: "Hunter's Point South Park Dog Run",
        state: "NY",
        address: "51st Ave & Center Blvd",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q471",
        postalCode: "11101"
      },
      geometry: {
        coordinates: [
          -73.959786,
          40.743094
        ],
        type: "Point"
      },
      id: "12bf5b7364184bff7a244b8bc63fb7e7"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Run is to left of Cornelia Avenue",
        boro: "Staten Island",
        name: "Wolfe's Pond Park Dog Run",
        state: "NY",
        address: "420 Cornelia Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "R031",
        postalCode: "10312"
      },
      geometry: {
        coordinates: [
          -74.188235,
          40.520195
        ],
        type: "Point"
      },
      id: "16859eacace1faf9d4b6464188cd17ad"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Palisade Avenue from West 232 Street to West 254 Street",
        boro: "Bronx",
        name: "Riverdale Park Off-Leash Area",
        state: "NY",
        address: "254 Palisade Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X142",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.919721,
          40.884098
        ],
        type: "Point"
      },
      id: "17f1c4005b4ac55c78f2b2765375de5c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at 4th Avenue and 101st Street",
        boro: "Brooklyn",
        name: "John Paul Jones Park Off-Leash Area",
        state: "NY",
        address: "101 Street Shore Pkwy",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B035",
        postalCode: "11209"
      },
      geometry: {
        coordinates: [
          -74.034091,
          40.610808
        ],
        type: "Point"
      },
      id: "17f8ebec53c612b53db0c76dabc798c2"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Flushing",
        boro: "Queens",
        name: "Flushing Meadows Corona Park Off-Leash Area",
        state: "NY",
        address: "Meridian Rd & Pacific Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q099",
        postalCode: "11355"
      },
      geometry: {
        coordinates: [
          -73.840452,
          40.743223
        ],
        type: "Point"
      },
      id: "19ba5951760adef4cd00775ed2d6d1e2"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Morningside Park Dog Run",
        state: "NY",
        address: "Morningside Avenue & West 118th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M056",
        postalCode: "10026"
      },
      geometry: {
        coordinates: [
          -73.957258,
          40.806928
        ],
        type: "Point"
      },
      id: "1bdd5d25251d4cc3c16735b1931ff94c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Fish Bridge Park Dog Run",
        state: "NY",
        address: "Dover Street & Water Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M291",
        postalCode: "10038"
      },
      geometry: {
        coordinates: [
          -74.000861,
          40.708807
        ],
        type: "Point"
      },
      id: "1df618c09f562eb87d5fe671d9720fb5"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Pier 84 at West 44th St",
        boro: "Manhattan",
        name: "Hudson River Park Dog Run (North Chelsea)",
        Url: "http: //www.hudsonriverpark.org/explore/dogrunpier84.html",
        state: "NY",
        address: "555 12th Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M",
        postalCode: "10036"
      },
      geometry: {
        coordinates: [
          -74.001556,
          40.764025
        ],
        type: "Point"
      },
      id: "209017ca0ba6c7c5c478bbd071a0aff0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "7th Avenue & 86th Street",
        boro: "Brooklyn",
        name: "Dyker Beach Park Dog Run",
        state: "NY",
        address: "900-998 86th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B028",
        postalCode: "11228"
      },
      geometry: {
        coordinates: [
          -74.020615,
          40.61811
        ],
        type: "Point"
      },
      id: "2327bc48b601243cb150c02e3b48f75c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Fort Hamilton Parkway, 7th Avenue, 73rd Street to 75th Street",
        boro: "Brooklyn",
        name: "McKinley Park Off-Leash Area",
        state: "NY",
        address: "7th Ave & 75th St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B060",
        postalCode: "11228"
      },
      geometry: {
        coordinates: [
          -74.018636,
          40.627075
        ],
        type: "Point"
      },
      id: "233a6c0b96b41ec040ffa26750fcdf78"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Fulton Park Off-Leash Area",
        state: "NY",
        address: "70 Chauncey St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B038",
        postalCode: "11223"
      },
      geometry: {
        coordinates: [
          -73.931611,
          40.679797
        ],
        type: "Point"
      },
      id: "23b93608dc1baf712680d436a563aabb"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at 92nd & Jerome Avenue. St. James closes at 9pm and opens at 7am. Therefore, the off-leash policy only applies between 7am and 9am.",
        boro: "Bronx",
        name: "St. James Park Off-Leash Area",
        state: "NY",
        address: "2550 Jerome Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X044",
        postalCode: "10468"
      },
      geometry: {
        coordinates: [
          -73.897835,
          40.865215
        ],
        type: "Point"
      },
      id: "2607281efe59c533cf3a613d80a841dd"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Though there are no enclosed dog runs, there are 23 particularly dog-friendly areas scattered throughout the Park.",
        boro: "Manhattan",
        name: "Central Park Off-Leash Area",
        state: "NY",
        address: "63rd St & Central Park West",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "M010",
        postalCode: "10023"
      },
      geometry: {
        coordinates: [
          -73.980117,
          40.77054
        ],
        type: "Point"
      },
      id: "280def70202623b3857f9377f31a3ff3"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Archery Range Field",
        boro: "Staten Island",
        name: "Willowbrook Park Off-Leash Area",
        state: "NY",
        address: "1 Eton Place",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R030",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.162258,
          40.604621
        ],
        type: "Point"
      },
      id: "2836d93ab4a8f599afba74fe51d36ed3"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Prospect Park Dog Beach",
        state: "NY",
        address: "95 Prospect Park West",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B083",
        postalCode: "11215"
      },
      geometry: {
        coordinates: [
          -73.972039,
          40.662492
        ],
        type: "Point"
      },
      id: "29e2b84ea934c11b2988403a8a905a35"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Kappock St & Independence Ave",
        boro: "Bronx",
        name: "Henry Hudson Park Off-Leash Area",
        state: "NY",
        address: "2570 Independence Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X080",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.92056,
          40.880261
        ],
        type: "Point"
      },
      id: "2b67db9574647b7d9a9d8dfb9c7d727a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Mullaly Park Off-Leash Area",
        state: "NY",
        address: "1055 Jerome Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X034",
        postalCode: "10452"
      },
      geometry: {
        coordinates: [
          -73.925441,
          40.833126
        ],
        type: "Point"
      },
      id: "2d61b24f070f9775f5e8bca6a61e880c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "at Evergreen Street",
        boro: "Staten Island",
        name: "Evergreen Park Off-Leash Area",
        state: "NY",
        address: "190 Timber Ridge Dr",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R121",
        postalCode: "10308"
      },
      geometry: {
        coordinates: [
          -74.143165,
          40.555468
        ],
        type: "Point"
      },
      id: "2de81381cc07491a3b27c2d952846ef9"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "St. Mary's Dog Run",
        state: "NY",
        address: "Cypress Ave & East143rd St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X045",
        postalCode: "10455"
      },
      geometry: {
        coordinates: [
          -73.912493,
          40.809342
        ],
        type: "Point"
      },
      id: "31a51cea8a4b126317d1e46b62dde7f1"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Amsterdam Ave & Fort George Ave",
        boro: "Manhattan",
        name: "Highbridge Park Dog Run",
        Url: "http: //www.highbridgek9club.org/",
        state: "NY",
        address: "2682-2698 Amsterdam Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M037",
        postalCode: "10040"
      },
      geometry: {
        coordinates: [
          -73.92513,
          40.856006
        ],
        type: "Point"
      },
      id: "32f19fa60f6a09ed3b3871bc0568c14c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "66th St",
        boro: "Brooklyn",
        name: "Leif Ericson Park Off-Leash Area",
        state: "NY",
        address: "67th Street and7th Avenue",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B052",
        postalCode: "11220"
      },
      geometry: {
        coordinates: [
          -74.016434,
          40.63308
        ],
        type: "Point"
      },
      id: "330b34d577b48ee4a08b392394329258"
    },
    {
      type: "Feature",
      properties: {
        Notes: "The dog run at Pelham Bay Park is close to Watt Avenue and Middletown Road.  Both streets merge at the entrance to the parking lot on Middletown Road. The dog run is about 100 yards east of that point.",
        boro: "Bronx",
        name: "Pelham Bay Park Off-Leash Area",
        Url: "http://nycgovparks.org/parks/X039/map/pelhambay_dogonleasharea.pdf",
        state: "NY",
        address: "Watt Ave & Middletown Road",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X039",
        postalCode: "10465"
      },
      geometry: {
        coordinates: [
          -73.821018,
          40.850568
        ],
        type: "Point"
      },
      id: "3935a16895e84ce4b59b40d5939b5864"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at 5th Avenue, Waverly Place, West4th Street, between McDougal & Thompson streets, south side of thepark (behind building)",
        boro: "Manhattan",
        name: "Washington Square Park Dog Run",
        state: "NY",
        address: "59 Washington Square West",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M098",
        postalCode: "10012"
      },
      geometry: {
        coordinates: [
          -73.999533,
          40.731149
        ],
        type: "Point"
      },
      id: "3a2abd1a70e28a2964f14e97b827cd89"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Long Island",
        name: "Queensbridge Park Off-Leash Area",
        state: "NY",
        address: "Vernon Blvd & 41st Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q104",
        postalCode: "11101"
      },
      geometry: {
        coordinates: [
          -73.947299,
          40.756439
        ],
        type: "Point"
      },
      id: "3b5385daf2579119b06ef0468425ee08"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Field at the end of the trail bordered by Prospect Avenue, Sailors Snug Harbor Cemetery, and the pond.",
        boro: "Staten Island",
        name: "Allison Park Off-Leash Area",
        state: "NY",
        address: "406 Prospect Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R052",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.101381,
          40.638456
        ],
        type: "Point"
      },
      id: "3c39f0f13ad8541bd19f3c69454a6e08"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at lawn area beyond ballfield",
        boro: "Staten Island",
        name: "Father Macris Park Off-Leash Area",
        state: "NY",
        address: "Lamberts Lane & Fahy Avenue",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R075A",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.163584,
          40.615995
        ],
        type: "Point"
      },
      id: "3c4281ea149b9e7c3a41155713ee936f"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Williamsbridge Oval Dog Run",
        state: "NY",
        address: "3225 Reservoir Oval East",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X104",
        postalCode: "10467"
      },
      geometry: {
        coordinates: [
          -73.878584,
          40.876644
        ],
        type: "Point"
      },
      id: "3dfe86d699cedfc7e4ef4fe79bfabdfa"
    },
    {
      type: "Feature",
      properties: {
        Notes: "East New York Avenue",
        boro: "Brooklyn",
        name: "Lincoln Terrace Park Off-Leash Area",
        state: "NY",
        address: "Eastern Parkway & Buffalo Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B054",
        postalCode: "11213"
      },
      geometry: {
        coordinates: [
          -73.9256,
          40.668465
        ],
        type: "Point"
      },
      id: "3e8e66ba7c4d265600fa89b9fc990910"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Middle Village",
        boro: "Queens",
        name: "Juniper Valley Park Off-Leash Area",
        state: "NY",
        address: "Juniper Blvd N &80th St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q102",
        postalCode: "11379"
      },
      geometry: {
        coordinates: [
          -73.876443,
          40.721561
        ],
        type: "Point"
      },
      id: "419ba3f6707e4ce525173f5c936687bc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Leroy Street at the northeast corner of Pier40",
        boro: "Manhattan",
        name: "Leroy Street Dog Park",
        Url: "http: //www.hudsonriverpark.org/explore/dogrunleroyst.html",
        state: "Riverside Drive & West 72nd St",
        address: "353 West St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M",
        postalCode: "10014"
      },
      geometry: {
        coordinates: [
          -74.012699,
          40.729562
        ],
        type: "Point"
      },
      id: "4242840d402ae98ad3b4a93be09ed8ad"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Fresh Meadows",
        name: "Cunningham Park Dog Run",
        state: "NY",
        address: "193rd St & Radnor Road",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q021",
        postalCode: "11366"
      },
      geometry: {
        coordinates: [
          -73.775547,
          40.725959
        ],
        type: "Point"
      },
      id: "44c92c20e7d951eb8d689b75f5a518f3"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Theodore Roosevelt Park Dog Run",
        state: "NY",
        address: "Central Park West & West81st Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M053",
        postalCode: "10024"
      },
      geometry: {
        coordinates: [
          -73.97171,
          40.782045
        ],
        type: "Point"
      },
      id: "46cdd2f7c033f1c32339246a96d4e387"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Woodside",
        boro: "Queens",
        name: "Sherry Park Dog Run",
        state: "NY",
        address: "Queens Boulevard & 65 Place",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q341C",
        postalCode: "11377"
      },
      geometry: {
        coordinates: [
          -73.898894,
          40.741291
        ],
        type: "Point"
      },
      id: "4772236b3ed39e88ac76b1893dac091b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Lawn area, mid-park right side",
        boro: "Staten Island",
        name: "Arthur Von Briesen Park Off-Leash Area",
        state: "NY",
        address: "Bay St & N Rd",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R059",
        postalCode: "10305"
      },
      geometry: {
        coordinates: [
          -74.060425,
          40.606352
        ],
        type: "Point"
      },
      id: "4b15debfc7cd671cf73149a1e39f66fd"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Staten Island",
        name: "Amundsen Trail Off-Leash Area",
        state: "NY",
        address: "Buffalo St & Hylan Boulevard",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R065",
        postalCode: "10306"
      },
      geometry: {
        coordinates: [
          -74.128195,
          40.556593
        ],
        type: "Point"
      },
      id: "4da20aff8c5c88beb10c8a70294df2ae"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Tompkins Square Dog Run",
        state: "NY",
        address: "Avenue B & East 9th St",
        DogRuns_Type: "Run",
        Accessible: "Y",
        Prop_ID: "M088",
        postalCode: "10009"
      },
      geometry: {
        coordinates: [
          -73.980329,
          40.726288
        ],
        type: "Point"
      },
      id: "4e9610726fdb8a7560f9dbc1322aa936"
    },
    {
      type: "Feature",
      properties: {
        Notes: "West 232nd Street & Independence Avenue",
        boro: "Bronx",
        name: "Seton Park Dog Run",
        state: "NY",
        address: "Independence Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X201",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.911816,
          40.895782
        ],
        type: "Point"
      },
      id: "4f96d39263c760e017fadb813adb2d2c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        name: "Astoria Park Off-Leash Area",
        state: "NY",
        address: "19 19th St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q004",
        postalCode: "11105"
      },
      geometry: {
        coordinates: [
          -73.922991,
          40.776813
        ],
        type: "Point"
      },
      id: "51490d634272ec4578cacc9a0a2eae94"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Enter from Margaret Corbin Circle Eastern stairs, Broadway &196th, or Bennett Ave & Broadway",
        boro: "Manhattan",
        name: "Fort Tryon Park Dog Run",
        Url: "http: //www.ftdog.org/",
        state: "NY",
        address: "West 196th St & Broadway",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M029",
        postalCode: "10040"
      },
      geometry: {
        coordinates: [
          -73.931463,
          40.861852
        ],
        type: "Point"
      },
      id: "53115548d6bc48107358c21d0e2a4147"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Coleman Oval Park Dog Run",
        state: "NY",
        address: "Pike St & Monroe St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M019",
        postalCode: "10022"
      },
      geometry: {
        coordinates: [
          -73.992465,
          40.711753
        ],
        type: "Point"
      },
      id: "554ffc78866e8235f8e0097a4e3b937d"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Ft. Washington Park Dog Run",
        state: "NY",
        address: "165th Street & Riverside Drive",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M028",
        postalCode: "10032"
      },
      geometry: {
        coordinates: [
          -73.944695,
          40.841052
        ],
        type: "Point"
      },
      id: "55666f977173ce13364471bfec174ea1"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "East Elmhurst",
        boro: "Queens",
        name: "La Guardia Landing Lights Off-Leash Area",
        state: "NY",
        address: "25th Ave & 80th St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q393D",
        postalCode: "11370"
      },
      geometry: {
        coordinates: [
          -73.888582,
          40.762858
        ],
        type: "Point"
      },
      id: "557c91f3dfb3a1ff6c4f61a0f8e20678"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        name: "Rainey Park Off-Leash Area",
        state: "NY",
        address: "Vernon Blvd. & 34th Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q048",
        postalCode: "11106"
      },
      geometry: {
        coordinates: [
          -73.940292,
          40.765535
        ],
        type: "Point"
      },
      id: "57822e53af7012452570858a1e75a7e7"
    },
    {
      type: "Feature",
      properties: {
        name: "Fort Greene Park Off-Leash Area",
        address: "Willoughby St & Washington Park",
        boro: "Brooklyn",
        Notes: "",
        Prop_ID: "BBFG99",
        state: "NY",
        n: ""
      },
      geometry: {
        coordinates: [
          -73.974846,
          40.691517
        ],
        type: "Point"
      },
      id: "590600b729d756167d7a0d450d49bd85"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Tennyson Drive & Glover Avenue. Located at meadow area leading to beach",
        boro: "Staten Island",
        name: "Crescent Beach Park Off-Leash Area",
        state: "NY",
        address: "366 Tennyson Dr",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R135",
        postalCode: "10312"
      },
      geometry: {
        coordinates: [
          -74.148262,
          40.535506
        ],
        type: "Point"
      },
      id: "5ce3bbd73f1c4fa490ba7b2d21195aff"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "McCarren Park Dog Run",
        state: "NY",
        address: "Bayard St & Union Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B058",
        postalCode: "11211"
      },
      geometry: {
        coordinates: [
          -73.95242,
          40.718798
        ],
        type: "Point"
      },
      id: "5d38adf5276b5eed8107d5aca0b7cb43"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Rockaway Freeway & Beach84th Street",
        city: "Far Rockaway",
        boro: "Queens",
        name: "Rockaway Freeway Dog Park",
        state: "NY",
        address: "83-02 Beach Channel Dr",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q219",
        postalCode: "11693"
      },
      geometry: {
        coordinates: [
          -73.809641,
          40.590184
        ],
        type: "Point"
      },
      id: "63d75c0b8ba65f7d68eb868d4af4e935"
    },
    {
      type: "Feature",
      properties: {
        name: "Brooklyn Bridge Dog Run",
        address: "385 Plymouth St",
        boro: "Brooklyn",
        state: "NY",
        DogRuns_Type: "Off-Leash",
        Notes: "Located under the Manhattan Bridge. Go Figure.",
        Prop_ID: "BB999",
        postalCode: 11201
      },
      geometry: {
        coordinates: [
          -73.98941,
          40.704035
        ],
        type: "Point"
      },
      id: "6709ecd8cd114dffa021c2921b0d4471"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        name: "Ralph DeMarco Park Off-Leash Area",
        state: "NY",
        address: "Shore Blvd & 20th Rd",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q004A",
        postalCode: "11105"
      },
      geometry: {
        coordinates: [
          -73.916469,
          40.784618
        ],
        type: "Point"
      },
      id: "695a8b34c71509b06e3baf1a1afcc836"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Bailey Avenue and West 230 Street",
        boro: "Bronx",
        name: "Siren Slope Park Off-Leash Area",
        state: "NY",
        address: "3025 Bailey Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X150G",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.903753,
          40.876971
        ],
        type: "Point"
      },
      id: "6d0725c495a616ecf90576556288bdba"
    },
    {
      type: "Feature",
      properties: {
        Notes: "64th Avenue/64th Road on Grand Central Parkway service road",
        city: "Forest Hills",
        boro: "Queens",
        name: "Underbridge Playground Dog Run",
        state: "NY",
        address: "64th Ave & Grand Central Parkway",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q451",
        postalCode: "11375"
      },
      geometry: {
        coordinates: [
          -73.845108,
          40.734277
        ],
        type: "Point"
      },
      id: "7142a0f73f0ca7e4c81205492ca99416"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at 5th Avenue, Waverly Place, West 4th Street, between McDougal & Thompson streets, south side of park (behind building)",
        boro: "Brooklyn",
        name: "Marcus Garvey Park Dog Run",
        state: "NY",
        address: "462 Union Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B223S",
        postalCode: "11211"
      },
      geometry: {
        coordinates: [
          -73.951434,
          40.714311
        ],
        type: "Point"
      },
      id: "741dd8963ef308e325a9d7a7d4135b29"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Van Cortlandt Park Dog Run",
        state: "NY",
        address: "Broadway and 252 Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X092",
        postalCode: "10468"
      },
      geometry: {
        coordinates: [
          -73.897006,
          40.897891
        ],
        type: "Point"
      },
      id: "756efb308ea4dab942f2a9da252b4b3f"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Wallenberg Forest Park Off-Leash Area",
        state: "NY",
        address: "Douglas Avenue and West 235 Street",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X259",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.916571,
          40.886908
        ],
        type: "Point"
      },
      id: "798c4ee41d50059c95e17f85b57b8c28"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Richman (Echo) Park Off-Leash Area",
        state: "NY",
        address: "Valentine Ave & E Tremont Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X017",
        postalCode: "10457"
      },
      geometry: {
        coordinates: [
          -73.9011,
          40.847971
        ],
        type: "Point"
      },
      id: "799cf6f97a7d753a6dfe654c18eaa6ca"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Maguire Avenue behind athletic fields closer to Romona Avenue ",
        boro: "Staten Island",
        name: "Bloomingdale Park Dog Run",
        state: "NY",
        address: "Ramona Ave & Maguire Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "R106",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.211671,
          40.535254
        ],
        type: "Point"
      },
      id: "7ab4724c3b8f70c5c255e63b6d7acb87"
    },
    {
      type: "Feature",
      properties: {
        Notes: "All areas off-lease excluding the playground, ballfields, and Natural Areas.",
        boro: "Brooklyn",
        name: "Canarsie Park Off-Leash Area",
        state: "NY",
        address: "Seaview Ave & East 93 St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B018",
        postalCode: "11236"
      },
      geometry: {
        coordinates: [
          -73.892732,
          40.631774
        ],
        type: "Point"
      },
      id: "7c77dd1a198707c95026fe8d149f68ae"
    },
    {
      type: "Feature",
      properties: {
        Url: "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        boro: "Manhattan",
        name: "Riverside Park Dog Run North",
        state: "NY",
        address: "Riverside Drive & West 105th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M071c",
        postalCode: "10025",
        Notes: ""
      },
      geometry: {
        coordinates: [
          -73.970555,
          40.801602
        ],
        type: "Point"
      },
      id: "7d2c766df774ffc3aac17bb6cf407f38"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Cooper Park Dog Run",
        state: "NY",
        address: "Olive Street and Maspeth Avenue",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B025",
        postalCode: "11211"
      },
      geometry: {
        coordinates: [
          -73.93902,
          40.716068
        ],
        type: "Point"
      },
      id: "7d3723100a6d8e6575de306357bbe9df"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Grand Ferry Park Off-Leash Area",
        state: "NY",
        address: "1 Grand Street",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B401",
        postalCode: "11221"
      },
      geometry: {
        coordinates: [
          -73.967338,
          40.716803
        ],
        type: "Point"
      },
      id: "7f709c3a6f967ba2a64047367d10909b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Almeda Avenue between Beach51st Street and Beach54th Street",
        city: "Far Rockaway",
        boro: "Queens",
        name: "Rockaway Community Park Off-Leash Area",
        state: "NY",
        address: "Almeda Ave & Beach54th St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q371",
        postalCode: "11691"
      },
      geometry: {
        coordinates: [
          -73.784798,
          40.597716
        ],
        type: "Point"
      },
      id: "822a85825d91940f9586675d91d4436a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "St. Nicholas Park Dog Run",
        state: "NY",
        address: "St Nicholas Ave & St. Nicholas Terrace",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M077",
        postalCode: "10030"
      },
      geometry: {
        coordinates: [
          -73.949082,
          40.81714
        ],
        type: "Point"
      },
      id: "84beea5df84538dc1c4556e1b6b84393"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Administered by the Hudson River Park Trust",
        boro: "Manhattan",
        name: "Chelsea Waterside Park Dog Run",
        Url: "http: //www.hudsonriverpark.org/explore/dogruncw.html",
        state: "NY",
        address: "11th Ave & 22nd Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M",
        postalCode: "10011"
      },
      geometry: {
        coordinates: [
          -74.007428,
          40.74818
        ],
        type: "Point"
      },
      id: "863ac196cb6ebd51dbf35ea52a7d2852"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Woodside",
        boro: "Queens",
        name: "Windmuller Park Dog Run (Doughboy Plaza)",
        state: "NY",
        address: "Woodside Ave & 56th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q031A",
        postalCode: "11377"
      },
      geometry: {
        coordinates: [
          -73.908113,
          40.746182
        ],
        type: "Point"
      },
      id: "8960af64b285bea757dce733a29b6d3e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Union Square Dog Run",
        state: "NY",
        address: "15th Street & Union Square West",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M089",
        postalCode: "10003"
      },
      geometry: {
        coordinates: [
          -73.991228,
          40.735898
        ],
        type: "Point"
      },
      id: "896adfabeac6cd858c08e5ba4dc202e1"
    },
    {
      type: "Feature",
      properties: {
        Notes: "southeastern side of the park",
        boro: "Long Island",
        name: "John F Murray Playground Dog Run",
        state: "NY",
        address: "21st St & 45th Road",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q141",
        postalCode: "11101"
      },
      geometry: {
        coordinates: [
          -73.947836,
          40.746669
        ],
        type: "Point"
      },
      id: "8b97d4312b1452a77f7527c90383973d"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Sunset Park Oval lawn area only, center of park44th Street, 41st Street,  6th Avenue",
        boro: "Brooklyn",
        name: "Sunset Park Off-Leash Area",
        state: "NY",
        address: "7th Ave &43rd St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B087",
        postalCode: "11232"
      },
      geometry: {
        coordinates: [
          -74.001832,
          40.646368
        ],
        type: "Point"
      },
      id: "90177d82d234c91e3f78447c5899fa1f"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Off-leash hours for the island are before 9: 00am and after 9pm except for areas where dogs are expressly prohibited via signage.",
        boro: "Manhattan",
        name: "Randalls Island Park Off-Leash Area",
        state: "NY",
        address: "20 Randalls Island Park",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "M104",
        postalCode: "10035"
      },
      geometry: {
        coordinates: [
          -73.922723,
          40.796032
        ],
        type: "Point"
      },
      id: "9198c347815d457f815aa82c828da8ce"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "University Woods Park Off-Leash Area",
        state: "NY",
        address: "Sedgwick Avenue and Hall of Fame Terrace",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X051",
        postalCode: "10468"
      },
      geometry: {
        coordinates: [
          -73.913223,
          40.859586
        ],
        type: "Point"
      },
      id: "9454fdc02aaf37536c3045af00558e8d"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Pier 6",
        boro: "Brooklyn",
        name: "Pier 6 Dog Run",
        state: "NY",
        address: "334 Furman St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B431",
        postalCode: "11201"
      },
      geometry: {
        coordinates: [
          -73.999262,
          40.694199
        ],
        type: "Point"
      },
      id: "99c5c781ba330497454db02f2ed81520"
    },
    {
      type: "Feature",
      properties: {
        Notes: "North side of the Cross Island Parkway & Utopia Parkway",
        boro: "Queens",
        city: "Whitestone",
        name: "Little Bay Park Dog Run",
        state: "NY",
        address: "Cross Island Pkwy & Utopia Parkway",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q010A",
        postalCode: "11357"
      },
      geometry: {
        coordinates: [
          -73.794843,
          40.786531
        ],
        type: "Point"
      },
      id: "99f28140bcbaa5b45dfba252c5665c5e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "East End Avenue to East River from Gracie Square (East84th Street) to89th Street",
        boro: "Manhattan",
        name: "Carl Schurz Park Dog Run",
        state: "NY",
        address: "East 86th Street & East End Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M081",
        postalCode: "10028"
      },
      geometry: {
        coordinates: [
          -73.944782,
          40.774946
        ],
        type: "Point"
      },
      id: "9a85c8c2ce68f8f04664eacdc71547fc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Jamaica",
        boro: "Queens",
        name: "Baisley Pond Park Off-Leash Area",
        state: "NY",
        address: "Lakeview Lane & Foch Boulevard",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q005",
        postalCode: "11434"
      },
      geometry: {
        coordinates: [
          -73.798412,
          40.678838
        ],
        type: "Point"
      },
      id: "9c4a32f4f1417a451e67fdb6185bae69"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Riverside Park Dog Run South",
        Url: "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        state: "NY",
        address: "Riverside Drive & West 72nd St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M071a",
        postalCode: "10023"
      },
      geometry: {
        coordinates: [
          -73.9857,
          40.780321
        ],
        type: "Point"
      },
      id: "9def406103f3962e95a3237f746ec721"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Except for playgrounds and other areas where dogs are expressly prohibited via signage,all areas of the park are off-leash during designated hours.",
        boro: "Bronx",
        name: "Tremont Park Off-Leash Area",
        state: "NY",
        address: "E 175 St to E Tremont Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X010A",
        postalCode: "10457"
      },
      geometry: {
        coordinates: [
          -73.895233,
          40.84525
        ],
        type: "Point"
      },
      id: "9f28f6265c10f970eb533e6e6e45d692"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Columbia Place & State Street. Named in memory of Beastie Boys' founding member.",
        boro: "Brooklyn",
        name: "Adam Yauch Park Dog Run",
        state: "NY",
        address: "27 State St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B223DA",
        postalCode: "11201"
      },
      geometry: {
        coordinates: [
          -73.9986,
          40.692299
        ],
        type: "Point"
      },
      id: "9f3591defbae52341a130ad36d5f4d08"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "J.J. Byrne Dog Park",
        state: "NY",
        address: "4th St &5th Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B111",
        postalCode: "11215"
      },
      geometry: {
        coordinates: [
          -73.983779,
          40.67219
        ],
        type: "Point"
      },
      id: "9f4eb2c66d7dab966199a053f6c1ce73"
    },
    {
      type: "Feature",
      properties: {
        Notes: "North Henry Street & Driggs Avenue",
        boro: "Brooklyn",
        name: "McGolrick Park Dog Run",
        state: "NY",
        address: "138 Driggs Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B114",
        postalCode: "11222"
      },
      geometry: {
        coordinates: [
          -73.943596,
          40.723266
        ],
        type: "Point"
      },
      id: "9fe681b5d551d8f789b82f44bfcac91e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Thomas Jefferson Park Dog Run",
        state: "NY",
        address: "East 112th Street & FDR Drive",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M047",
        postalCode: "10029"
      },
      geometry: {
        coordinates: [
          -73.974269,
          40.735494
        ],
        type: "Point"
      },
      id: "9ffcfbe4ef4369979e014801b5ba146e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Center of the park, just north of the ballfields which would line up with around 155th Street.",
        boro: "Bronx",
        name: "Franz Sigel Park Dog Run",
        state: "NY",
        address: "Walton Ave & Grand Concourse",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X047",
        postalCode: "10451"
      },
      geometry: {
        coordinates: [
          -73.920799,
          40.878349
        ],
        type: "Point"
      },
      id: "a36a61df8502e557fd3bb153a4e19d59"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Madison Square Park Dog Run",
        state: "NY",
        address: "5th Avenue & East 23rd St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M052",
        postalCode: "10010"
      },
      geometry: {
        coordinates: [
          -73.989585,
          40.741548
        ],
        type: "Point"
      },
      id: "a378accc3ac6aca33e1f461466deada0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Brookside Avenue between Alpine Court & Kingsley Avenue (lawn area)",
        boro: "Manhattan",
        name: "Clove Lakes Park Off-Leash Area",
        state: "NY",
        address: "1150 Clove Road",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R005",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.105551,
          40.617918
        ],
        type: "Point"
      },
      id: "a95de28194e66ee7786c34c495ab93f5"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Asser Levy Park Off-Leash Area",
        state: "NY",
        address: "Sea Breeze Avenue and West 5th Street",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B080",
        postalCode: "11224"
      },
      geometry: {
        coordinates: [
          -73.973019,
          40.576057
        ],
        type: "Point"
      },
      id: "ad6a87ea754016857001d644f31de981"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Spuyten Duyvil Shorefront Park Off-Leash Area",
        state: "NY",
        address: "Palisade Avenue & Independence Avenue",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X091",
        postalCode: "10463"
      },
      geometry: {
        coordinates: [
          -73.920975,
          40.879523
        ],
        type: "Point"
      },
      id: "ae5cfb6ad501270ea5ae0dde2256200c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "just below playground",
        boro: "Staten Island",
        name: "Lemon Creek Park Off-Leash Area",
        state: "NY",
        address: "Seguine Avenue & Johnston Terrace",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R079",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.197071,
          40.512603
        ],
        type: "Point"
      },
      id: "b207f3c05793c31ca64357292b2f5535"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Claremont Park Off-Leash Area",
        state: "NY",
        address: "Clay Ave & E. 170 St",
        DogRuns_Type: "Off-Leash",
        Country: "United states",
        Accessible: "N",
        Prop_ID: "X008",
        postalCode: "10457"
      },
      geometry: {
        coordinates: [
          -73.907982,
          40.83721
        ],
        type: "Point"
      },
      id: "b44b183ea98c11293d4b87953284c1e0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Long Island",
        name: "Queensbridge Park Off-Leash Area",
        state: "NY",
        address: "Vernon Blvd & 41st Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q104",
        postalCode: "11101"
      },
      geometry: {
        coordinates: [
          -73.947299,
          40.756439
        ],
        type: "Point"
      },
      id: "b56b0cd4f5d7e3bdd045227c26cda453"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "DiMattina Park Dog Run",
        state: "NY",
        address: "Hicks St & Woodhull St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B223B",
        postalCode: "11231"
      },
      geometry: {
        coordinates: [
          -74.002947,
          40.681325
        ],
        type: "Point"
      },
      id: "b763177e921ac3abe2f0d5eeee2162b6"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Cherry Street and Jackson Street (on the north side of the park building)",
        boro: "Manhattan",
        name: "Corlears Hook Park Dog Run",
        state: "NY",
        address: "397 FDR Drive",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M017",
        postalCode: "10002"
      },
      geometry: {
        coordinates: [
          -73.979287,
          40.711799
        ],
        type: "Point"
      },
      id: "b8b7eeb1b93f79e63378e6edfefed18b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "West52nd Street & West54th Street, between10th &11th avenues",
        boro: "Manhattan",
        name: "De Witt Clinton Park Dog Run (2 runs)",
        state: "NY",
        address: "11th Ave &53rd St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M022",
        postalCode: "10019"
      },
      geometry: {
        coordinates: [
          -73.993274,
          40.767752
        ],
        type: "Point"
      },
      id: "bd457167b2bf6c7ff9c2aba10642a056"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Amsterdam Ave & Fort George Ave",
        boro: "Brooklyn",
        name: "Brooklyn War Memorial Off-Leash Area",
        state: "NY",
        address: "195 Cadman Plaza West",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B113A",
        postalCode: "11201"
      },
      geometry: {
        coordinates: [
          -73.990864,
          40.700079
        ],
        type: "Point"
      },
      id: "bd9b27019370f27bee6582a4ebab0698"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Crotona Park Off-Leash Area",
        state: "NY",
        address: "1596-1672 Crotona Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X010",
        postalCode: "10457"
      },
      geometry: {
        coordinates: [
          -73.897757,
          40.83654
        ],
        type: "Point"
      },
      id: "bf3409ff5686340c3e64fb4351546fed"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Eastern Parkway between Washington and Underhill avenues",
        boro: "Brooklyn",
        name: "Mount Prospect Park Off-Leash Area",
        state: "NY",
        address: "Eastern Parkway & Mary Pinkett Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B159",
        postalCode: "11238"
      },
      geometry: {
        coordinates: [
          -73.962521,
          40.671387
        ],
        type: "Point"
      },
      id: "c052db9101d11182860f8f7b0e9e9180"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        city: "Far Rockaway",
        boro: "Queens",
        name: "Bayswater Park Off-Leash Area",
        state: "NY",
        address: "701 Bay32nd St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q007",
        postalCode: "11691"
      },
      geometry: {
        coordinates: [
          -73.767436,
          40.598762
        ],
        type: "Point"
      },
      id: "c2eb2de1341e9dd4500abcbf8dbbe4b5"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Mainly zone #1",
        city: "College Point",
        boro: "Queens",
        name: "MacNeil Park Off-Leash Area",
        state: "NY",
        address: "119th St & Poppenhusen Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "Q009",
        postalCode: "11356"
      },
      geometry: {
        coordinates: [
          -73.850742,
          40.791872
        ],
        type: "Point"
      },
      id: "c66c741dcfdb7ccd8fd7423eb08661fc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "West of FDR Drive, between East49th & East51st streets",
        boro: "Manhattan",
        name: "Peter Detmold Park Dog Run",
        state: "NY",
        address: "454 E51st St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M108N",
        postalCode: "10022"
      },
      geometry: {
        coordinates: [
          -73.96409,
          40.753123
        ],
        type: "Point"
      },
      id: "c8df35e006c10d7f61cdcda7c14965b5"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Staten Island",
        name: "Silver Lake Park Dog Run",
        state: "NY",
        address: "700 Victory Blvd",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "R022",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.091694,
          40.625921
        ],
        type: "Point"
      },
      id: "ccfde740a8f8884ab28ad093a2e48ab9"
    },
    {
      type: "Feature",
      properties: {
        Accessible: "N",
        address: "Fort Washington & West 173rd Street",
        boro: "Manhattan",
        DogRuns_Type: "Run",
        name: "J. Hood Wright Park Dog Run",
        Prop_ID: "M099",
        state: "NY",
        postalCode: "10033"
      },
      geometry: {
        coordinates: [
          -73.941132,
          40.846136
        ],
        type: "Point"
      },
      id: "ce5321b5089701f8c9798b4cbdd00ffc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Joseph Rodham Drake Park Off-Leash Area",
        state: "NY",
        address: "Drake Park S & Hunts Point Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X015",
        postalCode: "10474"
      },
      geometry: {
        coordinates: [
          -73.881223,
          40.810047
        ],
        type: "Point"
      },
      id: "ce6a0a31c9c80ee2610effa9d7fef26d"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Andrew Haswell Green Dog Park",
        state: "NY",
        address: "Bobby Wagner Walk & E 63rd Street Pedestrian Bridge",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M108Q1",
        postalCode: "10065"
      },
      geometry: {
        coordinates: [
          -73.956869,
          40.760221
        ],
        type: "Point"
      },
      id: "ce998267605815000c221f52d115cf35"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Frank S. Hackett Park Dog Run",
        state: "NY",
        address: "Riverdale Avenue at Henry Hudson Parkway",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X110A",
        postalCode: ""
      },
      geometry: {
        coordinates: [
          -73.907457,
          40.899395
        ],
        type: "Point"
      },
      id: "d22386cd0aacc804cfda4b96e88ec0ef"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Lawn area beyond ballfield",
        boro: "Staten Island",
        name: "Father Macris Park Off-Leash Area",
        state: "NY",
        address: "Lamberts Lane & Fahy Avenue",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R075A",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.163584,
          40.615995
        ],
        type: "Point"
      },
      id: "d2f5d57ab279fd945aeded8505f0e029"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Long Island",
        name: "Torsney/Lou Lodati Playground Dog Run",
        state: "NY",
        address: "43rd Street & Skillman Avenue",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q340",
        postalCode: "11104"
      },
      geometry: {
        coordinates: [
          -73.92164,
          40.747288
        ],
        type: "Point"
      },
      id: "d3c14c21ccf7fb52a4d30eb3e5c87bff"
    },
    {
      type: "Feature",
      properties: {
        Notes: "St. Mark's Ave., Park Pl. bet. Brooklyn Ave. and Kingston Ave. Except for playgrounds and other areas where dogs are expressly prohibited via signage, all areas of the park are off-leash during designated hours.",
        boro: "Manhattan",
        name: "Brower Park",
        state: "NY",
        address: "725 St Marks Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B012",
        postalCode: "11216"
      },
      geometry: {
        coordinates: [
          -73.943185,
          40.673479
        ],
        type: "Point"
      },
      id: "d68fa582bb3cc4872963cdc7b2b8f114"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Marcus Garvey Park Dog Run",
        state: "NY",
        address: "Madison Ave & East 120th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M058",
        postalCode: "10027"
      },
      geometry: {
        coordinates: [
          -73.943001,
          40.802546
        ],
        type: "Point"
      },
      id: "d792edbb9685e440401ab295ad55997c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Ewen Park Dog Run",
        state: "NY",
        address: "Riverdale Ave & W 231 St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "X019",
        postalCode: "10468"
      },
      geometry: {
        coordinates: [
          -73.909401,
          40.881377
        ],
        type: "Point"
      },
      id: "d87b9dc5ee51dc8202a58d636b958030"
    },
    {
      type: "Feature",
      properties: {
        Notes: "On sand after Labor Day and before Memorial Day",
        boro: "Staten Island",
        name: "South Beach Park Off-Leash Area",
        state: "NY",
        address: "Pearsall St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "R046",
        postalCode: "10305"
      },
      geometry: {
        coordinates: [
          -74.074005,
          40.590002
        ],
        type: "Point"
      },
      id: "db4dc6db4b5117b36644adbd35c3e78c"
    },
    {
      type: "Feature",
      properties: {
        Url: "http: //www.inwoof.com/",
        boro: "Manhattan",
        name: "Inwood Hill Park Dog Run: Homer's Run",
        state: "NY",
        address: "Seaman Avenue & Isham Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M042",
        postalCode: "10452",
        Notes: ""
      },
      geometry: {
        coordinates: [
          -73.921707,
          40.871139
        ],
        type: "Point"
      },
      id: "dd93ea2a2b1ab9fb77b472afcebeeb5a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "All areas excluding the playground and ballfields",
        boro: "Brooklyn",
        name: "Breukelen Park Off-Leash Area",
        state: "NY",
        address: "Glenwood Rd & Louisiana Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B247",
        postalCode: "12207"
      },
      geometry: {
        coordinates: [
          -73.891382,
          40.652375
        ],
        type: "Point"
      },
      id: "df4902d3f4f5fb32cbbc83fd39fd8541"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Riverside Park Dog Run Central",
        Url: "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        state: "NY",
        address: "Riverside Drive & West 87th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M071b",
        postalCode: "10024"
      },
      geometry: {
        coordinates: [
          -73.979889,
          40.790619
        ],
        type: "Point"
      },
      id: "dff86a34e2e150cbc19a03329964fc75"
    },
    {
      type: "Feature",
      properties: {
        Notes: "south side of park",
        city: "Elmhurst",
        boro: "Queens",
        name: "Veteran's Grove Dog Run",
        state: "NY",
        address: "Judge Street & Whitney Avenue",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q013",
        postalCode: "11373"
      },
      geometry: {
        coordinates: [
          -73.877677,
          40.743059
        ],
        type: "Point"
      },
      id: "e096938a4b2b66303a1f4ab63f3e478d"
    },
    {
      type: "Feature",
      properties: {
        Url: "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        boro: "Bronx",
        name: "Hylan Park Off-Leash Area",
        state: "NY",
        address: "1596-1672 Crotona Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X010",
        postalCode: "10457"
      },
      geometry: {
        coordinates: [
          -73.897757,
          40.83654
        ],
        type: "Point"
      },
      id: "e82e4c1ba595c1c7ce7906f009534a69"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Ocean Ave & Mackenzie St",
        boro: "Brooklyn",
        name: "Manhattan Beach Dog Run",
        state: "NY",
        address: "Ocean Ave & Mackenzie St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B251",
        postalCode: "11235"
      },
      geometry: {
        coordinates: [
          -73.942595,
          40.576822
        ],
        type: "Point"
      },
      id: "f13fb2bf2c784ff7ad44a9e544f22980"
    },
    {
      type: "Feature",
      properties: {
        address: "85 Richards St",
        boro: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Coffey Park Off-Leash Area",
        Notes: "Riverside Drive & West 105th St",
        Prop_ID: "B077",
        state: "NY",
        postalCode: "11231"
      },
      geometry: {
        coordinates: [
          -74.008505,
          40.677636
        ],
        type: "Point"
      },
      id: "f49633e42777793af4dfc6d737bee6d0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Robert Moses Park Dog Run",
        state: "NY",
        address: "East 42nd St & 1st Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M158",
        postalCode: "10016"
      },
      geometry: {
        coordinates: [
          -73.969716,
          40.748807
        ],
        type: "Point"
      },
      id: "f50b1b2cb1be7736fe6d4d8de32bec15"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Owls Head Park Dog Run",
        state: "NY",
        address: "68th Street & Shore Road",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "B066",
        postalCode: "11220"
      },
      geometry: {
        coordinates: [
          -74.0356,
          40.639717
        ],
        type: "Point"
      },
      id: "f865b985d7958c47e05ea27d4de11104"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located along Shore Road, 4th Avenue to 69th Street ",
        boro: "Brooklyn",
        name: "Shore Road Park Off-Leash Area",
        state: "NY",
        address: "Shore Road & 4th Ave",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B082",
        postalCode: "11209"
      },
      geometry: {
        coordinates: [
          -74.038722,
          40.615516
        ],
        type: "Point"
      },
      id: "f91e6345d9193481e72d2ae545271f57"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Devoe Park Off-Leash Area",
        state: "NY",
        address: "192nd & Jerome Avenue",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "X013",
        postalCode: "10468"
      },
      geometry: {
        coordinates: [
          -73.905232,
          40.863532
        ],
        type: "Point"
      },
      id: "fca498de4ffbcd4d6a12afee3c5ec68b"
    }
  ],
  type: "FeatureCollection"
};

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnViYmFzZGFkIiwiYSI6ImNqODRzOHNhNjA0NjMycXVkZ2o4Z3ZkaXoifQ.QP47B3zvEuiEqYcSJDqoYA";

// older browser fix as remove is newer method
if (typeof Element !== "undefined" && !("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/bubbasdad/cj8krq0rm57zw2sor4hhor04o",
  center: [-73.880179, 40.737409],
  zoom: 10.5,
  maxZoom: 18,
  buffer: 256,
  scrollZoom: false,
  'source-layer': 'nycparks-ad16j1'
});

const runList = runs.features;

map.on("load", e => {

  buildLocationList(runs);

  const foundHeaders = document.getElementsByClassName('heading');
  if (foundHeaders[0]) {
    foundHeaders[0].addEventListener('click', e => {
      e.preventDefault();
      map.zoomTo(10.5);
    })
  }

  map.addControl(new mapboxgl.NavigationControl());

  // set curser to pointer on mousehover
  map.on('mousemove', e => {
    var dogsUnderMouse = map.queryRenderedFeatures(e.point, {
      layers: ["nycparks-ad16j1"]
    })
    map.getCanvas().style.cursor = (dogsUnderMouse.length) ? 'pointer' : '';
  });

  map.on('click', e => {
    var dogIconsClicked = map.queryRenderedFeatures(e.point, {
      layers: ["nycparks-ad16j1"]
    })

    // if no click on icon, forget it
    if (!dogIconsClicked.length) return;

    // start with resetting active UI shading on listing
    var activeItem = document.getElementsByClassName("active");
    if (activeItem[0]) {
      activeItem[0].classList.remove("active");
    }

    // TODO: We can make switch statement a function and call it again here to assign the borocode to the listing id selected below
    var dogIcon = dogIconsClicked[0];
    var listing = document.getElementById("listing-" + dogIcon.properties.Prop_ID);
    listing.classList.add("active");
    flyToRun(dogIcon);
    createPopUp(dogIcon);
  })
});

const flyToRun = currentFeature => {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 14
  });
};

const createPopUp = currentFeature => {
  let popUps = document.getElementsByClassName("mapboxgl-popup");
  // Checks if there is already a popup on the map to remove it
  if (popUps[0]) popUps[0].remove();

  let notesEl = currentFeature.properties.Notes ? "<h4>" + currentFeature.properties.Notes + "</h4>" : "";

  let popup = new mapboxgl.Popup({
    closeOnClick: true,
    anchor: "top",
    offset: [0, 20]
  })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
    '<div id="popup" class="mapboxgl-popup"><h3>' +
    currentFeature.properties.name +
    "</h3><h4>" +
    currentFeature.properties.address +
    "</h4>" + notesEl + "</div>"
    )
    .addTo(map);
};

const buildLocationList = data => {
  const runList = data.features;
  let counter = 0;
  // Iterate through the list of runs
  for (let run of runList) {
    let props = run.properties;
    let boroID = props.boro

    let boroSelector;

    switch (boroID) {
      case 'New York':
        boroSelector = 'mh'
        break;
      case 'Brooklyn':
        boroSelector = 'bk'
        break;
      case 'Queens':
        boroSelector = 'qs'
        break;
      case 'Bronx':
        boroSelector = 'bx'
        break;
      case 'Staten Island':
        boroSelector = 'si'
        break;
      case 'Long Island':
        boroSelector = 'li'
        break;
      default:
        break;
    }


    // switch case on boro to assign id
    // Select the listing container to append a div
    // with the class 'item' for each run
    let listings = document.getElementById("listings");
    let listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + props.Prop_ID + boroSelector;

    // Create a new link with the class 'title' for each run
    // and fill it with the run address
    let link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.dataPosition = counter;
    link.innerHTML = props.name;


    // Create a new div with the class 'details' for each run
    // and fill it with the boro and phone number
    let details = listing.appendChild(document.createElement("div"));
    details.innerHTML = props.address + ", " + props.boro;

    link.addEventListener("click", e => {
      e.preventDefault();
      // Update the currentFeature to the run associated with the clicked link
      var clickedListing = runList[link.dataPosition];

      // 1. Open popup
      createPopUp(clickedListing);
      // 1. Fly to the point
      flyToRun(clickedListing);

      // 3. Highlight sidebar listing (and remove for others)
      var activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      link.parentNode.classList.add("active");
    });

    counter++;
  }

  // TODO: filter  by boro
  const filterLocationList = (boroCode) => {
    let listings = document.getElementById("listings").filter(listing => {
      // only return listings whose id contains the input boroCode
      return listing.id.indexOf(boroCode) > -1;
    });
  }
};
