"use strict";

// raw data: https://data.boroofnewyork.us/Recreation/Directory-of-Dog-Runs-and-Off-Leash-Areas/ipbu-mtcs/data

var runs = {
  features: [
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
        Prop_ID: "S075A",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.163584,
          40.615995
        ],
        type: "Point"
      },
      id: "0088e8d2b67def2214e89fb53ec10bc6"
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
      id: "00c5e9c3c1e0e18859f6ad0c91cfb3c3"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Off-leash hours are before 9am and after 9pm except for areas where dogs are expressly prohibited via signage.",
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
      id: "04041608d532334fa5798b4c681bdb45"
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
      id: "075b108429bf8d7a245f34b69c348c87"
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
      id: "091fbff98a243f0ff7e4e80e3f6d70a7"
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
      id: "0d92aca033790b5c647ee2ca154e5e00"
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
      id: "0f27b5870822fed253c915c47618dada"
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
      id: "100549d88ff95c6467504496ef4810a2"
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
      id: "123cfc3347bb494b7aa9bca9ec42c2b5"
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
      id: "14324427d0f31de6471c5f295645ef5a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "The closest entrance is on Seaman Avenue at Isham Street, and you'll find the run just behind the flag pole. You can reach Inwood Hill Park by Subway via the A train to 207th St, or the 1 train to 207th St, and walk west.",
        boro: "Manhattan",
        name: "Inwood Hill Park Dog Run: Homer's Run",
        Url: "http://www.inwoof.com/",
        state: "NY",
        address: "Seaman Avenue & Isham Street",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M042",
        postalCode: "10452"
      },
      geometry: {
        coordinates: [
          -73.921707,
          40.871139
        ],
        type: "Point"
      },
      id: "149478e1201a8c7aafe14a8133077a91"
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
      id: "1ac5022e14c4c9c80d871bb9a15baf97"
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
      id: "1c5a57828f634b852c5d21bdb5bf8fd1"
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
        Prop_ID: "S031",
        postalCode: "10312"
      },
      geometry: {
        coordinates: [
          -74.188235,
          40.520195
        ],
        type: "Point"
      },
      id: "1f19fd432f950af956c191c717c9ea6a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Brookside Avenue between Alpine Court & Kingsley Avenue (lawn area)",
        boro: "Staten Island",
        name: "Clove Lakes Park Off-Leash Area",
        state: "NY",
        address: "1150 Clove Road",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "S005",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.105551,
          40.617918
        ],
        type: "Point"
      },
      id: "1fc6b351b373393e6bc3bdae49f5441c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "East End Avenue to East River from Gracie Square (East84th Street) to 89th Street. There are TWO dog runs, for large and small dogs.",
        boro: "Manhattan",
        name: "Carl Schurz Park Dog Runs",
        state: "NY",
        address: "East 86th Street & East End Ave",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M081",
        postalCode: "10028"
      },
      geometry: {
        coordinates: [
          -73.9439,
          40.774065
        ],
        type: "Point"
      },
      id: "20e8644ae580ea2bfc67169d0c5eadeb"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Flushing",
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
      id: "2456e3318bb3a71d8a3776e58e5f6ab5"
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
      id: "24b646a48509bf910d0f2adfb95e0693"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
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
      id: "29ebbb872108420a606965c169ba0aca"
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
      id: "2d697c57cded17055e8d24c4a676820b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "J.J. Byrne Dog Park",
        state: "NY",
        address: "4th St & 5th Ave",
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
      id: "309b2ebfd95c0a6d00aa856c13935457"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Off-leash area at Sunset Park Oval lawn area only, center of park 44th St, 41st St,  6th Ave",
        boro: "Brooklyn",
        name: "Sunset Park Off-Leash Area",
        state: "NY",
        address: "7th Ave & 43rd St",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "B087",
        postalCode: "11232"
      },
      geometry: {
        coordinates: [
          -74.0028,
          40.647358
        ],
        type: "Point"
      },
      id: "318cda10035f2f051a6d378fdb92b675"
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
      id: "37625e8d429bbfb5feb07dc18ba1e6cd"
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
      id: "3affc1dfc6428a0c6234a6e68d967b4c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Wallenberg Forest Park Off-Leash Area",
        state: "NY",
        address: "Douglas Avenue and West 235th Street",
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
      id: "3c994af3b3af8480ec569d28767c8c65"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Woodside",
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
      id: "3d7e569896019b35c47de52030fe00e6"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
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
      id: "3ddb1e2ea464415bbf9217cb7ba7ba5b"
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
      id: "3de89dc8cdfd344a388a37754f75a765"
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
        Prop_ID: "S106",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.211671,
          40.535254
        ],
        type: "Point"
      },
      id: "3e2aad4f8844d5bcd551b7ac23ee896a"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
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
      id: "3e50624ee68194900be9d931a2c18163"
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
      id: "3f3287a3b139c1a936a9a4df5cb6bd45"
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
        Prop_ID: "S121",
        postalCode: "10308"
      },
      geometry: {
        coordinates: [
          -74.143165,
          40.555468
        ],
        type: "Point"
      },
      id: "3f815b08dcfad5d7a1d6dd8ef099194d"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Theodore Roosevelt Park Dog Run",
        state: "NY",
        address: "Central Park West & West 81st Street",
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
      id: "3f948bf7c1d0486b686cf76a3cdb3570"
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
      id: "425d1b7ba6623ced6f348b7d40f3654b"
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
      id: "426329ca7f54991b95feb2ddb3fe37be"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "East Elmhurst",
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
      id: "452c2f5d4828d58f898d4ee936277f6b"
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
      id: "45dc5ba64ec0f7c55142889bf694d1ac"
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
      id: "478320f236dd3cdac4b7f1b3b06125b9"
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
      id: "492fe8707613e2451b7d4275e4a7719e"
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
      id: "4a985a43a031aaf5caf4199b35b9dbb9"
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
      id: "4a993d3111cc390c47e07fe08f9426af"
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
      id: "4bcb8901c3bb07bb8450cf96c492645f"
    },
    {
      type: "Feature",
      properties: {
        Notes: "southeastern side of the park",
        boro: "Queens",
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
      id: "508a35d72091d362d232d8133d627aea"
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
      id: "5ac9199a0e4bb0b9df4eb82e97df7d7f"
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
      id: "5b90c96b7d26eff4d5b9641330c9efbf"
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
      id: "5d6658d09b2e3196d3118b9a505bc618"
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
      id: "5f6b013fba853bdae224e4aa22e47f81"
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
      id: "60772b6714dfc97ca4fe40be377fe6c5"
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
        Prop_ID: "S135",
        postalCode: "10312"
      },
      geometry: {
        coordinates: [
          -74.148262,
          40.535506
        ],
        type: "Point"
      },
      id: "63a5380cc1e91706622d678d379ffded"
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
      id: "644e399a83eeb1d8800c9df2c5ff2035"
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
      id: "65b00b7b3bcf9a6e99b63c80baff3a3c"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Amsterdam Ave & Fort George Ave",
        boro: "Manhattan",
        name: "Highbridge Park Dog Run",
        Url: "", //"http://www.highbridgek9club.org/", inactive
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
      id: "699adfb8309089afb1fac4b674c993eb"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Leif Ericson Park Off-Leash Area",
        state: "NY",
        address: "67th St & 7th Ave",
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
      id: "6a6098f1cc4d784486403a6cecb42611"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at bottom of Seguine Avenue just below playground",
        boro: "Staten Island",
        name: "Lemon Creek Park Off-Leash Area",
        state: "NY",
        address: "Seguine Ave & Johnston Terrace",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "S079",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.197071,
          40.512603
        ],
        type: "Point"
      },
      id: "705c7aeb9d00001fcea4ba454976d61e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
        name: "Spuyten Duyvil Shorefront Park Off-Leash Area",
        state: "NY",
        address: "Palisade Ave & Independence Ave",
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
      id: "7b89d9249b7bef8ecaf589420a291481"
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
      id: "7d040d21301ccdd9a99ad0f5e7e6ede6"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
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
      id: "7dc982c0985cb9a2b9c79b425fbabf6f"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Bayside",
        name: "Crocheron Park Off-Leash Area",
        state: "NY",
        address: "214th Place & 35th Ave",
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
      id: "8186e80068040a6fc78d401c7bf11e84"
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
      id: "855f19d4cebd254fa42528d47e31a7ce"
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
      id: "8ad04d6f63bcff8497da078ab5e7dd11"
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
      id: "8da22d035565e2af9ee022c32f3c28f8"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Administered by the Hudson River Park Trust",
        boro: "Manhattan",
        name: "Chelsea Waterside Park Dog Run",
        Url: "http://www.hudsonriverpark.org/explore/dogruncw.html",
        state: "NY",
        address: "11th Ave & 22nd St",
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
      id: "8fbf03dbe59e9af48271cecaba864cec"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Middle Village",
        name: "Juniper Valley Park Off-Leash Area",
        state: "NY",
        address: "Juniper Blvd N & 80th St",
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
      id: "900947eecba34234693c9d7a44061b40"
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
      id: "909039033c1ded1ee72bc1ef9920eacd"
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
      id: "911553abad024b0ceb435cfc72f5c0b5"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located on lawn area, mid-park right side",
        boro: "Staten Island",
        name: "Arthur Von Briesen Park Off-Leash Area",
        state: "NY",
        address: "Bay St & School Rd",
        DogRuns_Type: "Off-Leash",
        Accessible: "N",
        Prop_ID: "S059",
        postalCode: "10305"
      },
      geometry: {
        coordinates: [
          -74.060425,
          40.606352
        ],
        type: "Point"
      },
      id: "96fe7a4297c1a2f04135265a10a54f12"
    },
    {
      type: "Feature",
      properties: {
        Notes: "south side of park",
        boro: "Queens",
        city: "Elmhurst",
        name: "Veteran's Grove Dog Run",
        state: "NY",
        address: "Judge Street & Whitney Ave",
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
      id: "999f212bb8a473854eb6e362be027f05"
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
      id: "9bc70fdbecf4db27f8da98cd9faca694"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Brooklyn",
        name: "Owls Head Park Dog Run",
        state: "NY",
        address: "68th Street & Shore Rd",
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
      id: "9c0003aa4de2ce483cb680b2cf786e1e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "64th Avenue/64th Road on Grand Central Parkway service road",
        boro: "Queens",
        city: "Forest Hills",
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
      id: "9c02739a2793b01d5970d32585ab1d19"
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
          -73.914097,
          40.859553
        ],
        type: "Point"
      },
      id: "9fc710124f082b7fb3b44e487221a976"
    },
    {
      type: "Feature",
      properties: {
        boro: "Bronx",
        name: "Hylan Park Off-Leash Area",
        Url: "http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
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
      id: "a1a3f11f96948921a026a570e4c5e5bc"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Riverside Park Dog Run South",
        Url: "http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
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
      id: "a36770e289904cac3a8b0468f8123b49"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
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
      id: "a75efb0c14d08afd498efcd4757a3cfb"
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
        Prop_ID: "S046",
        postalCode: "10305"
      },
      geometry: {
        coordinates: [
          -74.074005,
          40.590002
        ],
        type: "Point"
      },
      id: "a965d20019c9de1167cb81d636cf7592"
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
      id: "a9d7777f8534e0b348873edc7fd70ec9"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Far Rockaway",
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
      id: "aa459b0bd32aeb2eac8b6d9f630fc885"
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
      id: "aa89755f42a3aa2a2c7e4e9cc1984af0"
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
      id: "ac3761ec5a0ee36c47018ccefec0891c"
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
        Prop_ID: "S052",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.101381,
          40.638456
        ],
        type: "Point"
      },
      id: "ad2e392f8de9e76381b51c4b53639eda"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
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
      id: "ae86fa48fd3f086d568ed38bc6b4a85b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Jamaica",
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
      id: "b1109be17ab8d088a2759e832781732e"
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
        Prop_ID: "S022",
        postalCode: "10301"
      },
      geometry: {
        coordinates: [
          -74.091694,
          40.625921
        ],
        type: "Point"
      },
      id: "b3c64aa4fa7a23a5f5a3ea267e3836a6"
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
        Prop_ID: "S075A",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.163584,
          40.615995
        ],
        type: "Point"
      },
      id: "b4a079f8b996020f1d6b9a7c7691f875"
    },
    {
      type: "Feature",
      properties: {
        Notes: "68 Road & Yellowstone Boulevard; Hours: 6am to 9am only",
        boro: "Queens",
        city: "Forest Hills",
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
      id: "b4b563b6d5803fe3fdea6f50fccacd72"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Springfield Gardens",
        name: "Springfield Park Off-Leash Area",
        state: "NY",
        address: "Springfield Blvd & 147th Ave",
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
      id: "b54c65a323074d4c35a8b1c525f35ee9"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Far Rockaway",
        name: "Rockaway Freeway Dog Park",
        state: "NY",
        address: "Rockaway Freeway & Beach 84th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "Q219",
        postalCode: "11693"
      },
      geometry: {
        coordinates: [
          -73.808621,
          40.591275
        ],
        type: "Point"
      },
      id: "b556dd69ec300a1b0fbb143135093f9b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at St. Mark's Ave, Park Place between Brooklyn Ave and Kingston Ave. Off-leash areas include all of the park except for playgrounds and other areas where dogs are expressly prohibited via signage.",
        boro: "Brooklyn",
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
      id: "b6f274f0fc5d81f705fe07fb70991480"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Pier 84 at West 44th St",
        boro: "Manhattan",
        name: "Hudson River Park Dog Run (North Chelsea)",
        Url: "http://www.hudsonriverpark.org/explore/dogrunpier84.html",
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
      id: "b8971813801204deccc341a8077b2404"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
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
      id: "ba64c34293cf54e7d95ac3e69ab3277e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
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
      id: "ba8046a46170005c39cbad8a6bfe9e71"
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
      id: "bb1978c00924d612516be0f7895f22f0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Riverside Park Dog Run North",
        Url: "http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        state: "NY",
        address: "Riverside Drive & West 105th St",
        DogRuns_Type: "Run",
        Accessible: "N",
        Prop_ID: "M071c",
        postalCode: "10025"
      },
      geometry: {
        coordinates: [
          -73.970555,
          40.801602
        ],
        type: "Point"
      },
      id: "bbaee3614ace4f8abc441d707701d3d8"
    },
    {
      type: "Feature",
      properties: {
        Notes: "The dog run at Pelham Bay Park is close to Watt Avenue and Middletown Road.  Both streets merge at the entrance to the parking lot on Middletown Road. The dog run is about 100 yards east of that point.",
        boro: "Bronx",
        name: "Pelham Bay Park Off-Leash Area",
        Url: "http://nycgovparks.org/parks/X039/map/pelhambay_dogonleasharea.pdf",
        state: "NY",
        address: "Watt Ave & Middletown Rd",
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
      id: "bbbcb4febde382ea512756f277ffe46e"
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
      id: "c073171ec59f5f222100882d3104f06e"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Enter from Margaret Corbin Circle Eastern stairs, Broadway &196th, or Bennett Ave & Broadway",
        boro: "Manhattan",
        name: "Fort Tryon Park Dog Run",
        Url: "https://www.forttryonparktrust.org/sir-williams-dog-run/",
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
      id: "c0a5faf8f7d642126dc9e564574bcf0f"
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
      id: "c1529f1d90a364d9ccee5e6861a49264"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Almeda Avenue between Beach51st Street and Beach54th Street",
        boro: "Queens",
        city: "Far Rockaway",
        name: "Rockaway Community Park Off-Leash Area",
        state: "NY",
        address: "Almeda Ave & Beach 54th St",
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
      id: "c2621e2ac31178b026a383ece923f59c"
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
      id: "c2a172864f98ba9e2672b037529a0e38"
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
      id: "c2fa21470cb8e4d2bef0c4ca60a4c0de"
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
      id: "c4749ddb7b5d0ca1216e3deb94e06ffc"
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
      id: "c4d54f4d9de24f7f4008ab6b48ecfaf0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Bronx",
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
      id: "c54bff9f84fdbcc2285b078eabcca485"
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
      id: "ce58aaf950859f65c3348086ddffcfe4"
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
      id: "cf15ccfe7b946cf51e9857a56446a067"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at Leroy Street at the northeast corner of Pier40",
        boro: "Manhattan",
        name: "Leroy Street Dog Park",
        Url: "", //"http://www.hudsonriverpark.org/explore/dogrunleroyst.html", inactive
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
      id: "cf20f19f84ee4b0c83e8c4f2013f24cf"
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
      id: "d0047f40188667f37129f2c978f9a3df"
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
        Prop_ID: "S149",
        postalCode: "10309"
      },
      geometry: {
        coordinates: [
          -74.080535,
          40.590383
        ],
        type: "Point"
      },
      id: "d7cb81e13c93ec00a2e955d991a762d0"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Riverside Park Dog Run Central",
        Url: "http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
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
      id: "dd4cc60f5c6dce7ff8d08ff218a4a89b"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Fresh Meadows",
        name: "Cunningham Park Dog Run",
        state: "NY",
        address: "193rd St & Radnor Rd",
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
      id: "e0ec1705c569354e535acd35f68b5436"
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
        Prop_ID: "S065",
        postalCode: "10306"
      },
      geometry: {
        coordinates: [
          -74.128195,
          40.556593
        ],
        type: "Point"
      },
      id: "e3ad419f43bd7aa44979b44c67c37f60"
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
      id: "e3c7f0416cc5c43659aab8312f1d0822"
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
      id: "e48fe92e10ced2a4a83ec2ee63c249ec"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        city: "Woodside",
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
      id: "e54efd3007588c918d05d3b2dd07d2ff"
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
      id: "ee0e5df679603d2deac44dcdcf5ee644"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Located at West 52nd Street & West 54th Street, between 10th &11th avenues",
        boro: "Manhattan",
        name: "De Witt Clinton Park Dog Run (2 runs)",
        state: "NY",
        address: "11th Ave & 53rd St",
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
      id: "eeda7a4687b874d40edd96c0fef877a3"
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
      id: "f2d6e7843332c01918b831d391db3860"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Manhattan",
        name: "Thomas Jefferson Park Dog Run",
        state: "NY",
        address: "East 112th St & FDR  Dr",
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
      id: "f2eb6b2255171c1de37bf2e6e9da2b9e"
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
      id: "f31669f069d6df92fc5b257f166c2a0b"
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
      id: "f5f566f2b8c4360de19d0519784262bd"
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
      id: "f6629e99bc197b05f77ea2427b2da0e3"
    },
    {
      type: "Feature",
      properties: {
        Notes: "Mainly zone #1",
        boro: "Queens",
        city: "College Point",
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
      id: "f93cc3f453cb5ae4980f7ba67510c360"
    },
    {
      type: "Feature",
      properties: {
        Notes: "",
        boro: "Queens",
        name: "Forest Park Dog Run",
        state: "NY",
        address: "Park Lane South & 85th St ",
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
      id: "f9fb021add98b7683753caf019670351"
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
      id: "fbc11e8e67822111845cf9e6e50c58ae"
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
      id: "fc46d10e93845301aa78e655aa785cdd"
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
        Prop_ID: "S030",
        postalCode: "10314"
      },
      geometry: {
        coordinates: [
          -74.162258,
          40.604621
        ],
        type: "Point"
      },
      id: "ff34358a41eae7a670c8141eadd266d8"
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
  maxZoom: 18,
  minZoom: 9,
  center: [-73.996, 40.71],
  zoom: 9.76,
  buffer: 256,
  scrollZoom: true,
  "source-layer": "nycparks-ad16j1"
});

