import { ReactComponent as homeIcon } from '../assets/icons/home.svg'
import { ReactComponent as shortsIcon } from '../assets/icons/shorts.svg'
import { ReactComponent as subscriptionsIcon } from '../assets/icons/subscriptions.svg'
import { ReactComponent as libraryIcon } from '../assets/icons/library.svg'
import { ReactComponent as historyIcon } from '../assets/icons/history.svg'
import { ReactComponent as videoIcon } from '../assets/icons/yourVids.svg'
import { ReactComponent as watchIcon } from '../assets/icons/later.svg'

import { ReactComponent as trendingIcon } from '../assets/icons/trending.svg'
import { ReactComponent as shoppingIcon } from '../assets/icons/shopping.svg'
import { ReactComponent as newsIcon } from '../assets/icons/news.svg'
import { ReactComponent as musicIcon } from '../assets/icons/music.svg'
import { ReactComponent as filmsIcon } from '../assets/icons/films.svg'
import { ReactComponent as liveIcon } from '../assets/icons/live.svg'
import { ReactComponent as fashionIcon } from '../assets/icons/fashion.svg'
import { ReactComponent as gamingIcon } from '../assets/icons/gaming.svg'
import { ReactComponent as learningIcon } from '../assets/icons/learning.svg'
import { ReactComponent as sportsIcon } from '../assets/icons/sports.svg'

import { ReactComponent as premiumIcon } from '../assets/icons/ytPremium.svg'
import { ReactComponent as studioIcon } from '../assets/icons/ytStudio.svg'
import { ReactComponent as music2Icon } from '../assets/icons/ytMusic.svg'
import { ReactComponent as kidsIcon } from '../assets/icons/ytKids.svg'

import { ReactComponent as settingsIcon } from '../assets/icons/settings.svg'
import { ReactComponent as flagIcon } from '../assets/icons/flag.svg'
import { ReactComponent as helpIcon } from '../assets/icons/help.svg'
import { ReactComponent as feedbackIcon } from '../assets/icons/feedback.svg'


interface btns {
    icon: any
    text: string
}

export const generalMenuBtns: btns[] = [
    { icon: homeIcon, text: 'Home' },
    { icon: shortsIcon, text: 'Shorts' },
    { icon: subscriptionsIcon, text: 'Subscriptions' },
];

export const userMenuBtns: btns[] = [
    { icon: libraryIcon, text: 'Library' },
    { icon: historyIcon, text: 'History' },
    { icon: videoIcon, text: 'Your Videos' },
    { icon: watchIcon, text: 'Watch Later' },
];

export const exploreBtns: btns[] = [
    { icon: trendingIcon, text: 'Trending' },
    { icon: shoppingIcon, text: 'Shopping' },
    { icon: musicIcon, text: 'Music' },
    { icon: filmsIcon, text: 'Films' },
    { icon: liveIcon, text: 'Live' },
    { icon: gamingIcon, text: 'Gaming' },
    { icon: newsIcon, text: 'News' },
    { icon: sportsIcon, text: 'Sports' },
    { icon: learningIcon, text: 'Learning' },
    { icon: fashionIcon, text: 'Fashion & Beauty' },
];

export const productBtns: btns[] = [
    { icon: premiumIcon, text: 'Youtube Premium' },
    { icon: studioIcon, text: 'Youtube Studio' },
    { icon: music2Icon, text: 'Youtube Music' },
    { icon: kidsIcon, text: 'Youtube Kids' },
];

export const settingsBtns: btns[] = [
    { icon: settingsIcon, text: 'Settings' },
    { icon: flagIcon, text: 'Report History' },
    { icon: helpIcon, text: 'Help' },
    { icon: feedbackIcon, text: 'Send Feedback' },
];