import styled from 'styled-components'

import desktopImgBg from '../../assets/img/image-hero-desktop.jpg'


export const Container = styled.header`
    width: 100%;
    height: 400px;
    background: url(${desktopImgBg}) no-repeat left top;
    
`

export const Content = styled.div`
    width: 100%;
    max-width: 1190px;
    padding: 50px 40px 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .seo-h1 {
        font-size: 1px;
        visibility: hidden;
    }
`

export const Navigation = styled.nav`    
    ul {
        width: 100%;
        max-width: 500px;
        display: flex;

        li {
            margin-left: 50px;
            list-style: none;
        }
    }
`