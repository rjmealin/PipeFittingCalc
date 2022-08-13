
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