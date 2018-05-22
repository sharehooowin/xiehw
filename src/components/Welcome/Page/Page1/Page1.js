import React,{Component} from 'react';
import styles from './Page1.module.css';
import ScrollAnim  from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
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
            <div style={{height:this.state.height+'px'}} className={styles.container}>
                <ScrollOverPack replay={true}
                                id={this.props.id + '_page'}
                                key={this.props.id + '_page'}
                                playScale={[0.5, 1]}
                >

                    <QueueAnim delay={300}
                               type="bottom"
                               className={styles.content}
                               key={this.props.id + '_wrapper'}
                               id={this.props.id + '_wrapper'}
                    >
                        <div className={styles.logo}
                              key={this.props.id + '_logo'}
                              id={this.props.id + '_logo'}
                        >
                            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />
                        </div>
                        <p  className={styles.title}
                            key={this.props.id + '_title'}
                            id={this.props.id + '_title'}
                        >
                            一个高效的页面动画解决方案
                        </p>
                        <p  className={styles.title}
                            key={this.props.id + '_message'}
                            id={this.props.id + '_message'}
                        >
                            一个高效的页面动画解决方案
                        </p>
                    </QueueAnim>

                </ScrollOverPack>
            </div>
        )
    }
}