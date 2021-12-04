import styled from 'styled-components'

import desktopImgBg from '../../assets/img/image-hero-desktop.jpg'


export const Container = styled.header`
    .gradient {
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(0,0,0,0.7));
        position: absolute;
    }
    width: 100%;
    height: 400px;
    background: url(${desktopImgBg}) no-repeat left top;
`


export const Content = styled.div`
    width: 100%;
    max-width: 1190px;
    padding: 48px 40px 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;

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
            margin-left: 30px;
            list-style: none;

            a {
                font-size: 0.85rem;
                color: #fff;
                text-decoration: none;
                font-weight: 500;
            }
        }
    }
`