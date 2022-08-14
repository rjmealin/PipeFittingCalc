import { DecimalFtToFtInModel } from "./Models";

export class BasicConversions {

    public static ConvertFtInToDecimalFt( feet:number, inches:number, denom:number, numerator:number):number {
        let decimal:number;
        let fraction:number;

        fraction = numerator/denom;
        
        decimal = feet;

        decimal = decimal + inches/12;

        decimal = decimal + fraction/12;

        return decimal;
        
    }

    public static ConvertDecimalFtToFtIn(decFeet:number):DecimalFtToFtInModel {
        
        let feet:number;
        let inches:number;
        let den:number;
        let numerator:number;
        let decInches:number;

        feet = Math.trunc(decFeet);
        
        decInches = decFeet % 1;

        inches = Math.trunc(decInches * 12);

        


        
        
        return new DecimalFtToFtInModel(feet, inches, den, numerator)

    }
}