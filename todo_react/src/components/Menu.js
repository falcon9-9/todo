import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

class Menu extends Component {
    // 根据动态路由的 path 渲染「当前」菜单
    classForPath = (menu) => {
        let path = this.props.path
        let c = classNames({
            'active': menu.url === path,
        })
        return c
    }
    render() {
        let menus = [
            {
                text: 'home',
                url: '/',
            },
            {
                text: 'todo',
                url: '/todo',
            },
            {
                text: 'login',
                url: '/login',
            },
        ]
        return (
            <nav>
                {
                    menus.map((e, index) =>
                        <Link to={e.url} key={index} className={this.classForPath(e)}>{e.text}</Link>
                    )
                }
            </nav>
        )
    }
}

export default Menu
