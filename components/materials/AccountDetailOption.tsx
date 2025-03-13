import { Menu } from '@/types/Account'
import React from 'react'
import PersonalInforMenu from './_components/PersonalInforMenu'
import PortfolioMenu from './_components/PortfolioMenu'
import ContactMenu from './_components/ContactMenu'
import ApplyHistoryMenu from './_components/ApplyHistoryMenu'
import CalendarMenu from './_components/CalendarMenu'
import NotificationMenu from './_components/NotificationMenu'
import BillingMenu from './_components/BillingMenu'
import SettingMenu from './_components/SettingMenu'

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
