import { PipeWeightModel } from "./Models";

export class GeometricCalc {

    static CarbStlLbCuIn:number = 0.2833;
    static WaterLbCuIn:number = 0.036127

    public static CalculatePipeWeight(PipeLength:number, PipeDia:number, wallThick:number):PipeWeightModel {
        let model = new PipeWeightModel(PipeDia, PipeLength, wallThick);
       
        model.MetalWeight = model.PipeLength * (model.PipeDia * Math.PI) * model.WallThickness * this.CarbStlLbCuIn;
        model.WaterWeight = model.PipeLength * (((model.PipeDia/2)**2) * Math.PI) * this.WaterLbCuIn;
        model.PipeWeight = model.MetalWeight + model.WaterWeight;

        return model

    }

}