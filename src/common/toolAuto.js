
import { getWidthPixels, getHeightPixels } from '@auto.pro/core';
import helperBridge from '@/system/helperBridge';

export function requestMyScreenCapture (callback) {
    requestScreenCaptureAsync(getWidthPixels() < getHeightPixels()).then(function(success) {
        if (success) {
            helperBridge.init();
        }
        callback(success);
    });
}