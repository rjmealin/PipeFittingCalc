export class TrigCalculations {
    static DegToRad:number = 0.01745533;

    public static ComputeTravel(isCos:boolean, isSine:boolean, isTan:boolean, theta:number, leg:number):number {
        let degrees:number =  theta * this.DegToRad

        if (isCos) {
            return leg/Math.cos(degrees);
        } else if (isSine){
            return leg/Math.sin(degrees);
        } else if(isTan) {
            return Math.tan(degrees);
        } else {
            return -1;
        }

    }
}