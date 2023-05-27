import news  from '../images/icons/category/NEW.svg';
import popular  from '../images/icons/category/POPULAR.svg';
import slots  from '../images/icons/category/SLOTS.svg';
import game_img1 from '../images/characters/CHARACTER-AlienLady.png'


import about  from '../images/icons/menu/ABOUT.svg';
import about_select  from '../images/icons/menu/ABOUT-SELECT.svg';

import banking  from '../images/icons/menu/BANKING.svg';
import banking_select  from '../images/icons/menu/BANKING-SELECT.svg';

import games  from '../images/icons/menu/GAMES.svg';
import games_select  from '../images/icons/menu/GAMES-SELECT.svg';

import language  from '../images/icons/menu/LANGUAGE.svg';
import language_select  from '../images/icons/menu/LANGUAGE-SELECT.svg';

import loyalty  from '../images/icons/menu/LOYALTY.svg';
import loyalty_select   from '../images/icons/menu/LOYALTY-SELECT.svg';

import my_account  from '../images/icons/menu/MY-ACCOUNT.svg';
import my_account_select  from '../images/icons/menu/MY-ACCOUNT-SELECT.svg';

import promotions  from '../images/icons/menu/PROMOTIONS.svg';
import promotions_select  from '../images/icons/menu/PROMOTIONS-SELECT.svg';

import support  from '../images/icons/menu/SUPPORT.svg';
import support_select  from '../images/icons/menu/SUPPORT-SELECT.svg';


export const bottomheader_data=[
    {
        id:1,
        name:'news',
        icon:news,
    },
    {
        id:1,
        name:'popular',
        icon:popular,
    },
    {
        id:1,
        name:'slots',
        icon:slots,
    },
];
export const gameList=[
    {
        id:1,
        name:'game name 1',
        value:200700,
        rating:3,
        slogan:'play for joy',
        img:game_img1,
        cat_id:1,
    },
    {
        id:2,
        name:'game name 1',
        value:200700,
        rating:3,
        slogan:'play for joy',
        img:game_img1,
        cat_id:1,
    },
    {
        id:3,
        name:'game name 1',
        value:200700,
        rating:3,
        slogan:'play for joy',
        img:game_img1,
        cat_id:1,
    },
];

export const sidemenu=[
    {
        id:1,
        name:'my account',
        icon:my_account,
        iconSelect:my_account_select,
        submenuStatus:0,
    },
    {
        id:2,
        name:'games',
        icon:games,
        iconSelect:games_select,
        submenuStatus:1,
    },
    {
        id:3,
        name:'promotions',
        icon:promotions,
        iconSelect:promotions_select,
        submenuStatus:0,
    },
    {
        id:4,
        name:'loyalty',
        icon:loyalty,
        iconSelect:loyalty_select,
        submenuStatus:0,
    },
    {
        id:5,
        name:'banking',
        icon:banking,
        iconSelect:banking_select,
        submenuStatus:0,
    },
    {
        id:6,
        name:'about',
        icon:about,
        iconSelect:about_select,
        submenuStatus:0,
    },
    {
        id:7,
        name:'support',
        icon:support,
        iconSelect:support_select,
        submenuStatus:0,
    },
    {
        id:8,
        name:'languages',
        icon:language,
        iconSelect:language_select,
        submenuStatus:1,
    },

];