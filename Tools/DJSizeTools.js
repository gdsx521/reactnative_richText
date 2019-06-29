/**
 * Created by zhuoy on 2017/6/27.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */


import {
    Dimensions,
    PixelRatio,
    Platform,
    Alert,
} from 'react-native';


export const dWidth = Dimensions.get('window').width;           //设备的宽度
export const dHeight = Dimensions.get('window').height;         //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

let pixelRatio = PixelRatio.get();                              //当前设备的像素密度



/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */
// const defaultPixel = 2;                                         //iphone6的像素密度
const defaultPixel = PixelRatio.get();

//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(dHeight / h2, dWidth / w2);    //获取缩放比例

var DJSizeTools = {


    //比例距离
    scaleSize:function(size) {

        size = Math.round(size * scale + 0.5);
        return 2*(size / defaultPixel);
    },


    //单位像素,pixel * 1 代表0.1宽度x
    pixelSize:function(size){
        //单位像素
        let rsize =  1 / PixelRatio.get() * size;
        return rsize;
    },

    //屏幕宽度
    deviceWidth:function(){
        return dWidth;
    },

    //屏幕高度
    deviceHeight:function () {
        return dHeight;
    },

    //适配ios8.0 flatlist向上偏移
    flatListmarginTopAdjust:function () {

        if (Platform.OS =='android'){
            return 0
        } else if  (Platform.OS =='ios'){
            let version = Platform.Version
            if (version.indexOf("8.") == 0){
                return 20
            }
            return 0
        }
        return 0
    }

};

module.exports = DJSizeTools;
