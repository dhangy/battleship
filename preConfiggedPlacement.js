function randomPlayerShipPlacer(model){
    var randomizer = generatePoint();
    console.log(randomizer)
    switch(randomizer) {
        case 0:
            placeShip(model.playerShips.carrier,2,4,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 6,5,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 7,3,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 3, 1,"vertical",model.playerGrid);
            placeShip(model.playerShips.destroyer, 0,0,"vertical",model.playerGrid);
            break;
        case 1:
            placeShip(model.playerShips.carrier,3,2,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 1,0,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 9,1,"horizontal",model.playerGrid);
            placeShip(model.playerShips.submarine, 5, 5,"vertical",model.playerGrid);
            placeShip(model.playerShips.destroyer, 6,1,"horizontal",model.playerGrid);
            break;
        case 2:
            placeShip(model.playerShips.carrier,5,1,"vertical",model.playerGrid);
            placeShip(model.playerShips.battleShip, 1,6,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 4,8,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 3, 0,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 6,3,"horizontal",model.playerGrid);
            break;
        case 3:
            placeShip(model.playerShips.carrier,8,1,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 1,5,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 3,8,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 1, 1,"vertical",model.playerGrid);
            placeShip(model.playerShips.destroyer, 5,3,"vertical",model.playerGrid);
            break;
        case 4:
            placeShip(model.playerShips.carrier,4,1,"vertical",model.playerGrid);
            placeShip(model.playerShips.battleShip, 6,5,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 0,3,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 8, 5,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 5,3,"vertical",model.playerGrid);
            break;
        case 5:
            placeShip(model.playerShips.carrier,6,5,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 9,2,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 0,3,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 4, 1,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 2,5,"horizontal",model.playerGrid);
            break;
        case 6:
            placeShip(model.playerShips.carrier,1,1,"vertical",model.playerGrid);
            placeShip(model.playerShips.battleShip, 9,2,"horizontal", model.playerGrid);
            placeShip(model.playerShips.cruiser, 1,8,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 6, 5,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 8,7,"horizontal",model.playerGrid);
            break;
        case 7:
            placeShip(model.playerShips.carrier,8,4,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 6,0,"vertical", model.playerGrid);
            placeShip(model.playerShips.cruiser, 1,8,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 3, 3,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 1,3,"horizontal",model.playerGrid);
            break;
        case 8:
            placeShip(model.playerShips.carrier,2,1,"horizontal",model.playerGrid);
            placeShip(model.playerShips.battleShip, 4,8,"vertical", model.playerGrid);
            placeShip(model.playerShips.cruiser, 6,1,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 5, 3,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 0,0,"horizontal",model.playerGrid);
            break;
        case 9:
            placeShip(model.playerShips.carrier,2,6,"vertical",model.playerGrid);
            placeShip(model.playerShips.battleShip, 4,8,"vertical", model.playerGrid);
            placeShip(model.playerShips.cruiser, 7,3,"vertical",model.playerGrid);
            placeShip(model.playerShips.submarine, 3, 1,"horizontal",model.playerGrid);
            placeShip(model.playerShips.destroyer, 0,0,"horizontal",model.playerGrid);
            break;
            }
        }

        function randomComputerShipPlacer(model){
            var randomizer = generatePoint();
            console.log(randomizer);
            switch(randomizer) {
                case 0:
                    placeShip(model.computerShips.carrier,2,4,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 6,5,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 7,3,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 3, 1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 0,0,"vertical",model.computerGrid);
                    break;
                case 1:
                    placeShip(model.computerShips.carrier,3,2,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 1,0,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 9,1,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.submarine, 5, 5,"vertical",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 6,1,"horizontal",model.computerGrid);
                    break;
                case 2:
                    placeShip(model.computerShips.carrier,5,1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 1,6,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 4,8,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 3, 0,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 6,3,"horizontal",model.computerGrid);
                    break;
                case 3:
                    placeShip(model.computerShips.carrier,8,1,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 1,5,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 3,8,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 1, 1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 5,3,"vertical",model.computerGrid);
                    break;
                case 4:
                    placeShip(model.computerShips.carrier,4,1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 6,5,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 0,3,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 8, 5,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 5,3,"vertical",model.computerGrid);
                    break;
                case 5:
                    placeShip(model.computerShips.carrier,6,5,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 9,2,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 0,3,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 4, 1,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 2,5,"horizontal",model.computerGrid);
                    break;
                case 6:
                    placeShip(model.computerShips.carrier,1,1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 9,2,"horizontal", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 1,8,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 6, 5,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 8,7,"horizontal",model.computerGrid);
                    break;
                case 7:
                    placeShip(model.computerShips.carrier,8,4,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 6,0,"vertical", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 1,8,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 3, 3,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 1,3,"horizontal",model.computerGrid);
                    break;
                case 8:
                    placeShip(model.computerShips.carrier,2,1,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 4,8,"vertical", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 6,1,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 5, 3,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 0,0,"horizontal",model.computerGrid);
                    break;
                case 9:
                    placeShip(model.computerShips.carrier,2,6,"vertical",model.computerGrid);
                    placeShip(model.computerShips.battleShip, 4,8,"vertical", model.computerGrid);
                    placeShip(model.computerShips.cruiser, 7,3,"vertical",model.computerGrid);
                    placeShip(model.computerShips.submarine, 3, 1,"horizontal",model.computerGrid);
                    placeShip(model.computerShips.destroyer, 0,0,"horizontal",model.computerGrid);
                    break;
                    }
                }