map.on("load", function (e) {
  map.addControl(new mapboxgl.NavigationControl());
  buildLocationList(runs);
  prepNavPanel();

  let foundHeaders = document.getElementsByClassName("heading");
  if (foundHeaders[0]) {
    foundHeaders[0].addEventListener("click", function (e) {
      e.preventDefault();
      resetLocationList();
      setBoroView("all");

    });
  }

  // set curser to pointer on icon mousehover
  map.on("mousemove", function (e) {
    var iconsUnderMouse = map.queryRenderedFeatures(e.point, {
      layers: ["nycparks-ad16j1"]
    });
    map.getCanvas().style.cursor = iconsUnderMouse.length ? "pointer" : "";
  });

  // select icon if clicked on
  map.on("click", function (e) {
    var dogIconsClicked = map.queryRenderedFeatures(e.point, {
      layers: ["nycparks-ad16j1"]
    });

    if (!dogIconsClicked.length) return;

    // reset active UI shading on sidebar listing
    var activeItem = document.getElementsByClassName("active");
    if (activeItem[0]) {
      activeItem[0].classList.remove("active");
    }
    var location = dogIconsClicked[0];
    var listing = document.getElementById(
      "listing-" + location.properties.Prop_ID
    );
    listing.classList.add("active");

    // fly camera to location and spawn popup
    flyToRun(location);
    createPopUp(location);
  });
});

