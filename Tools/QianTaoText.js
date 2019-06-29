import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


//react native 中Text 视图是可以嵌套Text的
//用于嵌套文本,实现富文本效果
export default class QianTaoText extends Component<Props> {

    //属性
    static  defaultProps = {
        childView: [],//嵌套的子视图TextView

        title: '',//内容
        titleStyle: {},//内容样式

    }

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <Text style={this.props.titleStyle}>

                {this.props.title}

                {this._getQianTaoListView()}

            </Text>
        )
    }

    _getQianTaoListView() {
        let arr = this.props.childView
        if (arr == null || arr.length == 0){
            return null
        }

        return arr.map((item)=>{
            return item
        })
    }

}
