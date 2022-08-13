import { MiterResultModel } from "./Models";

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

    public static ComputeMiter(pipeDia:number, theta:number, isLongRad?:boolean, isShortRad?:boolean, pipeRad?:number):MiterResultModel {
        
        let miterResult:MiterResultModel = new MiterResultModel(pipeDia);
        miterResult.PipeDia = pipeDia;

        if (pipeRad != null ){
            miterResult.PipeRadius = pipeRad;
        }

        if (isLongRad) {
            miterResult.PipeRadius = pipeDia * 1.5;
        }else if (isShortRad) {
            miterResult.PipeRadius = pipeDia;
        } 
        
        miterResult.TakeOff = miterResult.PipeRadius * Math.tan((theta*this.DegToRad)/2);
        miterResult.InnerThroatLength = ((miterResult.PipeRadius) - (pipeDia/2)) * this.DegToRad * theta;
        miterResult.OuterThroatLength = ((miterResult.PipeRadius) + (pipeDia/2)) * this.DegToRad * theta;

        return miterResult;
    }

}