function filterLocationList(boroCode) {
  var bCodeFirstChar = boroCode.slice(0, 1).toUpperCase();
  var listings = document.getElementsByClassName("item");

  for (var listing of listings) {
    listing.classList = ["item"];
    var firstChar = listing.id.split("-")[1].slice(0, 1);
    if (firstChar !== bCodeFirstChar) {
      listing.classList = ["item"];
      listing.classList.add("inactive");
    }
  }
}

function resetLocationList() {
  var listings = document.getElementsByClassName("item");

  for (var listing of listings) {
    listing.classList = ["item"];
  }
}

function flyToRun(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    speed: 1.3,
    curve: 1.1,
    zoom: 16
  });
}

function flyToBoro(view) {
  map.flyTo({
    center: view.coordinates,
    speed: 1.3,
    curve: 1.1,
    zoom: view.zoom
  });
}

var boroView = {};

function setBoroView(boroID) {
  clearPopup();
  switch (boroID) {
    case "mh":
      boroView = {
        boro: "Manhattan",
        coordinates: [-73.952403, 40.793146],
        zoom: 10.89
      };
      break;
    case "si":
      boroView = {
        boro: "Staten Island",
        coordinates: [-74.142089, 40.57422],
        zoom: 11.25
      };
      break;
    case "xb":
      boroView = {
        boro: "Bronx",
        coordinates: [-73.898973, 40.852577],
        zoom: 11.6
      };
      break;
    case "qs":
      boroView = {
        boro: "Queens",
        coordinates: [-73.816968, 40.685367],
        zoom: 10.63
      };
      break;
    case "bk":
      boroView = {
        boro: "Brooklyn",
        coordinates: [-73.963618, 40.654864],
        zoom: 10.9
      };
      break;
    case "all":
      boroView = {
        boro: "All",
        coordinates: [-73.996, 40.71],
        zoom: 9.76,
        pitch: 6,
        bearing: 0
      };
      break;
    default:
      break;
  }
  flyToBoro(boroView);
  map.setFilter("nycparks-ad16j1", ["==", "boro", boroView.boro]);
}

