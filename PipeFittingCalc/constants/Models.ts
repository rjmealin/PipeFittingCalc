
export class MiterResultModel {

    constructor( pipeDia:number) {
        this.TakeOff = 0;
        this.InnerThroatLength = 0;
        this.OuterThroatLength = 0;
        this.PipeDia = pipeDia;
        this.PipeRadius = 0;
    }

    public TakeOff:number;
    public InnerThroatLength:number;
    public OuterThroatLength: number;
    public PipeDia:number;
    public PipeRadius:number;

}

export class PipeWeightModel {

    constructor ( pipeD:number, pipeL:number, pipeWT:number ) {
        this.PipeDia = pipeD;
        this.PipeLength = pipeL;
        this.WallThickness = pipeWT;
    }

    public PipeDia: number;
    public PipeWeight: number = 0;
    public PipeLength: number;
    public WallThickness:number;
    public WaterWeight:number = 0;
    public MetalWeight:number = 0;

}

export class EqualSpreadOffsetModel {

    constructor ( pipeDia1: number, pipeDia2:number, spread:number, angle: number ){
        this.PipeDiameter1 = pipeDia1;
        this.Angle = angle;
        this.Spread = spread;
        this.PipeDiameter2 = pipeDia2;
    }

    public PipeDiameter1:number;
    public PipeDiameter2:number;
    public Spread: number;
    public Angle: number;
    public StepAhead?: number;

    

}

export class SimpleOffsetModel {

    constructor ( pipeDia:number, run?:number, rise?:number, angle?:number) {

        this.PipeDiameter = pipeDia;
        this.Run = run;
        this.Rise = rise;
        this.Angle = angle;

    }

    public PipeDiameter:number;
    public Run?:number;
    public Rise?:number;
    public Travel?:number;
    public Angle?:number;
    public CutLength?:number;

}

export class MeasurementModel {

    constructor(feet?:number, inches?:number, den?:number, numerator?:number, decimalFeet?:number) {
        
        if (feet != null && inches != null && den != null && numerator != null) {
            this.Feet = feet;
            this.Inches = inches;
            this.Denom = den;
            this.Numerator = numerator;
        } else if (decimalFeet != null) {
            this.DecimalFeet = decimalFeet
        }
        

    }
    public Feet?:number;
    public Inches?:number;
    public Denom?:number;
    public Numerator?:number;
    public DecimalFeet?:number;

}

//Might not need, not sure why this is here
export class DecimalFtToFtInModel{

    constructor(feet:number, inches:number, den:number, num:number){}


    public Feet:number;
    public Inches:number;
    public Denom
}