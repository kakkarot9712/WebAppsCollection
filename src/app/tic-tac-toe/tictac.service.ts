import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class TicTacService {
    constructor(){}

    private winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    
        [0, 4, 8], 
        [2, 4, 6]
    ]

    playerNameProvider = new Subject<{p1:string, p2:string}>()
    playerWinner = new Subject<string>()
    gameStatus = new Subject<boolean>()
    gameReset = new Subject<boolean>()
    turnOf = new BehaviorSubject<string>(null)

    isWinner(gridState: number[]){
        for (let combination of this.winningCombo) {
            if((gridState[combination[0]] === gridState[combination[1]]) && (gridState[combination[1]] === gridState[combination[2]]) && (gridState[combination[2]] !== 0)){
                return true
            }
        }
        return false
    }
}
