
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