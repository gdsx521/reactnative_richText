/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import MJRefresh, {ScrollView} from 'react-native-mjrefresh'//rn>=0.55
import DJStyleTools from './Tools/DJStyleTools'
import DJSizeTools from './Tools/DJSizeTools'
import QianTaoText from './Tools/QianTaoText'


type Props = {};
export default class App extends Component<Props> {
    state = {
        text: '下拉刷新'
    }

    render() {
        return (
            <View style={styles.view}>

                {this._getNavbar()}

                <ScrollView style={styles.scroll}>
                    {this._getScrollContentView()}
                </ScrollView>

            </View>
        )
    }

    _getNavbar() {
        return (
            <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>Demo测试</Text>
            </View>
        )
    }

    _getScrollContentView() {
        return (
            <View style={styles.scrollContent}>
                {this._getListview()}
            </View>
        )
    }

    _getListview() {


        let objs = [
            //第二段

            {
                title: '《望庐山瀑布》',
                titleColor: 'red',
                fontSize: 15,
                huanhang: 1,
            },
            {
                title: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },

            //添加一个图片
            {
                type: 1,
                imageUrl: 'http://pics.mathfunc.com/item/25739.jpg',
            },
            {
                title: '《早发白帝城》',
                titleColor: 'red',
                fontSize: 15,
                huanhang: 1,
            },
            {
                title: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },

        ]

        //
        let textViewArr = []
        for (let index = 0; index < objs.length; index++) {
            let obj = objs[index]

            //1.首先判断是否是图片
            let type = obj.type
            if ((type != null) && type == 1) {
                this._dealImageItemView(textViewArr, obj)
                continue
            }


            //2.不是图片,则添加文字
            let titleStyle = {
                fontSize: obj.fontSize,
                color: obj.titleColor,
                lineHeight: (obj.fontSize + obj.fontSize / 2),
                textAlign: 'justify',
            }


            let huanhang = obj.huanhang
            if (huanhang != null && huanhang == 1) {

                //换行直接添加
                textViewArr.push(
                    <QianTaoText
                        titleStyle={titleStyle}
                        title={obj.title}
                        childView={[]}
                    />
                )
            } else {
                //不换行,

                if (textViewArr.length == 0) {
                    //1.第一次添加
                    textViewArr.push(
                        <QianTaoText
                            titleStyle={titleStyle}
                            title={obj.title}
                            childView={[]}
                        />
                    )
                } else {
                    // 则先取出最后一个元素
                    // 并且添加子元素
                    let lastQianTaoText = textViewArr[textViewArr.length - 1]
                    let lastTextChildren = lastQianTaoText.props.childView
                    let newSubText = (
                        <Text style={titleStyle}>{obj.title}</Text>
                    )

                    //重新赋值
                    lastTextChildren.push(newSubText)
                    let newQianTaoText = (
                        <QianTaoText
                            titleStyle={lastQianTaoText.props.titleStyle}
                            title={lastQianTaoText.props.title}
                            childView={lastTextChildren}
                        />
                    )
                    textViewArr[textViewArr.length - 1] = newQianTaoText
                }
            }
        }


        return textViewArr.map((itemView) => {
            return itemView
        })
    }


    //获取图片视图
    _dealImageItemView(textViewArr, obj) {
       let imageUrl = obj.imageUrl
        if (!imageUrl || imageUrl.length == 0){
            return
        }

        let maxWidth = DJSizeTools.deviceWidth() - 30
        let imageHeight = DJSizeTools.scaleSize(220)

        let imageStyle={
            width:maxWidth,
            height: imageHeight,
        }

        let imageView = (
            <Image source={{uri:imageUrl}} style={imageStyle}/>
        )
        textViewArr.push(imageView)


    }
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: DJStyleTools.bgColor,
    },
    scroll: {
        flex: 1,
        backgroundColor: DJStyleTools.bgColor,

    },
    scrollContent: {
        marginLeft: 15,
        marginRight: 15,
    },
    navbar: {
        backgroundColor: DJStyleTools.etoneBlueUpdate,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        height: 64,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    navbarTitle: {
        fontSize: 17,
        color: '#fff',
        marginBottom: 12,
    },


    //内容
    titleLabel: {
        fontSize: 15,
        lineHeight: 22,
        color: '#333',
        marginRight: 0,
        marginLeft: 0,
    },


});

