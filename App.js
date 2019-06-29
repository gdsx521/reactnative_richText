/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

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
            //第一段
            {
                title: '杨洋',
                titleColor: 'red',
                fontSize: 15,
                huanhang: 1,
            },
            {
                title: '国家一级演员，凭电影《横空出世》在长春电影节夺得平生第一个“影帝”，继而拥有了一定的知名度。在电视剧《亮剑》中饰演李云龙在中国家喻户晓，跃居一线演员。国家一级演员，凭电影《横空出世》在长春电影节夺得平生第一个“影帝”，继而拥有了一定的知名度。在电视剧《亮剑》中饰演李云龙在中国家喻户晓，跃居一线演员。',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },

            //第二段
            {
                title: '李小萌 （Annabel Lee）',
                titleColor: 'red',
                fontSize: 15,
                huanhang: 1,
            },

            {
                title: '，1985年9月12日出生于天津市和平区，毕业于中央戏剧学院表演系本科2009级，中国大陆女演员。',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },
            {
                title: '2001年，凭借《谁说我不在乎》获得第21届金鸡奖最佳女配角提名。2003年，获得第4届金鹰新秀大赛新秀与最受媒体关注奖 [1]  。2006年，凭借喜剧《我不是女生》获得第5届广州大学生电影节最受欢迎新人奖 [2-4]  。2009年，第一次出演话剧《来世许你个今生》 [5]  。2012年，凭借话剧《第一次的亲密接触》获得了首届北京优秀小剧场剧目展演优秀表演奖以及第三届壹戏剧大赏新锐女演员奖提名 [6-8]  ，同年，出演电影版《金太狼的幸福生活》。2014年3月，出演改编自路遥的同名小说的电视剧《平凡的世界》 [9]  。2016年，主演青春爱情年代大戏《爱人同志》',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },
            {
                title: '2002年，在全国青年歌手大赛上获通俗唱法优秀奖',
                titleColor: DJStyleTools.etoneBlue,
                fontSize: 15,
                huanhang: 0,
            },
            {
                title: '2002年，在全国青年歌手大赛上获通俗唱法优秀奖',
                titleColor: '#333',
                fontSize: 15,
                huanhang: 0,
            },




        ]


        let textViewArr = []
        objs.forEach((obj) => {

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
                    let newQianTaoTextTitle = lastQianTaoText.props.title
                    let newQianTaoTextTitleStyle = lastQianTaoText.props.titleStyle

                    let newQianTaoText = (
                        <QianTaoText
                            titleStyle={newQianTaoTextTitleStyle}
                            title={newQianTaoTextTitle}
                            childView={lastTextChildren}
                        />
                    )
                    textViewArr[textViewArr.length - 1] = newQianTaoText
                }
            }
        })


        return textViewArr.map((itemView) => {
            return itemView
        })
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