function clearPopup() {
  let popUps = document.getElementsByClassName("mapboxgl-popup");
  if (popUps[0]) popUps[0].remove();
}

function createPopUp(currentFeature) {
  clearPopup();

  let notesEl = currentFeature.properties.Notes
    ? "<h4>" + currentFeature.properties.Notes + "</h4>"
    : "";

  let linkIcon = "<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>"

  let extLink = currentFeature.properties.Url ? "<a target=\"_blank\" href=\"" + currentFeature.properties.Url + "\"><h3>" + linkIcon + "</h3></a>" : ""

  let popup = new mapboxgl.Popup({
    closeOnClick: false,
    anchor: "top",
    offset: [0, 20]
  })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
    '<div id="popup" class="mapboxgl-popup"><div><h3>' +
    currentFeature.properties.name +
    "</h3>" +
    "<h4>" +
    currentFeature.properties.address +
    "</h4>" +
    notesEl +
    "</div>"
    )
    .addTo(map);
}

function prepNavPanel() {
  var boroIDs = ["mh", "bk", "qs", "xb", "si", "all"];

  boroIDs.forEach(function (boroID) {
    let buttonEl = document.getElementById(boroID);
    let id = buttonEl.id;

    buttonEl.onclick =
      id !== "all"
        ? function (e) {
          e.preventDefault();
          filterLocationList(id);
          setBoroView(id);
        }
        : function (e) {
          e.preventDefault();
          resetLocationList();
          setBoroView("all");
        };
  });
}

