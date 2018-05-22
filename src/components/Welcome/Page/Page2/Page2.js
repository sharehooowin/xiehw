import React,{Component} from 'react';
import styles from './Page2.module.css';
import ScrollAnim  from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;

export default class Page1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            height:global.windowHeight
        };
    }

    render(){
        return(
            <div className={styles.container}>
                <ScrollOverPack replay={true}
                                id={this.props.id + '_page'}
                                key={this.props.id + '_page'}
                                playScale={[0.5, 1]}
                                location={this.props.id + '_page'}
                >
                    <TweenOne
                        key="img"
                        animation={{ x:'-20%' ,duration:800}}
                        resetStyleBool
                    >
                        <div className={styles.logo}>
                          <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
                        </div>
                    </TweenOne>

                    <div className={styles.content}>
                        <QueueAnim
                            key="text"
                            leaveReverse
                            ease={['easeOutCubic', 'easeInCubic']}
                        >
                            <h1 key="h1" className={styles.title}>
                                企业资源管理
                            </h1>
                            <p key="p" className={styles.text}>
                                云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。
                            </p>
                        </QueueAnim>
                    </div>

                </ScrollOverPack>
            </div>
        )
    }
}