# Chargemap-GQL
endpoint: ` http://env-3354092.jelastic.metropolia.fi/graphql`
  ```graphql
# get connection types
{
  ConnectionType {
    id
    FormalName
    Title
    }
  }

````
```graphql
 # get level types
{
  LevelType {
     id
     Comments
     IsFastChargeCapable
    Title
 }
}
````
```graphql
# get current types
 {
  CurrentType {
     id
     Description
     Title
   }
}
````
```graphql
 # modify station
  mutation  {
          modifyStation(    
            id: "5e590b0a7536c009841db2e3",
            Title: "New title",
          )
          {
            Title
            AddressLine1
            Town
          }
 }
````
```graphql
# add station
mutation {
  addStation(
    Connections: [
               {
                 ConnectionTypeID: "someConnectionTypeID",
                 CurrentTypeID: "someCurrentTypeID",
                 LevelID: "someLevelID",
                 Quantity: 2
               }
             ],
             Postcode: "00000",
             Title: "Some title",
             AddressLine1: "Some address",
             StateOrProvince: "Some state",
             Town: "Some town",
      Location: {coordinates: [some_lng, some_lat]}
     )
    {
    AddressLine1
    Town
  }
}


````
```graphql
 # get stations by boundaries:
{
 stations(bounds: {_southWest: {lat: 60.0918986743294, lng: 24.60319519042969}, _northEast: {lat: 60.38196898834704, lng: 24.94033813476563}}) {
    Title
    Town
    AddressLine1
   Location {
      type
      coordinates
    }
    Connections {
        Quantity
     ConnectionTypeID {
        Title
     }
    CurrentTypeID {
        Title
     }
     LevelID {
         Title
        Comments
        IsFastChargeCapable
      }
    }
  }
}

````
```graphql
 # station by id
{
  station(id: "5e590b0a7536c009841db2e3") {
   Title
   Town
   AddressLine1
   Location {
    type
    coordinates
   }
   Connections {
         Quantity
         ConnectionTypeID {
            Title
         }
         CurrentTypeID {
              Title
          }
         LevelID {
                 Title
                 Comments
                 IsFastChargeCapable
          }
    }
  }
}

````
```graphql
# limit the number of stations
{
   stations(start: 15, limit: 3) {
      Title
      Town
      AddressLine1
       Location {type coordinates}
       Connections {
               Quantity
               ConnectionTypeID {
               Title
        }
        CurrentTypeID {
               Title
         }
        LevelID {
                 Title
                 Comments
                 IsFastChargeCapable
        }
      }
  }
}

````
```graphql
 #delete station
{
  deleteStation(id: "someStationID"){
            id
     }
}
```
