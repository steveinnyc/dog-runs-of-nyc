"use strict";

// raw data source: https://data.cityofnewyork.us/Recreation/Directory-of-Dog-Runs-and-Off-Leash-Areas/ipbu-mtcs/data

// converted to geoJSON using Google GeoCoding API and Mapbox Studio
// https://developers.google.com/maps/documentation/geocoding/start
// https://www.mapbox.com/mapbox-studio/

var runs = {
  type: "FeatureCollection",
  features: [
    {
      geometry: {
        coordinates: [-73.9037535, 40.8769714],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "3025 Bailey Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Siren Slope Park Off-Leash Area",
        Notes: "Located at Bailey Avenue and West 230 Street",
        Prop_ID: "X150G",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9254411, 40.8331268],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1055 Jerome Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Mullaly Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X034",
        state: "NY",
        postalCode: "10452"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9390208, 40.7160683],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Olive Street & Maspeth Avenue",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Cooper Park Dog Run",
        Notes: "",
        Prop_ID: "B025",
        state: "NY",
        postalCode: "11211"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.905232,
          40.863532],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "West Fordham Rd & Dr Martin Luther King Jr Blvd",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Devoe Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X013",
        state: "NY",
        postalCode: "10468"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8970068, 40.8978911],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Broadway & 252 Street",
        city: "Bronx",
        DogRuns_Type: "Run",
        name: "Van Cortlandt Park Dog Run",
        Notes: "",
        Prop_ID: "X092",
        state: "NY",
        postalCode: "10468"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8977573, 40.8365409],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1596-1672 Crotona Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Crotona Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X010",
        state: "NY",
        postalCode: "10457"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8812239, 40.8100473],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Drake Park S & Hunts Point Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Joseph Rodham Drake Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X015",
        state: "NY",
        postalCode: "10474"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.89273229999999, 40.6317749],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Seaview Ave & East 93 St",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Canarsie Park Off-Leash Area",
        Notes:
        "All areas off-leash excluding the playground, ballfields, and Natural Areas.",
        Prop_ID: "B018",
        state: "NY",
        postalCode: "11236"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8977573, 40.8365409],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1596-1672 Crotona Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Hylan Park Off-Leash Area",
        Notes:
        "All areas of the park are off-leash during designated hours except for playgrounds and other areas where dogs are expressly prohibited via signage.",
        Prop_ID: "X010",
        state: "NY",
        postalCode: "10457"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.92056, 40.88026199999999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "2570 Independence Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Henry Hudson Park Off-Leash Area",
        Notes: "Located at Kappock St & Independence Ave",
        Prop_ID: "X080",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9132238, 40.8595867],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Sedgwick Avenue & Hall of Fame Terrace",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "University Woods Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X051",
        state: "NY",
        postalCode: "10468"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0206153, 40.6181103],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "900-998 86th St",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Dyker Beach Park Dog Run",
        Notes: "Located at 7th Avenue & 86th Street",
        Prop_ID: "B028",
        state: "NY",
        postalCode: "11228"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9730191, 40.5760571],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Sea Breeze Avenue & West 5th Street",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Asser Levy Park Off-Leash Area",
        Notes: "",
        Prop_ID: "B080",
        state: "NY",
        postalCode: "11224"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8210182, 40.8505689],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Watt Ave & Middletown Road",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Pelham Bay Park Off-Leash Area",
        Notes:
        "Located about 100 yards east Watt Avenue and Middletown Road",
        Prop_ID: "X039",
        state: "NY",
        Url:
        "http://nycgovparks.org/parks/X039/map/pelhambay_dogonleasharea.pdf",
        postalCode: "10465"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.911816, 40.8957829],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "West 232nd Street & Independence Avenue",
        city: "Bronx",
        DogRuns_Type: "Run",
        name: "Seton Park Dog Run",
        Notes: "",
        Prop_ID: "X201",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.90745799999999, 40.8993954],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Riverdale Avenue at Henry Hudson Parkway",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Frank S. Hackett Park Dog Run",
        Notes: "",
        Prop_ID: "X110A",
        state: "NY",
        postalCode: ""
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9908643, 40.7000793],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "195 Cadman Plaza West",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Brooklyn War Memorial Off-Leash Area",
        Notes: "Located at Cadman Plaza Park, Cadman Plaza West & East & Prospect Street ",
        Prop_ID: "B113A",
        state: "NY",
        postalCode: "11201"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.90798269999999, 40.8372102],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Clay Ave & E 170 St",
        city: "Bronx",
        Country: "United states",
        DogRuns_Type: "Off-Leash",
        name: "Claremont Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X008",
        state: "NY",
        postalCode: "10457"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9165713, 40.8869086],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Douglas Avenue & West 235 Street",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Wallenberg Forest Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X259",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9209755, 40.8795233],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Palisade Avenue & Independence Avenue",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Spuyten Duyvil Shorefront Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X091",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.920799, 40.878349],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Walton Ave & Grand Concourse",
        city: "Bronx",
        DogRuns_Type: "Run",
        name: "Franz Sigel Park Dog Run",
        Notes:
        "Located at center of the park, just north of the ballfields which would line up with around 155th Street.",
        Prop_ID: "X047",
        state: "NY",
        postalCode: "10451"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8913823, 40.6523754],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Glenwood Rd & Louisiana Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Breukelen Park Off-Leash Area",
        Notes: "All areas off-leash excluding the playground and ballfields",
        Prop_ID: "B247",
        state: "NY",
        postalCode: "12207"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9011007, 40.8479713],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Valentine Ave & E Tremont Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Richman (Echo) Park Off-Leash Area",
        Notes: "",
        Prop_ID: "X017",
        state: "NY",
        postalCode: "10457"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8785843, 40.8766444],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "3225 Reservoir Oval East",
        city: "Bronx",
        DogRuns_Type: "Run",
        name: "Williamsbridge Oval Dog Run",
        Notes: "",
        Prop_ID: "X104",
        state: "NY",
        postalCode: "10467"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9197214, 40.8840989],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "254 Palisade Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Riverdale Park Off-Leash Area",
        Notes: "Located at Palisade Avenue from West 232 Street to West 254 Street",
        Prop_ID: "X142",
        state: "NY",
        postalCode: "10463"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.000059, 40.692750],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "334 Furman St",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Pier 6 Dog Run",
        Notes: "",
        Prop_ID: "B431",
        state: "NY",
        postalCode: "11201"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.93161119999999, 40.6797975],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "70 Chauncey St",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Fulton Park Off-Leash Area",
        Notes: "",
        Prop_ID: "B038",
        state: "NY",
        postalCode: "11223"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9524204, 40.7187989],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Bayard St & Union Ave",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "McCarren Park Dog Run",
        Notes: "",
        Prop_ID: "B058",
        state: "NY",
        postalCode: "11211"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.012699, 40.7295628],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "353 West St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Leroy Street Dog Park",
        Notes: "Located at Leroy Street at the northeast corner of Pier 40",
        Prop_ID: "M",
        state: "NY",
        Url: "http://www.hudsonriverpark.org/explore/dogrunleroyst.html",
        postalCode: "10014"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1622581, 40.6046212],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1 Eton Place",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Willowbrook Park Off-Leash Area",
        Notes: "Located at Archery Range Field",
        Prop_ID: "R030",
        state: "NY",
        postalCode: "10314"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0916949, 40.6259216],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "700 Victory Blvd",
        city: "Staten Island",
        DogRuns_Type: "Run",
        name: "Silver Lake Park Dog Run",
        Notes: "",
        Prop_ID: "R022",
        state: "NY",
        postalCode: "10301"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8507422, 40.7918726],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "119th St & Poppenhusen Ave",
        city: "College Point",
        DogRuns_Type: "Off-Leash",
        name: "MacNeil Park Off-Leash Area",
        Notes: "Off-leash is mainly zone #1",
        Prop_ID: "Q009",
        state: "NY",
        postalCode: "11356"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9081131, 40.7461827],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Woodside Ave & 56th St",
        city: "Woodside",
        DogRuns_Type: "Run",
        name: "Windmuller Park Dog Run (Doughboy Plaza)",
        Notes: "",
        Prop_ID: "Q031A",
        state: "NY",
        postalCode: "11377"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.92513029999999, 40.856006],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "2682-2698 Amsterdam Ave",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Highbridge Park Dog Run",
        Notes: "Located at Amsterdam Ave & Fort George Ave",
        Prop_ID: "M037",
        state: "NY",
        Url: "http://www.highbridgek9club.org/",
        postalCode: "10040"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.943596, 40.7232661],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "138 Driggs Ave",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "McGolrick Park Dog Run",
        Notes: "Located at North Henry Street & Driggs Avenue",
        Prop_ID: "B114",
        state: "NY",
        postalCode: "11222"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.91646999999999, 40.7846183],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Shore Blvd & 20th Rd",
        city: "Queens",
        DogRuns_Type: "Off-Leash",
        name: "Ralph DeMarco Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q004A",
        state: "NY",
        postalCode: "11105"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.87644399999999, 40.7215613],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Juniper Blvd N & 80th St",
        city: "Middle Village",
        DogRuns_Type: "Off-Leash",
        name: "Juniper Valley Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q102",
        state: "NY",
        postalCode: "11379"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.97988959999999, 40.79061919999999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Riverside Drive & West 87th St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Riverside Park Dog Run Central",
        Url:
        "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        Prop_ID: "M071b",
        Notes: "",
        state: "NY",
        postalCode: "10024"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9857008, 40.78032109999999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Riverside Drive & West 72nd St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Riverside Park Dog Run South",
        Url: "http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        Notes: "",
        Prop_ID: "M071a",
        state: "NY",
        postalCode: "10023"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.00086189999999, 40.7088079],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Dover Street & Water Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Fish Bridge Park Dog Run",
        Notes: "",
        Prop_ID: "M291",
        state: "NY",
        postalCode: "10038"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9402928, 40.76553579999999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Vernon Blvd. & 34th Ave",
        city: "Queens",
        DogRuns_Type: "Off-Leash",
        name: "Rainey Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q048",
        state: "NY",
        postalCode: "11106"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.948571, 40.6753677],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "725 St Marks Ave",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Brower Park",
        Notes:
        "Located at at St. Mark's Ave., Park Pl. bet. Brooklyn Ave. and Kingston Ave. All areas off-leash during designated hours except for playgrounds and other areas where dogs are expressly prohibited via signage.",
        Prop_ID: "B012",
        state: "NY",
        postalCode: "11216"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0164348, 40.6330809],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "67th Street & 7th Avenue",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Leif Ericson Park Off-Leash Area",
        Notes: "",
        Prop_ID: "B052",
        state: "NY",
        postalCode: "11220"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0186367, 40.6270753],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "7th Ave & 75th St",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "McKinley Park Off-Leash Area",
        Notes: "Located at Fort Hamilton Parkway, 7th Avenue, 73rd Street to 75th Street",
        Prop_ID: "B060",
        state: "NY",
        postalCode: "11228"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9717106, 40.7820454],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Central Park West & West 81st Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Theodore Roosevelt Park Dog Run",
        Notes: "",
        Prop_ID: "M053",
        state: "NY",
        postalCode: "10024"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.92560069999999, 40.668465],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Eastern Parkway & Buffalo Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Lincoln Terrace Park Off-Leash Area",
        Notes: "Located at East New York Avenue",
        Prop_ID: "B054",
        state: "NY",
        postalCode: "11213"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.97426999999999, 40.7354944],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "East 112th Street & FDR Drive",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Thomas Jefferson Park Dog Run",
        Notes: "",
        Prop_ID: "M047",
        state: "NY",
        postalCode: "10029"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9124939, 40.8093423],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Cypress Ave & East 143rd St",
        city: "Bronx",
        DogRuns_Type: "Run",
        name: "St. Mary's Dog Run",
        Notes: "",
        Prop_ID: "X045",
        state: "NY",
        postalCode: "10455"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8451089, 40.734277],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "64th Ave & Grand Central Parkway",
        city: "Forest Hills",
        DogRuns_Type: "Run",
        name: "Underbridge Playground Dog Run",
        Notes: "Located at 64th Avenue/64th Road on Grand Central Parkway service road",
        Prop_ID: "Q451",
        state: "NY",
        postalCode: "11375"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9478369, 40.7466699],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "21st St & 45th Road",
        city: "Long Island City",
        DogRuns_Type: "Run",
        name: "John F Murray Playground Dog Run",
        Notes: "Located at southeastern side of the park",
        Prop_ID: "Q141",
        state: "NY",
        postalCode: "11101"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0805351, 40.5903838],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Nugent Ave & Quintard St",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Ocean Breeze Park Off-Leash Area",
        Notes: "",
        Prop_ID: "R149",
        state: "NY",
        postalCode: "10309"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.95686959999999, 40.7602215],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Bobby Wagner Walk & E 63rd Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Andrew Haswell Green Dog Park",
        Notes: "Located at Pedestrian Bridge",
        Prop_ID: "M108Q1",
        state: "NY",
        postalCode: "10065"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9895852, 40.7415481],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "5th Avenue & East 23rd St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Madison Square Park Dog Run",
        Notes: "",
        Prop_ID: "M052",
        state: "NY",
        postalCode: "10010"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.937529, 40.6085605],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Fillmore Ave & Marine Parkway",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Marine Park Dog Run",
        Notes:
        "All areas off-leash excluding the playgrounds, ballfields, and Natural Areas.",
        Prop_ID: "B057",
        state: "NY",
        postalCode: "11234"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9094013, 40.88137770000001],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Riverdale Ave & W 231 St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Ewen Park Dog Run",
        Notes: "",
        Prop_ID: "X019",
        state: "NY",
        postalCode: "10468"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9932741, 40.7677526],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "11th Ave & 53rd St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "De Witt Clinton Park Dog Run (2 runs)",
        Notes: "Located at West 52nd Street & West 54th Street, between 10th &1 1th avenues",
        Prop_ID: "M022",
        state: "NY",
        postalCode: "10019"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9705556, 40.8016022],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Riverside Drive & West 105th St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Riverside Park Dog Run North",
        Url:
        "http: //nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf",
        Prop_ID: "M071c",
        Notes: "",
        state: "NY",
        postalCode: "10025"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.79484339999999, 40.7865319],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Cross Island Pkwy & Utopia Parkway",
        city: "Whitestone",
        DogRuns_Type: "Run",
        name: "Little Bay Park Dog Run",
        Notes: "Located at north side of the Cross Island Parkway & Utopia Parkway",
        Prop_ID: "Q010A",
        state: "NY",
        postalCode: "11357"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.7847982, 40.5977168],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Almeda Ave & Beach 54th St",
        city: "Far Rockaway",
        DogRuns_Type: "Off-Leash",
        name: "Rockaway Community Park Off-Leash Area",
        Notes: "Located at Almeda Avenue between Beach 51st Street and Beach 54th Street",
        Prop_ID: "Q371",
        state: "NY",
        postalCode: "11691"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.00155699999999, 40.7640257],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "555 12th Ave",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Hudson River Park Dog Run (North Chelsea)",
        Notes: "Pier 84 at West 44th Street",
        Prop_ID: "M",
        state: "NY",
        Url: "http: //www.hudsonriverpark.org/explore/dogrunpier84.html",
        postalCode: "10036"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9307651, 40.8606572],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "West 196th St & Broadway",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Fort Tryon Park Dog Run",
        Notes:
        "Enter from Margaret Corbin Circle Eastern stairs, Broadway & 196th, or Bennett Ave & Broadway",
        Prop_ID: "M029",
        state: "NY",
        Url: "http: //www.ftdog.org/",
        postalCode: "10040"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1281958, 40.5565933],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Buffalo St & Hylan Boulevard",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Amundsen Trail Off-Leash Area",
        Notes: "",
        Prop_ID: "R065",
        state: "NY",
        postalCode: "10306"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.18823569999999, 40.520195],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "420 Cornelia Ave",
        city: "Staten Island",
        DogRuns_Type: "Run",
        name: "Wolfe's Pond Park Dog Run",
        Notes: "Located to left of Cornelia Avenue",
        Prop_ID: "R031",
        state: "NY",
        postalCode: "10312"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1482626, 40.5355062],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "366 Tennyson Dr",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Crescent Beach Park Off-Leash Area",
        Notes:
        "Located at meadow area leading to beach, Tennyson Drive & Glover Avenue",
        Prop_ID: "R135",
        state: "NY",
        postalCode: "10312"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.94113281482572,
          40.84613691056902],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Fort Washington & West 173rd Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "J. Hood Wright Park Dog Run",
        Prop_ID: "M099",
        state: "NY",
        postalCode: "10033"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.7693391, 40.7719415],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "214th Place & 34th Ave",
        city: "Bayside",
        DogRuns_Type: "Off-Leash",
        name: "Crocheron Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q012",
        state: "NY",
        postalCode: "11361"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1431655, 40.5554689],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "190 Timber Ridge Dr",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Evergreen Park Off-Leash Area",
        Notes: "Located at Evergreen Street",
        Prop_ID: "R121",
        state: "NY",
        postalCode: "10308"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.94651569999999, 40.6898317],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "670 Lafayette Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Herbert Von King Park Off-Leash Area",
        Notes: "Located at Marcy Avenue & Lafayette Avenue",
        Prop_ID: "B088",
        state: "NY",
        postalCode: "11216"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9697163, 40.7488077],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "East 42nd St & 1st Ave",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Robert Moses Park Dog Run",
        Notes: "",
        Prop_ID: "M158",
        state: "NY",
        postalCode: "10016"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.922991, 40.776813],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "19 19th St",
        city: "Queens",
        DogRuns_Type: "Off-Leash",
        name: "Astoria Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q004",
        state: "NY",
        postalCode: "11105"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1970714, 40.51260389999999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Seguine Avenue & Johnston Terrace",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Lemon Creek Park Off-Leash Area",
        Notes: "Located just below playground",
        Prop_ID: "R079",
        state: "NY",
        postalCode: "10309"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8885823, 40.762858],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "25th Ave & 80th St",
        city: "East Elmhurst",
        DogRuns_Type: "Off-Leash",
        name: "La Guardia Landing Lights Off-Leash Area",
        Notes: "",
        Prop_ID: "Q393D",
        state: "NY",
        postalCode: "11370"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.99246529999999, 40.711753],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Pike St & Monroe St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Coleman Oval Park Dog Run",
        Notes: "",
        Prop_ID: "M019",
        state: "NY",
        postalCode: "10022"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.97351309999999, 40.678638],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Flatbush Avenue & Prospect Park West",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Prospect Park Off-Leash Area",
        Notes:
        "At Middle & Upper Long Meadow (excludes ballfield area in the Lower Long Meadow), Nethermead, Peninsula",
        Prop_ID: "B073",
        state: "NY",
        postalCode: "11225"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.95725809999999, 40.806928],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Morningside Avenue & West 118th St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Morningside Park Dog Run",
        Notes: "",
        Prop_ID: "M056",
        state: "NY",
        postalCode: "10026"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.2116715, 40.5352541],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Ramona Ave & Maguire Ave",
        city: "Staten Island",
        DogRuns_Type: "Run",
        name: "Bloomingdale Park Dog Run",
        Notes: "Located at Maguire Avenue behind athletic fields closer to Romona Avenue ",
        Prop_ID: "R106",
        state: "NY",
        postalCode: "10309"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9323263, 40.7464921],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "43rd Street & Skillman Avenue",
        city: "Long Island City",
        DogRuns_Type: "Run",
        name: "Torsney/Lou Lodati Playground Dog Run",
        Notes: "",
        Prop_ID: "Q340",
        state: "NY",
        postalCode: "11104"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9447823, 40.7749468],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "East 86th Street & East End Ave",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Carl Schurz Park Dog Run",
        Notes:
        "Located at East End Avenue to East River from Gracie Square (East 84th Street) to89th Street",
        Prop_ID: "M081",
        state: "NY",
        postalCode: "10028"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.94259509999999, 40.5768226],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Ocean Ave & Mackenzie St",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Manhattan Beach Dog Run",
        Notes: "Located at Ocean Ave & Mackenzie St",
        Prop_ID: "B251",
        state: "NY",
        postalCode: "11235"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9430016, 40.802546],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Madison Ave & East 120th St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Marcus Garvey Park Dog Run",
        Notes: "",
        Prop_ID: "M058",
        state: "NY",
        postalCode: "10027"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.96409, 40.753123],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "454 E 51st St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Peter Detmold Park Dog Run",
        Notes: "Located at West of FDR Drive, between East 49th & East 51st streets",
        Prop_ID: "M108N",
        state: "NY",
        postalCode: "10022"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.77554789999999, 40.7259597],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "193rd St & Radnor Road",
        city: "Fresh Meadows",
        DogRuns_Type: "Run",
        name: "Cunningham Park Dog Run",
        Notes: "",
        Prop_ID: "Q021",
        state: "NY",
        postalCode: "11366"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.95143449999999, 40.714311],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "462 Union Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Macri Square Park Off-Leash Area",
        Notes: "Located at Union Turnpike & Metropolitan Avenue",
        Prop_ID: "B223S",
        state: "NY",
        postalCode: "11211"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8952338, 40.8452505],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "E 175 St to E Tremont Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "Tremont Park Off-Leash Area",
        Notes:
        "All areas of the park are off-leash during designated hours except for playgrounds and other areas where dogs are expressly prohibited via signage.",
        Prop_ID: "X010A",
        state: "NY",
        postalCode: "10457"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.7674366, 40.5987623],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "701 Bay & 32nd St",
        city: "Far Rockaway",
        DogRuns_Type: "Off-Leash",
        name: "Bayswater Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q007",
        state: "NY",
        postalCode: "11691"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9837797, 40.6721909],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "4th St & 5th Ave",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "J.J. Byrne Dog Park",
        Notes: "",
        Prop_ID: "B111",
        state: "NY",
        postalCode: "11215"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9912281, 40.7358984],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "15th Street & Union Square West",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Union Square Dog Run",
        Notes: "",
        Prop_ID: "M089",
        state: "NY",
        postalCode: "10003"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.979287, 40.7117999],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "397 FDR Drive",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Corlears Hook Park Dog Run",
        Notes:
        "Located at Cherry Street and Jackson Street (on the north side of the park building)",
        Prop_ID: "M017",
        state: "NY",
        postalCode: "10002"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.89889416798754, 40.741291412683694],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Queens Boulevard & 65 Place",
        city: "Woodside",
        DogRuns_Type: "Run",
        name: "Sherry Park Dog Run",
        Notes: "",
        Prop_ID: "Q341C",
        state: "NY",
        postalCode: "11377"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9986, 40.692299],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "27 State St",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Adam Yauch Park Dog Run",
        Notes:
        "Located at Columbia Place & state Street. named in memory of Beastie Boys' founding member.",
        Prop_ID: "B223DA",
        state: "NY",
        postalCode: "11201"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9432897, 40.8260804],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "St Nicholas Ave & St. Nicholas Terrace",
        city: "New York",
        DogRuns_Type: "Run",
        name: "St. Nicholas Park Dog Run",
        Notes: "",
        Prop_ID: "M077",
        state: "NY",
        postalCode: "10030"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9995337, 40.7311498],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "59 Washington Square West",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Washington Square Park Dog Run",
        Notes:
        "Located at 5th Avenue, Waverly Place, West4th Street, between McDougal & Thompson streets, south side of thepark (behind building)",
        Prop_ID: "M098",
        state: "NY",
        postalCode: "10012"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8776776, 40.7430594],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Judge Street & Whitney Avenue",
        city: "Elmhurst",
        DogRuns_Type: "Run",
        name: "Veteran's Grove Dog Run",
        Notes: "Located at south side of park",
        Prop_ID: "Q013",
        state: "NY",
        postalCode: "11373"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1055512, 40.6179186],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1150 Clove Road",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Clove Lakes Park Off-Leash Area",
        Notes:
        "Located at Brookside Avenue between Alpine Court & Kingsley Avenue (lawn area)",
        Prop_ID: "R005",
        state: "NY",
        postalCode: "10301"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.7612272, 40.6594589],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Springfield Blvd & 147th Ave",
        city: "Springfield Gardens",
        DogRuns_Type: "Off-Leash",
        name: "Springfield Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q107",
        state: "NY",
        postalCode: "11413"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.84793940000002, 40.7267379],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "106-2168th Ave",
        city: "Forest Hills",
        DogRuns_Type: "Off-Leash",
        name: "Yellowstone Park Off-Leash Area",
        Notes:
        "Located at 68 Road & Yellowstone Boulevard; Off-leash hours are 6am to 9am only",
        Prop_ID: "Q425",
        state: "NY",
        postalCode: "11375"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.967338, 40.716803],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "1 Grand Street",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Grand Ferry Park Off-Leash Area",
        Notes: "",
        Prop_ID: "B401",
        state: "NY",
        postalCode: "11221"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0356001, 40.6397175],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "68th Street & Shore Road",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "Owls Head Park Dog Run",
        Notes: "",
        Prop_ID: "B066",
        state: "NY",
        postalCode: "11220"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0029478, 40.6813256],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Hicks St & Woodhull St",
        city: "Brooklyn",
        DogRuns_Type: "Run",
        name: "DiMattina Park Dog Run",
        Notes: "",
        Prop_ID: "B223B",
        state: "NY",
        postalCode: "11231"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0604254, 40.6063527],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Bay St & N Rd",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Arthur Von Briesen Park Off-Leash Area",
        Notes: "Located at lawn area, mid-park right side",
        Prop_ID: "R059",
        state: "NY",
        postalCode: "10305"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9597866, 40.7430942],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "51st Ave & Center Blvd",
        city: "Long Island City",
        DogRuns_Type: "Run",
        name: "Hunter's Point South Park Dog Run",
        Notes: "",
        Prop_ID: "Q471",
        state: "NY",
        postalCode: "11101"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.00183299999999, 40.646368],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "7th Ave & 43rd St",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Sunset Park Off-Leash Area",
        Notes:
        "Off-leash at Sunset Park Oval lawn area only, center of park. Located at 44th Street, 41st Street, 6th Avenue",
        Prop_ID: "B087",
        state: "NY",
        postalCode: "11232"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.008505, 40.677636],
        type: "Point"
      },
      properties: {
        address: "85 Richards St",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Coffey Park Off-Leash Area",
        Notes:
        "Located at King Street, Richards Street, and Verona Street at Dwight and Pioneer Streets",
        Prop_ID: "B077",
        state: "NY",
        postalCode: "11231"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0074286, 40.7481803],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "11th Ave & 22nd Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Chelsea Waterside Park Dog Run",
        Notes: "Administered by the Hudson River Park Trust",
        Prop_ID: "M",
        state: "NY",
        Url: "http: //www.hudsonriverpark.org/explore/dogruncw.html",
        postalCode: "10011"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1013815, 40.6384563],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "406 Prospect Ave",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Allison Park Off-Leash Area",
        Notes:
        "Located at field at the end of the trail bordered by Prospect Avenue, Sailors Snug Harbor Cemetery, and the pond.",
        Prop_ID: "R052",
        state: "NY",
        postalCode: "10301"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.79841259999999, 40.67883810000001],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Lakeview Lane & Foch Boulevard",
        city: "Jamaica",
        DogRuns_Type: "Off-Leash",
        name: "Baisley Pond Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q005",
        state: "NY",
        postalCode: "11434"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9227238, 40.7960326],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "20 Randalls Island Park",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Randalls Island Park Off-Leash Area",
        Notes:
        "Off-leash hours for the island are before 9am and after 9pm except for areas where dogs are expressly prohibited via signage.",
        Prop_ID: "M104",
        state: "NY",
        postalCode: "10035"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [
          -73.97484626838693,
          40.691517801358344
        ],
        type: "Point"
      },
      type: "Feature",
      properties: {
        name: "Fort Greene Park Off-Leash Area",
        DogRuns_Type: "Off-Leash",
        address: "Willoughby Ave & Washington Park",
        city: "Brooklyn",
        state: "NY",
        Notes: "Off-leash before 9am and after 9pm",
        Prop_ID: "BBFG99",
      }
    },
    {
      "geometry": {
        "coordinates": [
          -73.988895,
          40.703701
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        Prop_ID: "BB999",
        name: "Brooklyn Bridge Dog Run",
        address: "385 Plymouth St",
        city: "Brooklyn",
        state: "NY",
        DogRuns_Type: "Off-Leash",
        Notes: ""
      }
    },
    {
      geometry: {
        coordinates: [-73.92876224130391,
          40.868984133254116],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Dyckman Street & Hudson River",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Dyckman Fields",
        Notes: "Located north of La Marina and docks",
        Prop_ID: "M042",
        state: "NY",
        postalCode: "10452"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9472995, 40.7564396],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Vernon Blvd & 41st Ave",
        city: "Long Island City",
        DogRuns_Type: "Off-Leash",
        name: "Queensbridge Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q104",
        state: "NY",
        postalCode: "11101"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1635847, 40.6159957],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Lamberts Lane & Fahy Avenue",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Father Macris Park Off-Leash Area",
        Notes: "Located on lawn area beyond ball field",
        Prop_ID: "R075A",
        state: "NY",
        postalCode: "10314"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.038722380981,
          40.615516962996686],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Shore Road & 4th Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Shore Road Park Off-Leash Area",
        Notes: "Located at Shore Road, 4th Avenue to 69th Street ",
        Prop_ID: "B082",
        state: "NY",
        postalCode: "11209"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.7408079, 40.7385913],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Grand Central Parkway & Kingsbury Ave",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Alley Pond Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q001",
        state: "NY",
        postalCode: "11364"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.86016289999999, 40.6964],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Park Lane South & 85th Street ",
        city: "Queens",
        DogRuns_Type: "Run",
        name: "Forest Park Dog Run",
        Notes: "",
        Prop_ID: "Q015",
        state: "NY",
        postalCode: ""
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9737328, 40.6669344],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "95 Prospect Park West",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Prospect Park Dog Beach",
        Notes: "",
        Prop_ID: "B083",
        state: "NY",
        postalCode: "11215"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.897835, 40.8652159],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "2550 Jerome Ave",
        city: "Bronx",
        DogRuns_Type: "Off-Leash",
        name: "St. James Park Off-Leash Area",
        Notes:
        "Located at 92nd & Jerome Avenue. St. James Park closes at 9pm and opens at 7am. Therefore, the off-leash policy only applies between 7am and 9am",
        Prop_ID: "X044",
        state: "NY",
        postalCode: "10468"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.92718169999999, 40.8653866],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Dyckman Street & Hudson River",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Dyckman Fields",
        Notes: "",
        Prop_ID: "M042",
        state: "NY",
        postalCode: "10452"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.1635847, 40.6159957],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Lamberts Lane & Fahy Avenue",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "Father Macris Park Off-Leash Area",
        Notes: "Located at lawn area beyond ball field",
        Prop_ID: "R075A",
        state: "NY",
        postalCode: "10314"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.98011699999999, 40.7705407],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "63rd St & Central Park West",
        city: "New York",
        DogRuns_Type: "Off-Leash",
        name: "Central Park Off-Leash Area",
        Notes:
        "Though there are no enclosed dog runs, there are 23 particularly dog-friendly areas scattered throughout the Park.",
        Prop_ID: "M010",
        state: "NY",
        postalCode: "10023"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.94469529999999, 40.8410522],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "165th Street & Riverside Drive",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Ft. Washington Park Dog Run",
        Notes: "",
        Prop_ID: "M028",
        state: "NY",
        postalCode: "10032"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0348607, 40.6113471],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Shore Road & 4th Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Shore Road Park Off-Leash Area",
        Notes: "Located at Shore Road, 4th Avenue to 69th Street ",
        Prop_ID: "B082",
        state: "NY",
        postalCode: "11209"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9625216, 40.6713871],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Eastern Parkway & Mary Pinkett Ave",
        city: "Brooklyn",
        DogRuns_Type: "Off-Leash",
        name: "Mount Prospect Park Off-Leash Area",
        Notes: "Located at Eastern Parkway between Washington and Underhill avenues",
        Prop_ID: "B159",
        state: "NY",
        postalCode: "11238"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.98032959999999, 40.7262882],
        type: "Point"
      },
      properties: {
        Accessible: "Y",
        address: "Avenue B & East 9th St",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Tompkins Square Dog Run",
        Notes: "",
        Prop_ID: "M088",
        state: "NY",
        postalCode: "10009"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-74.0740052, 40.5900024],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Pearsall St",
        city: "Staten Island",
        DogRuns_Type: "Off-Leash",
        name: "South Beach Park Off-Leash Area",
        Notes: "On sand after Labor Day and before Memorial Day",
        Prop_ID: "R046",
        state: "NY",
        postalCode: "10305"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8404521, 40.7432234],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Meridian Rd & Pacific Ave",
        city: "Flushing",
        DogRuns_Type: "Off-Leash",
        name: "Flushing Meadows Corona Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q099",
        state: "NY",
        postalCode: "11355"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9208972, 40.8698936],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Seaman Avenue & Isham Street",
        city: "New York",
        DogRuns_Type: "Run",
        name: "Inwood Hill Park Dog Run: Homer's Run",
        Url: "http://www.inwoof.com/",
        Notes: '',
        Prop_ID: "M042",
        state: "NY",
        postalCode: "10452"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.8096415, 40.5901842],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "83-02 Beach Channel Dr",
        city: "Far Rockaway",
        DogRuns_Type: "Run",
        name: "Rockaway Freeway Dog Park",
        Notes: "Rockaway Freeway & Beach 84th Street",
        Prop_ID: "Q219",
        state: "NY",
        postalCode: "11693"
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-73.9472995, 40.7564396],
        type: "Point"
      },
      properties: {
        Accessible: "N",
        address: "Vernon Blvd & 41st Ave",
        city: "Long Island City",
        DogRuns_Type: "Off-Leash",
        name: "Queensbridge Park Off-Leash Area",
        Notes: "",
        Prop_ID: "Q104",
        state: "NY",
        postalCode: "11101"
      },
      type: "Feature"
    }
  ]
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

    //
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

  let notesEl = currentFeature.properties.Notes.length ? "<h4>" + currentFeature.properties.Notes + "</h4>" : "";

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
    ", " +
    currentFeature.properties.city +
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
    // Select the listing container to append a div
    // with the class 'item' for each run
    let listings = document.getElementById("listings");
    let listing = listings.appendChild(document.createElement("div"));
    listing.className = "item";
    listing.id = "listing-" + props.Prop_ID;

    // Create a new link with the class 'title' for each run
    // and fill it with the run address
    let link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.dataPosition = counter;
    link.innerHTML = props.name;

    // Create a new div with the class 'details' for each run
    // and fill it with the city and phone number
    let details = listing.appendChild(document.createElement("div"));
    details.innerHTML = props.address + ", " + props.city;

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
};
