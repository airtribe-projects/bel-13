### Requirement Gathering
#### Functional Requirements
* Type of Vehicle => Multiple different type, Car, Bus, Bike, EV
* Is multiple floors supported ==> Yes, 4 floors, 
* Capacity => Assume
* Parking Ticket => Can calculate cost according to time, there could be others   ==> Flexible
* Suppot for different parking spots
* Special Parking Like Handicapped, EV => Not needed
* Display Boards
* User Roles ==> Not needed, assume that it is already there
* Manging Spots => 
* Availability of Spots => EntryPanel
* EntryPanel, ExitPanel
* Ticket generation on Arrival
* Payment Methods ==> Yes
* Open for 24 hours
* Spot assigning strategy ==> Don't need it. FCFS
* Should there be multiple entry or exit? Concurrency Problem
    * Single Entry and Exit


### Non Function Requirements:
* Low Coupling
* High Cohesion
* Separation of concern (modular)
* Extensible


### Identifying the major entities of the system.
* Vehicle 

* VehicleType (Car, Bike, Truck, Bus)
 - IS-A relationship with Vehicle (Inheritence)

* ParkingSpot
- HAS-A (Weak) Vehicle ==> Aggregation

* ParkingSpotType 
- can be modelled as an IS-A relationship with ParknigSpot or can also be modelled as ENUM (type: )
- ENUM seems a good approach if we discount EV

* ParkingFloor
- HAS - A  (Strong) ParkingSpot (One - Many)
- Has - A (Strong) DisplayPanel

* EntryPanel
- Uses Vehicle (Association)
- Uses ParkingFloor
- Uses Ticket
- Has - A (Strong) DisplayPanel


* ExitPanel
- Uses Ticket
- Uses ParkingFloor
- Has-A (Strong)

* PaymentProcessor
- Uses a Ticket

* Ticket
- Uses a Vehicle

* ParkingLot
- Has - A (strong) ParkingFloor
- Has - A (strong) EntryPanel
- Has - A (strong) ExitPanel
- Uses - A Vehicle

* DisplayBoard (Responsibility: Showing the availability for parking Lot)

### Detail Design
#### Vehicle
+ registrationNumber
+ color
---------------
+ getRegistrationNumber()
+ getColor()

#### Car
+ fastTag
+ model
+ fuelType
+ type: ENUM(HatchBack, SUV, MPV)
---------------

### Bike

### Truck

### Bus

### ParkingSpot
- id
- status (EMPTY / OCCUPIED / SERVICED)
- type (SMALL / MEDIUM / LARGE / EXTRA_LARGE)
- vechicle (Defaults to null)
-----------------
+ getStatus()
+ parkVehicle(vehicle)
+ unparkVehcile()
+ getType()





