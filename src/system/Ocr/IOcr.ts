export class OcrResult {
    confidence: number;
    label: string;
    rotation: number;
    points: Array<{x: number, y: number}>;
    similar?: number | false;
    constructor(confidence: number, label: string, rotation: number, points: Array<{x: number, y: number}>) {
        this.confidence = confidence;
        this.label = label;
        this.rotation = rotation;
        this.points = points;
    }
}

export interface IOcrDetector {
    instance: any;
    loadImage(bitmap: any): Array<OcrResult> 
}

export interface IOcr {
    typeName: string;
    detector: IOcrDetector;
    isInstalled(): boolean;
    install(option: { failCallback: Function, successCallback: Function }): void;
    prepare(): IOcrDetector;
    findText(getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult>;
    findTextByOcr(detector: IOcrDetector, getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult>;
    findTextByOcrResult (text: string, ocrResult: Array<OcrResult>, textMatchMode: string, similarityRatio?: number): Array<OcrResult>;
}
