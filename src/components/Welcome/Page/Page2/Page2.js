import React,{Component} from 'react';
import styles from './Page2.module.css';
import ScrollAnim  from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import {Button} from 'antd';
const ScrollOverPack = ScrollAnim.OverPack;

export default class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            height:global.windowHeight
        };
    }

    handleCMSClick = () => {
        console.log(this.props);
        this.props.history.push('/cms');
    }

    render(){
        return(
            <div className={styles.container}>
                <ScrollOverPack replay={true}
                                id={this.props.id + '_page'}
                                key={this.props.id + '_page'}
                                playScale={[0.2, 1]}
                                location={this.props.id + '_page'}
                >

                    <div className={styles.logo}
                         key={this.props.id + "_logo"}
                    >
                        <TweenOne
                            key="img"
                            animation={{ x:'-20%' ,duration:800}}
                            resetStyleBool
                        >
                            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
                        </TweenOne>
                    </div>


                    <div className={styles.content}
                         key={this.props.id + "_content"}
                    >
                        <TweenOne
                            key="img"
                            animation={{ x:'20%' ,duration:800}}
                            resetStyleBool
                        >
                        <QueueAnim
                            key="text"
                            leaveReverse
                            ease={['easeOutCubic', 'easeInCubic']}
                        >
                            <h1 key="h1" className={styles.title}>
                                企业资源管理系统
                            </h1>
                            <p key="p" className={styles.text}>
                                快速高效的企业资源管理系统解决方案
                            </p>
                            <Button type="primary" onClick={()=>{this.handleCMSClick()}}>进入</Button>
                        </QueueAnim>
                        </TweenOne>
                    </div>

                </ScrollOverPack>
            </div>
        )
    }
}