var runList = runs.features;

function buildLocationList(data) {
  let runList = data.features;
  let counter = 0;
  // Iterate through the list of runs
  for (var run of runList) {
    var props = run.properties;

    // Select listing container to append new div
    // with class 'item' for each run
    let listings = document.getElementById("listings");
    let listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + props.Prop_ID;

    // New span with class 'title' for each run,
    // fill it with run name/address
    let link = listing.appendChild(document.createElement("span"));
    link.className = "title";
    link.dataPosition = counter;

    let linkIcon = "<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>"
    let extLink = props.Url ? "<a class=\"z8\" target=\"_blank\" href=\"" + props.Url + "\">" + linkIcon + "</a>" : ""
    link.innerHTML = props.name + extLink;

    // New div with class 'details' for each run,
    // fill it with the address and boro
    let details = listing.appendChild(document.createElement("div"));
    details.innerHTML = props.address + ", " + props.boro;

    link.addEventListener("click", function (e) {
      // Update bind clicked listing to its data
      let clickedListing = runList[link.dataPosition];
      // 1. Open popup
      createPopUp(clickedListing);
      // 2. Fly to the point
      flyToRun(clickedListing);
      // 3. Highlight sidebar listing (resetting previous)
      let activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      link.parentNode.classList.add("active");
    });

    counter++;
  }
}
