import { Menu } from '@/types/account'
import React from 'react'
import PersonalInforMenu from './_components/personal-infor-menu'
import PortfolioMenu from './_components/portfolio-menu'
import ContactMenu from './_components/contact-menu'
import ApplyHistoryMenu from './_components/apply-history-menu'
import CalendarMenu from './_components/calendar-menu'
import NotificationMenu from './_components/notification-menu'
import BillingMenu from './_components/billing-menu'
import SettingMenu from './_components/setting-menu'

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
