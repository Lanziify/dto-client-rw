export type BaseSideBarMenuItem = {
  name: string
  path: string
  icon: JSX.Element
  type: 'normal'
}

export type AccordionSideBarMenuItem = {
  name: string
  path: string
  icon: JSX.Element
  type: 'accordion'
  children: BaseSideBarMenuItem[]
}

export type SideBarMenuItemType = BaseSideBarMenuItem | AccordionSideBarMenuItem
