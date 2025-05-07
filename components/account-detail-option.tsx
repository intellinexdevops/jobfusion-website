import { Menu } from '@/types/account'
import React from 'react'
import PersonalInforMenu from './personal-infor-menu'
import PortfolioMenu from './portfolio-menu'
import ContactMenu from './contact-menu'
import ApplyHistoryMenu from './apply-history-menu'
import CalendarMenu from './calendar-menu'
import NotificationMenu from './notification-menu'
import BillingMenu from './billing-menu'
import SettingMenu from './setting-menu'

export default function AccountDetailOption({ menu }: { menu: string }) {
    switch (menu) {
        case Menu.Portfolio:
            return <PortfolioMenu />
        case Menu.Contact:
            return <ContactMenu />
        case Menu.ApplyHistory:
            return <ApplyHistoryMenu />
        case Menu.Calendar:
            return <CalendarMenu />
        case Menu.Notifications:
            return <NotificationMenu />
        case Menu.Billings:
            return <BillingMenu />
        case Menu.Settings:
            return <SettingMenu />
        default:
            return <PersonalInforMenu />
    }
}
